import Link from "next/link";
import { getContentSlugs, getContentBySlug } from "@/lib/mdx";

export default function HomePage() {
  const slugs = getContentSlugs();
  const pages = slugs
    .map((slug) => {
      const entry = getContentBySlug(slug);
      if (!entry) return null;
      return {
        slug: slug.join("/"),
        title: entry.frontmatter.title || slug[slug.length - 1],
        description: entry.frontmatter.description || "",
      };
    })
    .filter(Boolean);

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-heading font-bold tracking-tight mb-4">
        FunHaus Decor
      </h1>
      <p className="text-lg text-muted-foreground mb-12 max-w-xl">
        Maximalist home decor, striped ceilings, and bold color for the
        homeowner who refuses to be beige.
      </p>

      <section>
        <h2 className="text-2xl font-heading font-semibold mb-6">Latest</h2>
        {pages.length === 0 && (
          <p className="text-muted-foreground">No articles published yet.</p>
        )}
        <div className="space-y-6">
          {pages.map((page) => (
            <Link
              key={page!.slug}
              href={`/${page!.slug}`}
              className="block rounded-lg border border-border p-6 hover:bg-accent transition-colors"
            >
              <h3 className="text-lg font-semibold mb-1">{page!.title}</h3>
              {page!.description && (
                <p className="text-sm text-muted-foreground">
                  {page!.description}
                </p>
              )}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
