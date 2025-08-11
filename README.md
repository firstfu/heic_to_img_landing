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

## 🚀 Deployment

### Deploy on Vercel (Recommended)

The easiest way to deploy this Next.js app is using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme):

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import your repository on [Vercel](https://vercel.com/new)
3. Vercel will detect Next.js and configure the build settings automatically
4. Deploy with a single click!

### Alternative Deployment Options

- **Netlify**: Connect your Git repository for automatic deployments
- **AWS Amplify**: Deploy with AWS infrastructure
- **Railway**: Simple deployment with built-in database options
- **Self-hosted**: Use `npm run build` and serve the `out/` directory

For detailed deployment instructions, see the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## 🤝 Contributing

We welcome contributions to improve the HeicPro landing page! Here's how you can help:

### Development Guidelines

1. **Code Style**: Follow the existing TypeScript and React patterns
2. **Components**: Keep components focused and reusable
3. **Styling**: Use Tailwind CSS utilities consistently
4. **Performance**: Optimize for web vitals and loading speed

### Making Changes

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes following the code style
4. Run linting: `npm run lint`
5. Test your changes thoroughly
6. Commit with descriptive messages
7. Push to your branch: `git push origin feature-name`
8. Open a Pull Request

### Code Standards

- Use TypeScript for all new code
- Follow React best practices and hooks patterns  
- Maintain responsive design principles
- Keep accessibility in mind (semantic HTML, ARIA labels)
- Optimize images and assets for web performance

## 📚 Learn More

### Next.js Resources

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial
- [Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

### Design & Development

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Documentation](https://react.dev/)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

For questions, suggestions, or support:

- **Project Issues**: [GitHub Issues](../../issues)
- **Email**: support@heicpro.com
- **Website**: [heicpro.com](https://heicpro.com)

---

**Built with ❤️ using Next.js 15, React 19, and Tailwind CSS v4**
