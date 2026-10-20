
import React, { useEffect, useState } from "react";
import { User } from "lucide-react";
import PageHero from "../components/common/PageHero";
import Section from "../components/common/Section";
import Reveal from "../components/common/Reveal";
import Button from "../components/common/Button";
import Placeholder from "../components/common/Placeholder";
import { team } from "../mock";
import { getPosts, stripHtml } from "../services/wordpress";

export default function Team() {
  const [zandile, setZandile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    async function loadZandile() {
      try {
        setLoading(true);
        setError("");

        const { data } = await getPosts({
          perPage: 10,
          search: "Zandile Mqwathi",
        });

        const post = (Array.isArray(data) ? data : []).find((item) =>
          stripHtml(item.title?.rendered || "")
            .toLowerCase()
            .includes("zandile")
        );

        if (!post) {
          if (active) setError("Zandile's post was not found in WordPress.");
          return;
        }

        const content = post.content?.rendered || "";
        const imageMatch = content.match(
          /<img[^>]+src=["']([^"']+)["']/i
        );

        const featuredImage =
          post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "";

        if (active) {
          setZandile({
            name: stripHtml(post.title?.rendered || "Zandile Mqwathi"),
            role: "Life Choices",
            bio: stripHtml(content),
            photo: featuredImage || imageMatch?.[1] || "",
            url: post.link || "",
          });
        }
      } catch (err) {
        if (active) {
          setError(err.message || "Could not load Zandile from WordPress.");
        }
      } finally {
        if (active) setLoading(false);
      }
    }

    loadZandile();

    return () => {
      active = false;
    };
  }, []);

  const existingTeam = team.filter(
    (member) =>
      !member.name?.toLowerCase().includes("zandile")
  );

  return (
    <>
      <PageHero
        eyebrow="Meet the Team"
        title="The people behind Life Choices."
        subtitle="A dedicated team of practitioners, coaches and social workers working across our campus, schools and communities."
      />

      <Section tone="paper">
        {loading && (
          <p className="text-lc-muted" role="status">
            Loading Zandile's profile from WordPress...
          </p>
        )}

        {!loading && error && (
          <p className="text-lc-muted" role="status">
            {error}
          </p>
        )}

        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {zandile && (
            <Reveal>
              <article className="card-3d group overflow-hidden">
                {zandile.photo ? (
                  <img
                    src={zandile.photo}
                    alt={zandile.name}
                    loading="lazy"
                    className="h-64 w-full object-cover object-top"
                  />
                ) : (
                  <Placeholder
                    icon={User}
                    label="Team portrait"
                    className="h-64 w-full"
                    rounded="rounded-none"
                  />
                )}

                <div className="p-5">
                  <h3 className="display text-lg text-lc-ink">
                    {zandile.name}
                  </h3>
                  <p className="text-sm text-lc-yellowDeep font-semibold">
                    {zandile.role}
                  </p>
                  {zandile.bio && (
                    <p className="mt-3 text-sm leading-relaxed text-lc-muted">
                      {zandile.bio}
                    </p>
                  )}
                  {zandile.url && (
                    <a
                      href={zandile.url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-block text-sm underline"
                    >
                      View original WordPress post
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          )}

          {existingTeam.map((member, index) => (
            <Reveal key={member.name || index} delay={index * 80}>
              <article className="card-3d group overflow-hidden">
                {member.photo ? (
                  <img
                    src={member.photo}
                    alt={member.name}
                    loading="lazy"
                    className="h-64 w-full object-cover object-top"
                  />
                ) : (
                  <Placeholder
                    icon={User}
                    label="Team portrait"
                    className="h-64 w-full"
                    rounded="rounded-none"
                  />
                )}

                <div className="p-5">
                  <h3 className="display text-lg text-lc-ink">
                    {member.name}
                  </h3>
                  <p className="text-sm text-lc-yellowDeep font-semibold">
                    {member.role}
                  </p>
                  {member.bio && (
                    <p className="mt-3 text-sm leading-relaxed text-lc-muted">
                      {member.bio}
                    </p>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="paper2">
        <div className="card-3d p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="display text-2xl md:text-3xl leading-[1.15] text-lc-ink">
              Interested in joining our team?
            </h2>
            <p className="mt-4 text-lc-muted">
              We are always looking for people who care deeply about young
              people and their futures.
            </p>
          </div>
          <Button to="/contact" variant="primary" size="lg" arrow>
            Get in touch
          </Button>
        </div>
      </Section>
    </>
  );
}

