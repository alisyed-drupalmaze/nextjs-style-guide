# Next.js Component Library & Style Guide

A comprehensive, production-ready component library built with **Next.js 15**, **React 18**, **Tailwind CSS 4**, and **TypeScript**. This project provides a complete set of reusable UI components, design tokens, and example implementations to help developers build modern, consistent, and accessible web applications.

![Next.js](https://img.shields.io/badge/Next.js-15-black)
![React](https://img.shields.io/badge/React-18-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![License](https://img.shields.io/badge/License-MIT-green)

## 🚀 What is this?

This repository serves as both a **component library** and a **living style guide**. It includes:

- **🎨 Reusable UI Components**: Production-ready components like Button, Card, Input, Navbar, Sidebar, etc.
- **📖 Interactive Documentation**: Live examples and API documentation for each component
- **🖥️ Example Applications**: Real-world usage examples (Dashboard, Forms, Landing Pages)
- **🎯 Design System**: Consistent design tokens, colors, typography, and spacing
- **🌙 Theme Support**: Built-in light and dark mode with smooth transitions
- **📱 Responsive Design**: Mobile-first approach with collapsible sidebar navigation
- **♿ Accessibility**: WCAG compliant components with proper ARIA labels and keyboard navigation

Perfect for teams looking to establish a consistent design system or developers wanting to quickly prototype and build applications.

## ✨ Features

### 🎯 Core Components
- **Button** - Multiple variants (primary, secondary, outline, ghost) with loading states
- **Card** - Flexible content containers with hover effects and shadows
- **Input** - Form inputs with validation, labels, and error states
- **Navbar** - Responsive navigation with mobile menu support
- **Sidebar** - Collapsible navigation with search functionality
- **Alert** - Status messages and notifications
- **ThemeSwitcher** - Light/dark mode toggle

### 🎨 Design System
- **Typography** - Consistent heading and text components
- **Color Palette** - Light and dark theme support
- **Spacing System** - Standardized margins and padding
- **Responsive Grid** - Mobile-first breakpoint system

### 🛠️ Developer Experience
- **TypeScript** - Full type safety and IntelliSense support
- **Live Examples** - Interactive component playground
- **Copy-to-Clipboard** - Easy code copying for quick implementation
- **Hot Reload** - Fast development with instant feedback
- **Comprehensive React Code** - Multiple usage examples with JSX snippets

## 📦 Installation

### Prerequisites
- **Node.js** 18.0 or higher
- **npm** or **yarn** package manager
- **Git** for cloning the repository

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/nextjs-component-library.git
   cd nextjs-component-library
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the style guide in action.

### Using Components in Your Project

#### Option 1: Copy Components
Browse the `/src/components/` directory and copy the components you need into your project.

#### Option 2: Install as Package (Future)
```bash
npm install @your-org/component-library
```

## 🏗️ Project Structure

```
nextjs-component-library/
├── 📁 src/
│   ├── 📁 app/
│   │   ├── 📁 components/          # Component documentation pages
│   │   │   ├── button/page.tsx
│   │   │   ├── card/page.tsx
│   │   │   └── ...
│   │   ├── 📁 examples/            # Example applications
│   │   │   ├── dashboard/page.tsx
│   │   │   ├── form/page.tsx
│   │   │   └── landing/page.tsx
│   │   ├── docs/page.tsx           # Documentation hub
│   │   ├── layout.tsx              # Root layout with providers
│   │   └── page.tsx                # Home page with component overview
│   ├── 📁 components/
│   │   ├── 📁 core/                # Core UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   └── Input.tsx
│   │   ├── 📁 layout/              # Layout components
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Sidebar.tsx
│   │   ├── 📁 navigation/          # Navigation components
│   │   │   └── Sidebar.tsx
│   │   ├── 📁 typography/          # Text components
│   │   │   ├── Heading.tsx
│   │   │   └── Text.tsx
│   │   └── 📁 utils/               # Utility components
│   │       └── ThemeSwitcher.tsx
│   └── 📁 lib/                     # Utilities and helpers
├── 📁 public/                      # Static assets
├── package.json
├── tailwind.config.js
├── next.config.js
└── README.md
```

## 🎮 Usage Examples

### Basic Button Usage
```tsx
import Button from '@/components/core/Button'

export default function MyComponent() {
  return (
    <div>
      <Button>Click me</Button>
      <Button variant="outline" size="lg">Large Outline</Button>
      <Button variant="ghost" onClick={() => console.log('Clicked!')}>
        Ghost Button
      </Button>
    </div>
  )
}
```

### Card with Content
```tsx
import Card from '@/components/core/Card'
import Heading from '@/components/typography/Heading'
import Text from '@/components/typography/Text'

export default function ProductCard() {
  return (
    <Card>
      <Heading level={3}>Product Title</Heading>
      <Text>A brief description of this amazing product.</Text>
      <Button size="sm">Learn More</Button>
    </Card>
  )
}
```

### Form with Validation
```tsx
import Input from '@/components/core/Input'
import Button from '@/components/core/Button'

export default function ContactForm() {
  return (
    <form>
      <Input
        label="Email"
        type="email"
        placeholder="Enter your email"
        required
      />
      <Input
        label="Message"
        as="textarea"
        placeholder="Your message here..."
        rows={4}
      />
      <Button type="submit">Send Message</Button>
    </form>
  )
}
```

### Theme Provider Setup
```tsx
// In your app/layout.tsx
import { SidebarProvider } from '@/components/layout/SidebarContext'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SidebarProvider>
          {children}
        </SidebarProvider>
      </body>
    </html>
  )
}
```

## 🎨 Customization

### Tailwind Configuration
The project uses a custom Tailwind configuration with extended theme options:

```js
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@your-org/component-library/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        // Custom color palette
      },
      spacing: {
        // Custom spacing scale
      }
    }
  }
}
```

### Component Theming
All components support custom className props for additional styling:

```tsx
<Button className="bg-gradient-to-r from-purple-500 to-pink-500">
  Custom Styled Button
</Button>
```

## 🧪 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-component`
3. **Make your changes** and ensure tests pass
4. **Commit your changes**: `git commit -m 'Add amazing component'`
5. **Push to the branch**: `git push origin feature/amazing-component`
6. **Open a Pull Request**

### Development Guidelines
- Follow the existing code style and patterns
- Add TypeScript types for all props
- Include accessibility features (ARIA labels, keyboard navigation)
- Test components across different screen sizes
- Update documentation for new components

## 📄 Component API Documentation

Each component includes comprehensive documentation with:

- **Props Interface** - TypeScript definitions
- **Usage Examples** - Code snippets with copy buttons
- **Variants** - Different styles and sizes available
- **Accessibility** - ARIA attributes and keyboard support
- **Browser Support** - Compatibility information
- **React Code Snippets** - Multiple JSX examples for different use cases

Visit `/components/[component-name]` in the running application for detailed documentation.

## 🏗️ Built With

- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[React 18](https://react.dev/)** - UI library with concurrent features
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Lucide Icons](https://lucide.dev/)** - Beautiful icon library

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by modern design systems and component libraries
- Built with performance and accessibility in mind
- Designed for developer productivity and user experience

## 📞 Support

- 📧 **Email**: your-email@example.com
- 🐛 **Issues**: [GitHub Issues](https://github.com/your-username/nextjs-component-library/issues)
- 📖 **Documentation**: [Live Docs](http://localhost:3000/docs)

---

**Happy coding!** 🎉 Build beautiful, consistent, and accessible interfaces with this component library.


