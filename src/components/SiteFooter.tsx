import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card mt-auto">
      <div className="mx-auto max-w-4xl px-6 py-8">
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground mb-4">
          <Link href="/about" className="hover:text-foreground">
            About
          </Link>
          <Link href="/contact" className="hover:text-foreground">
            Contact
          </Link>
          <Link href="/privacy" className="hover:text-foreground">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-foreground">
            Terms of Service
          </Link>
          <Link href="/disclosure" className="hover:text-foreground">
            Affiliate Disclosure
          </Link>
        </nav>
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} FunHaus Decor. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
