"use client";

const AMAZON_TAG =
  process.env.NEXT_PUBLIC_AMAZON_ASSOCIATES_TAG || "PENDING-APPROVAL";

export function AffiliateLink({
  asin,
  merchant = "amazon",
  children,
}: {
  asin: string;
  merchant?: string;
  children: React.ReactNode;
}) {
  const href =
    merchant === "amazon"
      ? `https://www.amazon.com/dp/${asin}/?tag=${AMAZON_TAG}`
      : "#";

  return (
    <a
      href={href}
      rel="sponsored nofollow noopener"
      target="_blank"
      className="text-primary underline underline-offset-4 hover:text-primary/80"
    >
      {children}
    </a>
  );
}
