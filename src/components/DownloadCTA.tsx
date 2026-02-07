export default function DownloadCTA() {
  return (
    <section className="bg-burgundy py-12 sm:py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
          Start Investing Today
        </h2>

        {/* Subtext */}
        <p className="text-base sm:text-lg text-white/90 mb-8 sm:mb-12 max-w-2xl mx-auto">
          Download Plus and join 100,000+ Ghanaians building wealth.
        </p>

        {/* App Store Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white text-burgundy px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-light-burgundy transition-colors w-full sm:w-auto"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M3.609 1.814L13.792 12 3.609 22.186c-.372.373-.581.884-.581 1.414 0 1.104.896 2 2 2 .53 0 1.041-.209 1.414-.586l11.31-11.31c.391-.391.609-.922.609-1.48 0-.557-.218-1.089-.609-1.48L6.442.586C6.068.211 5.557 0 5.028 0c-1.104 0-2 .896-2 2 0 .531.209 1.041.581 1.414z" />
            </svg>
            <span className="text-sm sm:text-base">Google Play</span>
          </a>

          <a
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white text-burgundy px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-light-burgundy transition-colors w-full sm:w-auto"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.3-3.14-2.53C2.36 20.9.5 16.6 2.61 13.64c1.07-1.79 2.71-2.91 4.56-2.94 1.28-.02 2.49.75 3.29.75.81 0 2.26-.96 3.81-.85.64.025 2.48.21 3.82 1.66-.14.09-1.11.67-1.11 2.01 0 1.68 1.3 2.25 1.3 2.25s-.8 2.4-2.13 3.65m-8.86-18.1c.47-.56 1.08-1.12 1.81-1.12.02.13.04.27.04.41 0 .78-.27 1.73-1.01 2.3-.63.48-1.56.72-2.35.68-.04-.13-.08-.27-.08-.41 0-.82.29-1.73 1.01-2.3z" />
            </svg>
            <span className="text-sm sm:text-base">App Store</span>
          </a>
        </div>
      </div>
    </section>
  );
}
