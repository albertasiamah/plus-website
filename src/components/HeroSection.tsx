import Image from "next/image";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  showAppButtons?: boolean;
}

export default function HeroSection({
  title,
  subtitle,
  showAppButtons = true,
}: HeroSectionProps) {
  return (
    <section className="bg-light-burgundy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8">
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-burgundy leading-tight">
              {title}
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-xl">
              {subtitle}
            </p>

            {/* App Store Buttons */}
            {showAppButtons && (
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center sm:justify-start bg-burgundy text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-dark-burgundy transition-colors"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3.609 1.814L13.792 12 3.609 22.186c-.372.373-.581.884-.581 1.414 0 1.104.896 2 2 2 .53 0 1.041-.209 1.414-.586l11.31-11.31c.391-.391.609-.922.609-1.48 0-.557-.218-1.089-.609-1.48L6.442.586C6.068.211 5.557 0 5.028 0c-1.104 0-2 .896-2 2 0 .531.209 1.041.581 1.414z" />
                  </svg>
                  <span>Google Play</span>
                </a>

                <a
                  href="https://apps.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center sm:justify-start bg-burgundy text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-dark-burgundy transition-colors"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.3-3.14-2.53C2.36 20.9.5 16.6 2.61 13.64c1.07-1.79 2.71-2.91 4.56-2.94 1.28-.02 2.49.75 3.29.75.81 0 2.26-.96 3.81-.85.64.025 2.48.21 3.82 1.66-.14.09-1.11.67-1.11 2.01 0 1.68 1.3 2.25 1.3 2.25s-.8 2.4-2.13 3.65m-8.86-18.1c.47-.56 1.08-1.12 1.81-1.12.02.13.04.27.04.41 0 .78-.27 1.73-1.01 2.3-.63.48-1.56.72-2.35.68-.04-.13-.08-.27-.08-.41 0-.82.29-1.73 1.01-2.3z" />
                  </svg>
                  <span>App Store</span>
                </a>
              </div>
            )}
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-sm">
              <div className="bg-gradient-to-b from-gray-300 to-gray-400 rounded-3xl aspect-square flex items-center justify-center shadow-lg">
                <div className="text-center">
                  <svg
                    className="w-16 h-16 sm:w-20 sm:h-20 text-gray-600 mx-auto mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-gray-600 font-medium text-sm sm:text-base">
                    App Screenshot
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
