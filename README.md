# Plus Investment App — Website

The official marketing website for **Plus**, Ghana's all-in-one investment app by [10th Capital Investments Limited](https://10thcapital.investments). Built with Next.js 14, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 3.4
- **Font:** Montserrat (Google Fonts)
- **Animations:** CSS keyframes + Intersection Observer (zero dependencies)

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage — hero, products, video, trust stats, why Plus |
| `/products` | Mutual Funds, Treasury Bills, US Stocks |
| `/about` | Company story, trust pillars, team stats |
| `/faq` | Accordion FAQ |
| `/learn` | Educational resources and social links |

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

The dev server runs at [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/
│   ├── page.tsx          # Homepage
│   ├── about/page.tsx
│   ├── faq/page.tsx
│   ├── learn/page.tsx
│   ├── products/page.tsx
│   ├── globals.css       # Global styles + animation keyframes
│   └── layout.tsx        # Root layout (Navbar + Footer)
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── DownloadCTA.tsx
│   ├── AnimateOnScroll.tsx
│   ├── AnimatedCounter.tsx
│   └── VideoEmbed.tsx
public/
└── images/
    ├── logo-light.jpg    # Burgundy logo on white
    └── logo-dark.jpg     # White logo on burgundy
```

## Deployment

This project uses a **branch-based deployment strategy**:

| Branch | Environment | Platform | URL |
|--------|-------------|----------|-----|
| `main` | Production | AWS Amplify | TBD |
| `develop` | Staging | Vercel | TBD |

### Workflow

1. Work on feature branches or directly on `develop`
2. Push to `develop` → auto-deploys to **Vercel** (staging)
3. Review and test on staging
4. Merge `develop` into `main` → auto-deploys to **AWS Amplify** (production)

### AWS Amplify

Build settings are defined in `amplify.yml` at the project root. Environment variable `NEXT_PUBLIC_ENV=production` should be set in the Amplify console.

### Vercel

Set the production branch to `develop` in Vercel project settings. Environment variable `NEXT_PUBLIC_ENV=staging` should be set in Vercel.

## Brand

| Token | Value |
|-------|-------|
| Burgundy | `#961414` |
| Dark Burgundy | `#52080D` |
| Light Background | `#FFF9F9` |
| Font | Montserrat 300–800 |

## License

Proprietary — 10th Capital Investments Limited. All rights reserved.
