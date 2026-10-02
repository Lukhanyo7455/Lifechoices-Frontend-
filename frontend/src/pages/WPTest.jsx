import React, { useEffect, useState } from "react";
import { Loader2, AlertTriangle, CheckCircle2, FileText, Newspaper, Image as ImageIcon } from "lucide-react";
import PageHero from "../components/common/PageHero";
import Section from "../components/common/Section";
import Reveal from "../components/common/Reveal";
import {
  getPages,
  getPosts,
  getMedia,
  getPageBySlug,
  stripHtml,
  WP_API_BASE
} from "../services/wordpress";

function StatusCard({ title, icon: Icon, state }) {
  return (
    <div className="card-3d p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="icon-tile flex h-11 w-11 items-center justify-center bg-lc-ink text-lc-yellow"><Icon className="h-5 w-5" /></span>
          <h3 className="display text-xl text-lc-ink">{title}</h3>
        </div>
        {state.loading && <Loader2 className="h-5 w-5 animate-spin text-lc-muted" />}
        {!state.loading && state.error && <AlertTriangle className="h-5 w-5 text-lc-crimson" />}
        {!state.loading && !state.error && <CheckCircle2 className="h-5 w-5 text-lc-green" />}
      </div>

      {state.loading && <p className="mt-5 text-sm text-lc-muted">Loading from WordPress…</p>}

      {!state.loading && state.error && (
        <div className="mt-5 rounded-lg border border-lc-crimson/30 bg-lc-crimson/5 p-4 text-sm text-lc-crimson">
          {state.error}
        </div>
      )}

      {!state.loading && !state.error && (
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

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    (async () => {
      // /pages
      try {
        const { data, total } = await getPages({ perPage: 5, fields: "id,slug,title", signal });
        setPages({
          loading: false, error: null, total,
          items: data.map((p) => ({ id: p.id, label: `${stripHtml(p.title?.rendered)}  —  /${p.slug}` }))
        });
      } catch (e) { setPages({ loading: false, error: e.message, items: [], total: null }); }

      // /posts
      try {
        const { data, total } = await getPosts({ perPage: 5, fields: "id,slug,title", signal });
        setPosts({
          loading: false, error: null, total,
          items: data.map((p) => ({ id: p.id, label: stripHtml(p.title?.rendered) }))
        });
      } catch (e) { setPosts({ loading: false, error: e.message, items: [], total: null }); }

      // /media
      try {
        const { data, total } = await getMedia({ perPage: 5, fields: "id,slug,title,mime_type", signal });
        setMedia({
          loading: false, error: null, total,
          items: data.map((m) => ({ id: m.id, label: `${stripHtml(m.title?.rendered) || m.slug}  (${m.mime_type})` }))
        });
      } catch (e) { setMedia({ loading: false, error: e.message, items: [], total: null }); }

      // /pages?slug=... (inspect response, fall back to a real slug if needed)
      try {
        let page = await getPageBySlug("about-us", { signal });
        let used = "about-us";
        if (!page) { page = await getPageBySlug("meet-the-team", { signal }); used = "meet-the-team"; }
        if (!page) {
          setBySlug({ loading: false, error: "No matching page slug found.", items: [], total: null });
        } else {
          setBySlug({
            loading: false, error: null, total: null,
            items: [
              { id: "used", label: `Requested slug: "about-us" → used existing slug: "${used}"` },
              { id: page.id, label: `id ${page.id} · "${stripHtml(page.title?.rendered)}"` },
              { id: "excerpt", label: (stripHtml(page.excerpt?.rendered) || stripHtml(page.content?.rendered)).slice(0, 160) + "…" }
            ]
          });
        }
      } catch (e) { setBySlug({ loading: false, error: e.message, items: [], total: null }); }
    })();

    return () => controller.abort();
  }, []);

  return (
    <>
      <PageHero
        eyebrow="Developer · API Test"
        title="WordPress REST API connection"
        subtitle="Live read-only requests from React to the Life Choices WordPress REST API. This page is for integration testing and is not linked in the main navigation."
      />
      <Section tone="paper">
        <Reveal>
          <p className="text-sm text-lc-muted">
            Base URL: <code className="rounded bg-lc-paper2 px-2 py-1 text-lc-ink">{WP_API_BASE}</code>
          </p>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Reveal><StatusCard title="/pages" icon={FileText} state={pages} /></Reveal>
          <Reveal delay={80}><StatusCard title="/posts" icon={Newspaper} state={posts} /></Reveal>
          <Reveal delay={160}><StatusCard title="/media" icon={ImageIcon} state={media} /></Reveal>
          <Reveal delay={240}><StatusCard title="/pages?slug=…" icon={FileText} state={bySlug} /></Reveal>
        </div>
      </Section>
    </>
  );
}
