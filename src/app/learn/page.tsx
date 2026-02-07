import DownloadCTA from '@/components/DownloadCTA';

export default function LearnPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-b from-[#FFF9F9] to-white py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-4 text-4xl font-bold text-[#52080D] md:text-5xl">
            Learn
          </h1>
          <p className="text-lg text-gray-600">
            Financial education to help you invest with confidence
          </p>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg border border-gray-200 bg-gradient-to-br from-[#FFF9F9] to-white p-8 md:p-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-[#961414]">
              Coming Soon
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              We're building a library of guides, articles, and videos to help you on your investment journey. In the meantime, check out our content on social media.
            </p>
          </div>
        </div>
      </section>

      {/* Social Channels Section */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h3 className="mb-8 text-2xl font-bold text-[#52080D] text-center">
            Learn From Our Community
          </h3>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* YouTube Card */}
            <a
              href="https://youtube.com/@investwithplus"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg hover:border-[#961414]"
            >
              <div className="mb-4 inline-block rounded-lg bg-[#FFF9F9] p-3 group-hover:bg-[#961414] transition-colors">
                <svg width={28} height={28} fill="currentColor" viewBox="0 0 24 24" className="text-[#961414] group-hover:text-white transition-colors">
                  <path d="M19.615 3.175c-3.674-.492-11.556-.492-15.23 0C1.912 3.667.5 5.068.5 7.57v8.86c0 2.502 1.412 3.903 5.385 4.395 3.674.492 11.556.492 15.23 0 3.973-.492 5.385-1.893 5.385-4.395v-8.86c0-2.502-1.412-3.903-5.385-4.395zM8 15.5v-7l6 3.5-6 3.5z" />
                </svg>
              </div>
              <h4 className="mb-2 text-xl font-bold text-gray-900">YouTube</h4>
              <p className="mb-4 text-base text-gray-600">
                <span className="font-semibold text-[#961414]">Money Talks</span> — Watch our video series on investing basics, market updates, and tips.
              </p>
              <span className="inline-block text-[#961414] font-semibold group-hover:underline">
                Visit Channel →
              </span>
            </a>

            {/* Instagram Card */}
            <a
              href="https://instagram.com/investwithplus"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg hover:border-[#961414]"
            >
              <div className="mb-4 inline-block rounded-lg bg-[#FFF9F9] p-3 group-hover:bg-[#961414] transition-colors">
                <svg width={28} height={28} fill="currentColor" viewBox="0 0 24 24" className="text-[#961414] group-hover:text-white transition-colors">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.646.069 4.85 0 3.204-.012 3.584-.069 4.85-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 110-2.881 1.44 1.44 0 010 2.881z" />
                </svg>
              </div>
              <h4 className="mb-2 text-xl font-bold text-gray-900">
                @investwithplus
              </h4>
              <p className="mb-4 text-base text-gray-600">
                Follow us for daily tips, product updates, and investment insights.
              </p>
              <span className="inline-block text-[#961414] font-semibold group-hover:underline">
                Follow →
              </span>
            </a>

            {/* TikTok Card */}
            <a
              href="https://tiktok.com/@investwithplus"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg hover:border-[#961414]"
            >
              <div className="mb-4 inline-block rounded-lg bg-[#FFF9F9] p-3 group-hover:bg-[#961414] transition-colors">
                <svg width={28} height={28} fill="none" stroke="currentColor" viewBox="0 0 24 24" className="text-[#961414] group-hover:text-white transition-colors">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h4 className="mb-2 text-xl font-bold text-gray-900">
                @investwithplus
              </h4>
              <p className="mb-4 text-base text-gray-600">
                Quick financial tips and investment education in bite-sized videos.
              </p>
              <span className="inline-block text-[#961414] font-semibold group-hover:underline">
                Follow →
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-16 md:py-20">
        <DownloadCTA />
      </section>
    </div>
  );
}
