type SchemaProps =
  | {
      type: "Article";
      headline: string;
      description?: string;
      datePublished?: string;
    }
  | {
      type: "ItemList";
      items: string[];
    }
  | {
      type: "FAQPage";
      questions: { question: string; answer: string }[];
    }
  | {
      type: "Product";
      name: string;
      description?: string;
      brand?: string;
    };

export function Schema(props: SchemaProps) {
  let data: Record<string, unknown>;

  switch (props.type) {
    case "Article":
      data = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: props.headline,
        description: props.description,
        datePublished: props.datePublished,
      };
      break;
    case "ItemList":
      data = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        itemListElement: (props.items || []).map((name, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name,
        })),
      };
      break;
    case "FAQPage":
      data = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: (props.questions || []).map((q) => ({
          "@type": "Question",
          name: q.question,
          acceptedAnswer: { "@type": "Answer", text: q.answer },
        })),
      };
      break;
    case "Product":
      data = {
        "@context": "https://schema.org",
        "@type": "Product",
        name: props.name,
        description: props.description,
        brand: props.brand
          ? { "@type": "Brand", name: props.brand }
          : undefined,
      };
      break;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
