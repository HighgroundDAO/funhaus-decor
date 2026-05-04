import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24 text-center">
      <h1 className="text-4xl font-heading font-bold mb-4">404</h1>
      <p className="text-muted-foreground mb-8">This page doesn't exist yet.</p>
      <Link
        href="/"
        className="text-primary underline underline-offset-4 hover:text-primary/80"
      >
        Back to home
      </Link>
    </div>
  );
}
