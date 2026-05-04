import type { MDXComponents } from "mdx/types";
import { PageHero } from "./Hero";
import { Schema } from "./Schema";
import { AffiliateLink } from "./AffiliateLink";
import { AffiliateDisclosure } from "./AffiliateDisclosure";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    PageHero,
    Schema,
    AffiliateLink,
    AffiliateDisclosure,
    h1: (props) => (
      <h1 className="text-4xl font-heading font-bold tracking-tight mt-10 mb-4" {...props} />
    ),
    h2: (props) => (
      <h2 className="text-2xl font-heading font-semibold tracking-tight mt-10 mb-3" {...props} />
    ),
    h3: (props) => (
      <h3 className="text-xl font-heading font-semibold mt-8 mb-2" {...props} />
    ),
    p: (props) => <p className="mb-4 leading-7" {...props} />,
    ul: (props) => <ul className="mb-4 ml-6 list-disc space-y-1" {...props} />,
    ol: (props) => <ol className="mb-4 ml-6 list-decimal space-y-1" {...props} />,
    li: (props) => <li className="leading-7" {...props} />,
    a: (props) => (
      <a className="text-primary underline underline-offset-4 hover:text-primary/80" {...props} />
    ),
    strong: (props) => <strong className="font-semibold" {...props} />,
    blockquote: (props) => (
      <blockquote className="border-l-4 border-primary pl-4 italic my-4 text-muted-foreground" {...props} />
    ),
    ...components,
  };
}
