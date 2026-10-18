// Central WordPress REST API service.
// All WordPress communication lives here — presentation components never call the API directly.
// Public, read-only access only (no authentication at this stage).

const API_BASE = (
  process.env.REACT_APP_WP_API_BASE || "https://lifechoices.co.za/wp-json/wp/v2"
).replace(/\/$/, "");

const DEFAULT_TIMEOUT = 15000;

// Simple in-memory GET cache (per session) so content isn't refetched repeatedly.
const _cache = new Map();

// Low-level fetch helper with query params, timeout, caching and clear error handling.
async function wpFetch(path, { params = {}, timeout = DEFAULT_TIMEOUT, signal, cache = true } = {}) {
  const url = new URL(`${API_BASE}${path}`);
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      url.searchParams.set(key, value);
    }
  });
  const key = url.toString();
  if (cache && _cache.has(key)) return _cache.get(key);

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeout);
  if (signal) signal.addEventListener("abort", () => controller.abort());

  try {
    const res = await fetch(key, { method: "GET", headers: { Accept: "application/json" } });
    if (!res.ok) {
      throw new Error(`WordPress API error ${res.status} ${res.statusText} (${path})`);
    }
    const data = await res.json();
    const result = {
      data,
      total: Number(res.headers.get("X-WP-Total")) || null,
      totalPages: Number(res.headers.get("X-WP-TotalPages")) || null
    };
    if (cache) _cache.set(key, result);
    return result;
  } catch (err) {
    if (err.name === "AbortError") {
      throw new Error(`WordPress API request timed out (${path})`);
    }
    throw new Error(err.message || `WordPress API request failed (${path})`);
  } finally {
    clearTimeout(timer);
  }
}

// ---- Reusable endpoint functions ----

export function getPages({ perPage = 10, page = 1, fields, signal } = {}) {
  return wpFetch("/pages", {
    params: { per_page: perPage, page, _fields: fields },
    signal
  });
}

export function getPosts({ perPage = 10, page = 1, fields, embed = true, categories, search, signal } = {}) {
  return wpFetch("/posts", {
    params: {
      per_page: perPage,
      page,
      _fields: fields,
      _embed: embed ? 1 : undefined,
      categories,
      search
    },
    signal
  });
}

export function getMedia({ perPage = 10, page = 1, fields, signal } = {}) {
  return wpFetch("/media", {
    params: { per_page: perPage, page, _fields: fields },
    signal
  });
}

// All non-empty post categories.
export async function getCategories({ signal } = {}) {
  const { data } = await wpFetch("/categories", {
    params: { per_page: 100, _fields: "id,name,slug,count", orderby: "count", order: "desc" },
    signal
  });
  return (Array.isArray(data) ? data : []).filter((c) => c.count > 0);
}

// Retrieve a single post by slug (with embedded media/terms). Returns null if not found.
export async function getPostBySlug(slug, { signal } = {}) {
  const { data } = await wpFetch("/posts", { params: { slug, _embed: 1 }, signal });
  return Array.isArray(data) && data.length > 0 ? data[0] : null;
}

// Retrieve a single page by slug. Returns the page object or null if not found.
export async function getPageBySlug(slug, { signal } = {}) {
  const { data } = await wpFetch("/pages", { params: { slug }, signal });
  return Array.isArray(data) && data.length > 0 ? data[0] : null;
}

// Retrieve a single media item by id (useful for resolving featured images).
export async function getMediaById(id, { signal } = {}) {
  const { data } = await wpFetch(`/media/${id}`, { signal });
  return data || null;
}

// Small helper to safely strip HTML from rendered WordPress fields for previews.
export function stripHtml(htmlString = "") {
  if (typeof document === "undefined") return htmlString.replace(/<[^>]+>/g, "");
  const tmp = document.createElement("div");
  tmp.innerHTML = htmlString;
  return (tmp.textContent || tmp.innerText || "").replace(/\s+/g, " ").trim();
}

export const WP_API_BASE = API_BASE;
