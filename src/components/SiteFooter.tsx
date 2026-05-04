import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="bg-navy mt-auto">
      <div className="mx-auto max-w-4xl px-6 py-8">
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-marigold mb-4">
          <Link href="/about" className="hover:text-white transition-colors">
            About
          </Link>
          <Link href="/contact" className="hover:text-white transition-colors">
            Contact
          </Link>
          <Link href="/privacy" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-white transition-colors">
            Terms of Service
          </Link>
          <Link href="/disclosure" className="hover:text-white transition-colors">
            Affiliate Disclosure
          </Link>
        </nav>
        <p className="text-xs text-white/50">
          &copy; {new Date().getFullYear()} FunHaus Decor. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
