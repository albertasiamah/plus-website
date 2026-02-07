import HeroSection from "@/components/HeroSection";
import DownloadCTA from "@/components/DownloadCTA";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <HeroSection
        title="All Your Investment Needs in One App"
        subtitle="Invest in Mutual Funds, Treasury Bills, and US Stocks — all from your phone. SEC-regulated and trusted by 100,000+ Ghanaians."
        showAppButtons={true}
      />

      {/* Products Overview Section */}
      <section className="py-16 sm:py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {/* Mutual Funds Card */}
            <div className="group">
              <div className="bg-burgundy-light rounded-2xl p-8 sm:p-10 h-full transition-transform duration-300 hover:shadow-lg flex flex-col">
                {/* Icon Placeholder */}
                <div className="mb-6 sm:mb-8">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-burgundy rounded-full flex items-center justify-center">
                    <svg
                      className="w-7 h-7 sm:w-8 sm:h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-2xl sm:text-3xl font-bold text-burgundy mb-3 sm:mb-4">
                    Mutual Funds
                  </h3>
                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                    Grow your money with trusted funds from Stanbic, IC, and Databank. Start with as little as GHS 10.
                  </p>
                </div>

                {/* Learn More Link */}
                <div className="mt-6 sm:mt-8 pt-6 border-t border-gray-200">
                  <Link
                    href="/products"
                    className="inline-flex items-center text-burgundy font-semibold hover:text-burgundy-dark transition-colors"
                  >
                    Learn more
                    <span className="ml-2 text-lg">→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Treasury Bills Card */}
            <div className="group">
              <div className="bg-burgundy-light rounded-2xl p-8 sm:p-10 h-full transition-transform duration-300 hover:shadow-lg flex flex-col">
                {/* Icon Placeholder */}
                <div className="mb-6 sm:mb-8">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-burgundy rounded-full flex items-center justify-center">
                    <svg
                      className="w-7 h-7 sm:w-8 sm:h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-2xl sm:text-3xl font-bold text-burgundy mb-3 sm:mb-4">
                    Treasury Bills
                  </h3>
                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                    Government-backed securities. Safe, reliable returns with flexible terms.
                  </p>
                </div>

                {/* Learn More Link */}
                <div className="mt-6 sm:mt-8 pt-6 border-t border-gray-200">
                  <Link
                    href="/products"
                    className="inline-flex items-center text-burgundy font-semibold hover:text-burgundy-dark transition-colors"
                  >
                    Learn more
                    <span className="ml-2 text-lg">→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* US Stocks Card */}
            <div className="group">
              <div className="bg-burgundy-light rounded-2xl p-8 sm:p-10 h-full transition-transform duration-300 hover:shadow-lg flex flex-col">
                {/* Icon Placeholder */}
                <div className="mb-6 sm:mb-8">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-burgundy rounded-full flex items-center justify-center">
                    <svg
                      className="w-7 h-7 sm:w-8 sm:h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7h8m0 0v8m0-8L5.257 19.393A2 2 0 005 18.21V5a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2h-2.5a2 2 0 00-1 .268l-5.087 3.158A1 1 0 014 20V4a1 1 0 011-1h1"
                      />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-2xl sm:text-3xl font-bold text-burgundy mb-3 sm:mb-4">
                    US Stocks
                  </h3>
                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                    Own shares in the world's biggest companies — Apple, Google, Tesla, and 4,000+ more. Powered by Bamboo.
                  </p>
                </div>

                {/* Learn More Link */}
                <div className="mt-6 sm:mt-8 pt-6 border-t border-gray-200">
                  <Link
                    href="/products"
                    className="inline-flex items-center text-burgundy font-semibold hover:text-burgundy-dark transition-colors"
                  >
                    Learn more
                    <span className="ml-2 text-lg">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Plus Section */}
      <section className="py-16 sm:py-20 lg:py-28 bg-burgundy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Headline */}
          <div className="mb-12 sm:mb-16 lg:mb-20 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-burgundy leading-tight">
              Why 100,000+ Ghanaians Choose Plus
            </h2>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* SEC Regulated */}
            <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-burgundy">
                    <svg
                      className="h-6 w-6 sm:h-7 sm:w-7 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl sm:text-2xl font-bold text-burgundy mb-2 sm:mb-3">
                    SEC Regulated
                  </h3>
                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                    Licensed and regulated by the Ghana Securities & Exchange Commission.
                  </p>
                </div>
              </div>
            </div>

            {/* Easy Mobile Money Top-Up */}
            <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-burgundy">
                    <svg
                      className="h-6 w-6 sm:h-7 sm:w-7 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl sm:text-2xl font-bold text-burgundy mb-2 sm:mb-3">
                    Easy Mobile Money Top-Up
                  </h3>
                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                    Fund your account instantly via Mobile Money. No bank visits needed.
                  </p>
                </div>
              </div>
            </div>

            {/* One App, Many Products */}
            <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-burgundy">
                    <svg
                      className="h-6 w-6 sm:h-7 sm:w-7 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl sm:text-2xl font-bold text-burgundy mb-2 sm:mb-3">
                    One App, Many Products
                  </h3>
                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                    Mutual funds, T-Bills, and US stocks — all in one place.
                  </p>
                </div>
              </div>
            </div>

            {/* Start Small */}
            <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-burgundy">
                    <svg
                      className="h-6 w-6 sm:h-7 sm:w-7 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl sm:text-2xl font-bold text-burgundy mb-2 sm:mb-3">
                    Start Small
                  </h3>
                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                    Begin investing with as little as GHS 10. No minimums on most products.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar Section */}
      <section className="py-12 sm:py-14 lg:py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 font-medium">
              <span className="block sm:inline">150,000+ Downloads</span>
              <span className="mx-2 hidden sm:inline text-gray-300">•</span>
              <span className="block sm:inline mt-2 sm:mt-0">100,000+ Registered Users</span>
              <span className="mx-2 hidden sm:inline text-gray-300">•</span>
              <span className="block sm:inline mt-2 sm:mt-0">SEC Regulated</span>
            </p>
          </div>
        </div>
      </section>

      {/* Download CTA Section */}
      <DownloadCTA />
    </main>
  );
}
