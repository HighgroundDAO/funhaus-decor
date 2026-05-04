import { notFound } from "next/navigation";
import { getContentSlugs, getContentBySlug } from "@/lib/mdx";
import { compileMDX } from "next-mdx-remote/rsc";
import { useMDXComponents } from "@/components/mdx-components";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string[] }> };

export async function generateStaticParams() {
  return getContentSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const entry = getContentBySlug(slug);
  if (!entry) return {};
  return {
    title: entry.frontmatter.title
      ? `${entry.frontmatter.title} | FunHaus Decor`
      : "FunHaus Decor",
    description: entry.frontmatter.description,
    openGraph: {
      type: "article",
      siteName: "FunHaus Decor",
      title: entry.frontmatter.title,
      description: entry.frontmatter.description,
      images: entry.frontmatter.og_image
        ? [entry.frontmatter.og_image]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: entry.frontmatter.title,
      description: entry.frontmatter.description,
    },
  };
}

export default async function ContentPage({ params }: Props) {
  const { slug } = await params;
  const entry = getContentBySlug(slug);
  if (!entry) notFound();

  const components = useMDXComponents({});
  const { content } = await compileMDX({
    source: entry.content,
    components,
    options: {
      parseFrontmatter: false,
    },
  });

  return (
    <article className="mx-auto max-w-3xl px-6 py-12">
      {content}
    </article>
  );
}
