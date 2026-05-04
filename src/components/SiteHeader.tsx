import Link from "next/link";

export function SiteHeader() {
  return (
    <header>
      <div className="h-1 bg-cherry-red" />
      <div className="border-b border-border bg-card">
        <div className="mx-auto max-w-4xl px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-heading tracking-tight">
            FunHaus Decor
          </Link>
          <nav className="flex gap-6 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-cherry-red transition-colors">
              Home
            </Link>
            <Link href="/about" className="hover:text-cherry-red transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-cherry-red transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
