# Software Engineer Intern Portfolio

A modern, responsive portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion. Features smooth animations, dark mode support, and a clean, accessible design.

## ✨ Features

- **Responsive Design**: Mobile-first approach that looks great on all devices (360px to 1920px+)
- **Dark Mode**: System-preferred default with manual toggle
- **Smooth Animations**: Powered by Framer Motion with `prefers-reduced-motion` support
- **Accessible**: WCAG compliant with semantic HTML, ARIA labels, and keyboard navigation
- **SEO Optimized**: Meta tags, structured data, and semantic markup
- **Performance**: Optimized for Lighthouse scores ≥ 95
- **Data-Driven**: Edit content via JSON files without touching JSX

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type checking
npm run typecheck

# Lint code
npm run lint

# Format code
npm run format
```

The development server will start at `http://localhost:8080`

## 📁 Project Structure

```
src/
├── components/        # React components
│   ├── ui/           # Reusable UI components (shadcn)
│   ├── Navbar.tsx    # Navigation bar
│   ├── Hero.tsx      # Hero section
│   ├── About.tsx     # About section
│   ├── Skills.tsx    # Skills section
│   ├── Projects.tsx  # Projects grid
│   ├── Experience.tsx # Timeline
│   ├── Contact.tsx   # Contact form
│   └── Footer.tsx    # Footer
├── data/             # Content data (edit here!)
│   ├── projects.ts   # Project details
│   ├── skills.ts     # Skills & technologies
│   ├── experience.ts # Work experience
│   ├── socials.ts    # Social links
│   ├── about.ts      # Bio & highlights
│   └── awards.ts     # Awards & certifications
├── pages/            # Route pages
│   ├── Index.tsx     # Home page
│   └── ProjectDetail.tsx # Project case study
├── hooks/            # Custom React hooks
├── utils/            # Utility functions
└── index.css         # Global styles & design system
```

## ✏️ Editing Content

All content is managed through TypeScript files in the `src/data/` directory. No need to touch JSX!

### Projects (`src/data/projects.ts`)

```typescript
{
  slug: "project-slug",
  title: "Project Title",
  summary: "Short description",
  description: "Detailed description",
  tech: ["React", "TypeScript"],
  links: {
    github: "https://github.com/...",
    demo: "https://demo.com"
  },
  images: ["/placeholder.svg"],
  // ... case study fields
}
```

### Skills (`src/data/skills.ts`)

```typescript
{
  category: "Languages",
  skills: ["TypeScript", "JavaScript"]
}
```

### Experience (`src/data/experience.ts`)

```typescript
{
  title: "Software Engineering Intern",
  organization: "Company Name",
  period: "Jun 2024 - Present",
  type: "internship",
  description: ["Achievement 1", "Achievement 2"]
}
```

### Social Links (`src/data/socials.ts`)

Update your social media links and resume URL here.

## 🎨 Customization

### Colors & Theme

Edit design tokens in `src/index.css`:

```css
:root {
  --primary: 262 83% 58%;  /* Purple */
  --accent: 193 100% 50%;  /* Cyan */
  /* ... more tokens */
}
```

### Animations

Adjust animation settings in `tailwind.config.ts`:

```typescript
animation: {
  "fade-in": "fade-in 0.6s ease-out",
  // ... more animations
}
```

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy with default settings

### Netlify

1. Push your code to GitHub
2. Import project in [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`

### Other Platforms

Any platform supporting static sites works! Build command is `npm run build` and output directory is `dist`.

## 📄 Resume

Place your resume PDF in the `public/` folder as `resume.pdf`, or update the path in `src/data/socials.ts`.

## 🔧 Tech Stack

- **Framework**: React 18 + Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Routing**: React Router
- **Form Validation**: Zod

## 🎯 Lighthouse Scores

Optimized for excellent performance:

- Performance: ≥ 95
- Accessibility: ≥ 95
- Best Practices: ≥ 95
- SEO: ≥ 95

## 📝 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

Contributions welcome! Feel free to open issues or submit PRs.

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
