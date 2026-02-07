import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-burgundy text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Image
                src="/images/logo-dark.jpg"
                alt="Plus Investment App"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <span className="ml-2 text-lg font-bold">Plus</span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              All your investment needs in one app
            </p>
            {/* Social Links */}
            <div className="flex gap-4 pt-2">
              <a
                href="#instagram"
                className="text-white/60 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.646.069 4.85 0 3.204-.012 3.584-.069 4.85-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 110-2.881 1.44 1.44 0 010 2.881z" />
                </svg>
              </a>
              <a
                href="#youtube"
                className="text-white/60 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.615 3.175c-3.674-.492-11.556-.492-15.23 0C1.912 3.667.5 5.068.5 7.57v8.86c0 2.502 1.412 3.903 5.385 4.395 3.674.492 11.556.492 15.23 0 3.973-.492 5.385-1.893 5.385-4.395v-8.86c0-2.502-1.412-3.903-5.385-4.395zM8 15.5v-7l6 3.5-6 3.5z" />
                </svg>
              </a>
              <a
                href="#tiktok"
                className="text-white/60 hover:text-white transition-colors"
                aria-label="TikTok"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.66 1.94 2.89 2.89 0 015.66-1.94v-3.34a6.04 6.04 0 00-6.01 6.01A6.1 6.1 0 008.4 20.1a6 6 0 0010.63-5.23v-6.21a7.7 7.7 0 004.54 1.48v-3.45a4.3 4.3 0 01-.45 0z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Products */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Products</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/products#mutual-funds"
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  Mutual Funds
                </Link>
              </li>
              <li>
                <Link
                  href="/products#treasury-bills"
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  Treasury Bills
                </Link>
              </li>
              <li>
                <Link
                  href="/products#us-stocks"
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  US Stocks
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/learn"
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  Learn
                </Link>
              </li>
              <li>
                <a
                  href="mailto:contact@plusapp.online"
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/privacy"
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <a
                  href="#sec-regulated"
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  SEC Regulated
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-white/70">
            <p>
              © {currentYear} 10th Capital Investments Limited. All rights reserved.
            </p>
            <p className="md:text-right">
              Y21B Agostinho Neto Road, Airport Residential, Accra, Ghana
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
