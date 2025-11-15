# Personal Portfolio Website

A modern, responsive personal portfolio website built with React, TypeScript, and Tailwind CSS. Features a beautiful dark theme with cyan accents and smooth animations.

## 🚀 Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **Modern UI/UX** - Clean, professional design with smooth animations
- **TypeScript** - Full type safety throughout the application
- **Modular Architecture** - Well-organized component structure
- **Smooth Scrolling** - Navigation with smooth scroll behavior
- **Contact Form** - Functional contact form with validation
- **Projects Showcase** - Portfolio grid with hover effects
- **Skills Display** - Animated skill bars with categories
- **Social Links** - Integrated social media links

## 📁 Project Structure

```
my-portfolio/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx          # Main navigation header
│   │   │   └── Footer.tsx          # Footer with social links
│   │   ├── sections/
│   │   │   ├── Hero.tsx            # Hero/Landing section
│   │   │   ├── About.tsx           # About me section
│   │   │   ├── Skills.tsx          # Skills showcase
│   │   │   ├── Projects.tsx        # Projects/Portfolio section
│   │   │   └── Contact.tsx         # Contact form section
│   │   └── ui/
│   │       ├── Button.tsx          # Reusable button component
│   │       └── SectionTitle.tsx    # Section title component
│   ├── data/
│   │   └── portfolio.ts            # All portfolio data (easy to customize)
│   ├── types/
│   │   └── index.ts                # TypeScript type definitions
│   ├── App.tsx                     # Main app component
│   ├── App.css                     # Additional styles
│   ├── index.css                   # Global styles & Tailwind
│   └── main.tsx                    # App entry point
├── public/                         # Static assets
├── index.html                      # HTML template
├── package.json                    # Dependencies
├── tailwind.config.js              # Tailwind configuration
├── tsconfig.json                   # TypeScript configuration
└── vite.config.ts                  # Vite configuration
```

## 🛠️ Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **React Hooks** - State management and side effects

## 📦 Installation

1. **Clone the repository** (or you're already here!)

2. **Install dependencies:**
```bash
npm install
```

3. **Start development server:**
```bash
npm run dev
```

4. **Build for production:**
```bash
npm run build
```

5. **Preview production build:**
```bash
npm run preview
```

## 🎨 Customization

### Update Personal Information

Edit `/src/data/portfolio.ts` to customize all content:

```typescript
export const personalInfo: PersonalInfo = {
  name: 'Your Name',
  title: 'Your Title',
  tagline: 'YOUR TAGLINE',
  description: 'Your description...',
  avatar: 'your-image-url',
  bio: 'Your bio...',
  resumeUrl: '/your-resume.pdf',
};
```

### Add/Edit Projects

```typescript
export const projects: Project[] = [
  {
    id: '1',
    title: 'Project Name',
    description: 'Project description...',
    image: 'project-image-url',
    technologies: ['React', 'TypeScript', 'etc'],
    liveUrl: 'https://your-project.com',
    githubUrl: 'https://github.com/you/project',
  },
  // Add more projects...
];
```

### Modify Skills

```typescript
export const skills: Skill[] = [
  { name: 'React', category: 'Frontend', level: 90 },
  { name: 'Node.js', category: 'Backend', level: 85 },
  // Add more skills...
];
```

### Update Contact Info

```typescript
export const contactInfo: ContactInfo = {
  email: 'your@email.com',
  phone: '+1 234 567-8900',
  location: 'Your City, Country',
};
```

### Update Social Links

```typescript
export const socialLinks: SocialLink[] = [
  {
    name: 'Email',
    url: 'mailto:your@email.com',
    icon: 'mail',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/yourusername',
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/yourusername',
    icon: 'linkedin',
  },
];
```

## 🎨 Color Scheme

The design uses a dark theme with cyan accents:

- **Background:** Gray-950 (`#030712`)
- **Secondary Background:** Gray-900 (`#111827`)
- **Primary Accent:** Cyan-400 (`#22d3ee`)
- **Text Primary:** White
- **Text Secondary:** Gray-400

### Changing Colors

To modify the color scheme, update the Tailwind classes in components or customize the Tailwind config:

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        // Add custom colors here
      },
    },
  },
};
```

## 📱 Responsive Breakpoints

- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click!

### Netlify

1. Build the project: `npm run build`
2. Deploy the `dist` folder to [Netlify](https://netlify.com)

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```
3. Run: `npm run deploy`

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📧 Contact

For questions or suggestions, please contact through the contact form on the website.

---

**Made with ❤️ using React, TypeScript, and Tailwind CSS**
