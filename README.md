# Callan George - Portfolio Website

A modern, responsive portfolio website for Callan George, a freelance web developer and designer based in Edinburgh, Scotland. Built with Next.js and Tailwind CSS, featuring a clean design system and smooth animations.

## 🌟 Features

### Pages
- **Home** - Hero section with services, testimonials, and project showcases
- **About** - Personal story and background information
- **Work** - Portfolio showcase with large website screenshots
- **Contact** - Call-to-action sections throughout the site

### Key Components
- **Responsive Navigation** - Glassmorphism navbar with mobile menu
- **Hero Section** - Large impact text with smooth animations
- **Services** - Web development services overview
- **Success Stories** - Client results and business outcomes
- **Testimonials** - Customer feedback with star ratings
- **About Section** - Personal introduction and background
- **Work Showcase** - Large website screenshot thumbnails
- **Final CTA** - Prominent call-to-action sections
- **Footer** - Responsive footer with navigation and contact info

## 🎨 Design System

### Colors
- **Primary Background**: `#ebe2da` (Light cream)
- **Secondary Background**: `#f5edf0` (Light pink)
- **Dark Background**: `#242424` (Dark gray)
- **Text**: `#242424` (Dark gray)
- **Accent**: `#779179` (Sage green)

### Typography
- **Headings**: Thunder (custom font)
- **Body Text**: Space Mono (monospace)
- **UI Elements**: Inter (sans-serif)

### UI Elements
- **Cards**: White backgrounds with black borders and box shadows
- **Buttons**: Consistent styling with hover effects
- **Animations**: Smooth fade-in and slide transitions

## 🛠 Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Fonts**: Custom Thunder font, Space Mono, Inter
- **Deployment**: Vercel-ready

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
portfolio/
├── app/                    # Next.js App Router
│   ├── about/             # About page
│   ├── work/              # Work/Portfolio page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── AboutHeader.tsx    # About page header
│   ├── AboutSection.tsx   # About content section
│   ├── FinalCTA.tsx       # Call-to-action component
│   ├── Footer.tsx         # Site footer
│   ├── Hero.tsx           # Hero section
│   ├── MyWorkSection.tsx  # Work portfolio grid
│   ├── Navbar.tsx         # Navigation bar
│   ├── Projects.tsx       # Project showcases
│   ├── Services.tsx       # Services section
│   ├── WhyChooseMe.tsx    # Testimonials section
│   └── WorkHeader.tsx     # Work page header
├── public/                # Static assets
│   └── fonts/             # Custom fonts
└── README.md
```

## 🎯 Key Features

### Responsive Design
- Mobile-first approach
- Responsive typography and spacing
- Adaptive layouts for all screen sizes
- Touch-friendly mobile navigation

### Performance
- Optimized images and assets
- Efficient component structure
- Fast loading times
- SEO-friendly structure

### User Experience
- Smooth animations and transitions
- Intuitive navigation
- Clear call-to-action placement
- Professional design aesthetic

## 🚀 Deployment

This project is optimized for deployment on Vercel:

1. Push your code to a Git repository
2. Connect your repository to Vercel
3. Deploy automatically with each push

For other platforms, build the project:
```bash
npm run build
```

## 📝 Content Updates

### Adding Projects
Update the projects array in `components/MyWorkSection.tsx`:
```typescript
const projects = [
  {
    title: "Project Name",
    image: "/project-screenshot.jpg",
    url: "https://project-url.com",
    category: "Project Category",
    year: "2025"
  }
]
```

### Updating Services
Modify the services array in `components/Services.tsx` to reflect current offerings.

### Customizing Content
- **About page**: Edit `components/AboutSection.tsx`
- **Hero section**: Update `components/Hero.tsx`
- **Contact info**: Modify footer and navbar links

## 📧 Contact

**Callan George**
- Website: [Coming Soon]
- Location: Edinburgh, Scotland
- Specialization: Web Development & Design for Small Businesses

## 📄 License

This project is for Callan George's personal portfolio. All rights reserved.

---

*Built with ❤️ in Edinburgh, Scotland*
