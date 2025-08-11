# HeicPro - HEIC to Image Converter Landing Page

A modern, high-converting landing page for HeicPro, a HEIC to PNG/JPG conversion tool designed specifically for iPhone users. This project showcases advanced web design techniques with real-time counters, animated elements, and conversion-focused content.

## 🚀 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4 with PostCSS
- **UI Framework**: React 19
- **Build Tool**: Turbopack (for development)
- **Linting**: ESLint with Next.js rules

## ✨ Features

- 📱 **Responsive Design**: Mobile-first approach with smooth animations
- ⚡ **Real-time Counters**: Dynamic user and photo conversion counters
- ⏰ **Countdown Timer**: Interactive countdown for promotional content
- 🎨 **Modern UI/UX**: Gradient backgrounds, glass morphism effects, and micro-animations
- 🔄 **Interactive Elements**: Expandable FAQ section and hover effects
- 📊 **Social Proof**: Customer testimonials and comparison tables
- 🌟 **Performance**: Optimized with Next.js 15 and Turbopack
- 🎯 **Conversion-focused**: Landing page optimized for user conversion

## 🛠️ Installation & Setup

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd heic_to_img_landing
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open in browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to view the landing page.

The page auto-updates as you edit files. Start by modifying `app/page.tsx` to see changes in real-time.

## 📜 Development Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with Turbopack (fast refresh) |
| `npm run build` | Build production version |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint to check code quality |

## 📁 Project Structure

```
heic_to_img_landing/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Main landing page component
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── public/                # Static assets
│   ├── next.svg          # Next.js logo
│   └── vercel.svg        # Vercel logo
├── tailwind.config.ts     # Tailwind CSS configuration
├── postcss.config.mjs     # PostCSS configuration
├── tsconfig.json         # TypeScript configuration
├── eslint.config.mjs     # ESLint configuration
├── package.json          # Dependencies and scripts
├── CLAUDE.md            # Claude Code instructions
└── README.md            # Project documentation
```

## 🎨 Key Components & Features

### Interactive Elements
- **Real-time Counters**: Simulated user and photo conversion statistics that update dynamically
- **Countdown Timer**: Promotional countdown timer with hours, minutes, and seconds
- **Animated Savings Calculator**: Progressive number animation for cost savings display
- **Expandable FAQ**: Interactive FAQ section with smooth expand/collapse animations

### Design System
- **Responsive Design**: Mobile-first approach with breakpoints for all device sizes
- **Modern Animations**: CSS animations with staggered delays and smooth transitions
- **Color Palette**: Blue to purple gradients with accent colors for CTAs
- **Typography**: System fonts optimized for readability and conversion

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
