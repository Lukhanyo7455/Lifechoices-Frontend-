import React, { useEffect, useState } from "react";
import { Loader2, AlertTriangle, CheckCircle2, Lock } from "lucide-react";
import PageHero from "../components/common/PageHero";
import Section from "../components/common/Section";
import Reveal from "../components/common/Reveal";
import {
  getPages,
  getPosts,
  getMedia,
  getPageBySlug,
  stripHtml,
  imagesFromHtml,
  WP_API_BASE
} from "../services/wordpress";

function StatusCard({ title, state }) {
  const restricted = state.restricted;
  return (
    <div className="card-3d p-6">
      <div className="flex items-center justify-between">
        <h3 className="display text-xl text-lc-ink">{title}</h3>
        {state.loading && <Loader2 className="h-5 w-5 animate-spin text-lc-muted" />}
        {!state.loading && restricted && <Lock className="h-5 w-5 text-lc-muted" />}
        {!state.loading && !restricted && state.error && <AlertTriangle className="h-5 w-5 text-lc-crimson" />}
        {!state.loading && !restricted && !state.error && <CheckCircle2 className="h-5 w-5 text-lc-green" />}
      </div>

      {state.loading && <p className="mt-5 text-sm text-lc-muted">Loading from WordPress.com…</p>}

      {!state.loading && restricted && (
        <div className="mt-5 rounded-lg border border-lc-ink/15 bg-lc-paper2 p-4 text-sm text-lc-ink/70">
          {state.restricted}
        </div>
      )}

      {!state.loading && !restricted && state.error && (
        <div className="mt-5 rounded-lg border border-lc-crimson/30 bg-lc-crimson/5 p-4 text-sm text-lc-crimson">
          {state.error}
        </div>
      )}

      {!state.loading && !restricted && !state.error && (
        <div className="mt-5">
          {state.total != null && (
            <p className="text-sm text-lc-muted">
              Total available: <span className="font-semibold text-lc-ink">{state.total.toLocaleString("en-US")}</span>
            </p>
          )}
          <ul className="mt-3 space-y-2">
            {state.items.map((it) => (
              <li key={it.id} className="flex items-start gap-2 text-sm text-lc-ink/80">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-lc-yellowDeep" />
                <span>{it.label}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default function WPTest() {
  const [pages, setPages] = useState({ loading: true, error: null, items: [], total: null });
  const [posts, setPosts] = useState({ loading: true, error: null, items: [], total: null });
  const [media, setMedia] = useState({ loading: true, error: null, items: [], total: null });
  const [bySlug, setBySlug] = useState({ loading: true, error: null, items: [], total: null });
  const [imgs, setImgs] = useState({ loading: true, error: null, items: [] });

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    (async () => {
      // /pages
      try {
        const { data, total } = await getPages({ perPage: 20, fields: "id,slug,title", signal });
        setPages({
          loading: false, error: null, total,
          items: data.map((p) => ({ id: p.id, label: `${stripHtml(p.title?.rendered)}  ·  id ${p.id}  ·  /${p.slug}` }))
        });
      } catch (e) { setPages({ loading: false, error: e.message, items: [], total: null }); }

      // /posts
      try {
        const { data, total } = await getPosts({ perPage: 20, fields: "id,slug,title", embed: false, signal });
        setPosts({
          loading: false, error: null, total,
          items: data.map((p) => ({ id: p.id, label: `${stripHtml(p.title?.rendered)}  ·  id ${p.id}  ·  /${p.slug}` }))
        });
      } catch (e) { setPosts({ loading: false, error: e.message, items: [], total: null }); }

      // /media (WordPress.com free sites require auth here, so treat 401 as a known restriction)
      try {
        const { data, total } = await getMedia({ perPage: 5, fields: "id,slug,mime_type", signal });
        setMedia({
          loading: false, error: null, total,
          items: (Array.isArray(data) ? data : []).map((m) => ({ id: m.id, label: `${m.slug} (${m.mime_type})` }))
        });
      } catch (e) {
        const is401 = /401|unauthorized/i.test(e.message);
        setMedia({
          loading: false,
          error: is401 ? null : e.message,
          restricted: is401
            ? "The media library endpoint requires authentication on this WordPress.com site, so it is not available via public read-only access. Imported images are still served publicly inside post and page content (see below)."
            : null,
          items: [], total: null
        });
      }

      // single page by real slug
      try {
        let page = await getPageBySlug("about", { signal });
        let used = "about";
        if (!page) { page = await getPageBySlug("lukhanyo", { signal }); used = "lukhanyo"; }
        if (!page) {
          setBySlug({ loading: false, error: "No matching page slug found.", items: [], total: null });
        } else {
          setBySlug({
            loading: false, error: null, total: null,
            items: [
              { id: "used", label: `Fetched by slug: "${used}"` },
              { id: page.id, label: `id ${page.id} · "${stripHtml(page.title?.rendered)}"` },
              { id: "excerpt", label: (stripHtml(page.excerpt?.rendered) || stripHtml(page.content?.rendered)).slice(0, 180) + "…" }
            ]
          });
        }
      } catch (e) { setBySlug({ loading: false, error: e.message, items: [], total: null }); }

      // imported images, pulled from public post/page content
      try {
        const { data } = await getPosts({ perPage: 20, fields: "id,title,content", embed: false, signal });
        const found = [];
        (data || []).forEach((p) => {
          imagesFromHtml(p.content?.rendered || "").forEach((src) => {
            if (!found.some((f) => f.src === src)) {
              found.push({ src, title: stripHtml(p.title?.rendered) });
            }
          });
        });
        setImgs({ loading: false, error: null, items: found });
      } catch (e) { setImgs({ loading: false, error: e.message, items: [] }); }
    })();

    return () => controller.abort();
  }, []);

  return (
    <>
      <PageHero
        eyebrow="Developer · API Test"
        title="WordPress.com REST API connection"
        subtitle="Live read-only requests from the React frontend to the imported Life Choices copy hosted on WordPress.com. This page is for integration testing and is not linked in the main navigation."
      />
      <Section tone="paper">
        <Reveal>
          <p className="text-sm text-lc-muted">
            Base URL: <code className="rounded bg-lc-paper2 px-2 py-1 text-lc-ink">{WP_API_BASE}</code>
          </p>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Reveal><StatusCard title="/pages" state={pages} /></Reveal>
          <Reveal delay={80}><StatusCard title="/posts" state={posts} /></Reveal>
          <Reveal delay={160}><StatusCard title="/media" state={media} /></Reveal>
          <Reveal delay={240}><StatusCard title="/pages?slug=…" state={bySlug} /></Reveal>
        </div>
      </Section>

      <Section tone="paper2">
        <Reveal>
          <h2 className="display text-2xl text-lc-ink">Imported images (from public content)</h2>
          <p className="mt-2 text-sm text-lc-muted">
            Images embedded in imported posts load directly from the WordPress.com media CDN.
          </p>
        </Reveal>
        {imgs.loading && <p className="mt-6 text-sm text-lc-muted">Loading images…</p>}
        {!imgs.loading && imgs.items.length === 0 && (
          <p className="mt-6 text-sm text-lc-muted">No inline images found in the imported content yet.</p>
        )}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {imgs.items.map((im, i) => (
            <Reveal key={im.src} delay={i * 60}>
              <figure className="card-3d overflow-hidden">
                <img
                  src={im.src}
                  alt={im.title}
                  loading="lazy"
                  className="h-44 w-full object-cover"
                />
                <figcaption className="px-3 py-2 text-xs text-lc-muted truncate">{im.title}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
