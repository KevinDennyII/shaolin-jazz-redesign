# Shaolin Jazz Website Redesign

A modern, mobile-friendly redesign of the Shaolin Jazz website built with Next.js 15, TypeScript, and Tailwind CSS.

## 🎯 Project Overview

This project is a complete modernization of the [shaolinjazz.com](https://www.shaolinjazz.com/) website, featuring:

- **Modern Stack**: Next.js 15 with App Router, TypeScript, and Tailwind CSS
- **Mobile-First Design**: Fully responsive layout optimized for all devices
- **Performance Optimized**: Image optimization, static generation, and fast page loads
- **SEO Ready**: Meta tags, semantic HTML, and proper heading structure
- **All Original Content**: Every page from the original Wix site has been recreated

## 📄 Pages Included

1. **Homepage** (`/`) - Featured events and brand overview
2. **The Project** (`/the-project`) - Brand philosophy and cultural intersections
3. **Sound Patterns** (`/sound-patterns`) - Multimedia art exhibition with contributing artists
4. **SHAOLIN JAZZ L!VE** (`/live`) - Live performance series information
5. **CAN I KICK IT?** (`/can-i-kick-it`) - Martial arts film screenings with live scoring
6. **Events** (`/events`) - Upcoming events calendar and past event gallery
7. **Shop** (`/shop`) - Merchandise store with product listings

## 🎨 Design Features

- **Clean, Modern Layout**: Simplified navigation and content hierarchy
- **Mobile-Optimized**: Touch-friendly buttons, responsive images, collapsible menus
- **Dark Theme**: Black, white, and red color scheme matching the brand
- **Smooth Transitions**: Hover effects and animations for better UX
- **Accessible**: Semantic HTML, ARIA labels, and keyboard navigation support

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd shaolin-jazz-redesign
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📦 Build & Deploy

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Deploy

This Next.js application can be deployed to:

- **Vercel** (Recommended) - Zero-config deployment
- **Netlify** - Static site hosting with SSR support
- **AWS Amplify** - Full-stack deployment
- **Self-hosted** - Docker, PM2, or any Node.js hosting

#### Vercel Deployment

```bash
npm install -g vercel
vercel
```

## 🗂️ Project Structure

```
shaolin-jazz-redesign/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout with navigation
│   ├── page.tsx             # Homepage
│   ├── globals.css          # Global styles
│   ├── the-project/         # The Project page
│   ├── sound-patterns/      # Sound Patterns page
│   ├── live/                # Shaolin Jazz Live page
│   ├── can-i-kick-it/       # Can I Kick It page
│   ├── events/              # Events page
│   └── shop/                # Shop page
├── components/              # React components
│   ├── Navigation.tsx       # Navigation bar
│   └── Footer.tsx           # Footer component
├── public/                  # Static assets
│   └── images/             # Image assets
├── scraped-data/           # Original website data
│   ├── ALL_IMAGE_URLS.txt
│   └── COMPLETE_SHAOLIN_JAZZ_REPORT.md
├── next.config.ts          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

## 📸 Images & Assets

All images are currently loaded from the original Wix CDN URLs for optimal performance. The project is configured to allow remote images from `static.wixstatic.com`.

To use local images instead:
1. Download images using the URLs in `scraped-data/ALL_IMAGE_URLS.txt`
2. Save them to `public/images/`
3. Update image paths in the components

## 🎨 Customization

### Colors

Edit the color scheme in `tailwind.config.ts` and `app/globals.css`:

- Primary: Red (#DC2626 - red-600)
- Background: Black (#000000)
- Text: White (#FFFFFF) and Gray variations

### Typography

The site uses system fonts (Arial, Helvetica, sans-serif). To add custom fonts:

1. Import fonts in `app/layout.tsx`
2. Update `app/globals.css` body styles

### Components

All components are modular and can be easily customized:

- `components/Navigation.tsx` - Update links and branding
- `components/Footer.tsx` - Modify social links and sections
- Page components - Edit content and layout as needed

## 📱 Mobile Responsiveness

The site uses Tailwind's responsive utilities:

- `sm:` - Small devices (640px+)
- `md:` - Medium devices (768px+)
- `lg:` - Large devices (1024px+)
- `xl:` - Extra large devices (1280px+)

## 🔍 SEO

Each page includes:
- Custom meta titles and descriptions
- Open Graph tags for social sharing
- Semantic HTML structure
- Proper heading hierarchy

## 📊 Original Website Analysis

Complete scraping data available in `scraped-data/`:

- **7 main pages** fully recreated
- **123 unique images** cataloged
- All content, events, and artist information preserved
- Social media links and contact information included

## 🛠️ Technologies Used

- **Framework**: Next.js 15.5.14
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3.4.17
- **Image Optimization**: Next.js Image component
- **Deployment**: Vercel-ready (or any Node.js host)

## 📝 License

This is a redesign project for Shaolin Jazz. All content, images, and branding belong to Shaolin Jazz.

## 🤝 Contributing

To contribute:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📧 Contact

For questions about this project, contact the Shaolin Jazz team at info@shaolinjazz.com

## 🌐 Original Website

Original Wix site: [https://www.shaolinjazz.com/](https://www.shaolinjazz.com/)

---

**Built with ❤️ for the culture - Hip-Hop, Jazz, and Martial Arts**
