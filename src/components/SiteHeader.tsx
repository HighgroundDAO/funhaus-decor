import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b border-border bg-card">
      <div className="mx-auto max-w-4xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-heading font-bold tracking-tight">
          FunHaus Decor
        </Link>
        <nav className="flex gap-6 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground">
            Home
          </Link>
          <Link href="/about" className="hover:text-foreground">
            About
          </Link>
          <Link href="/contact" className="hover:text-foreground">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
