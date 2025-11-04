'use client'

import Link from 'next/link'
import Button from '@/components/core/Button'
import Card from '@/components/core/Card'
import Heading from '@/components/typography/Heading'
import Text from '@/components/typography/Text'
import Sidebar from '@/components/navigation/Sidebar'
import ThemeSwitcher from '@/components/utils/ThemeSwitcher'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { useSidebar } from '@/components/layout/SidebarContext'

const components = [
  {
    name: 'Button',
    href: '/components/button',
    description: 'Interactive elements for user actions',
    component: <Button>Button</Button>,
    example: '/examples/form'
  },
  {
    name: 'Card',
    href: '/components/card',
    description: 'Container for grouping related content',
    component: (
      <Card>
        <Text>Card content</Text>
      </Card>
    ),
    example: '/examples/dashboard'
  },
  {
    name: 'Input',
    href: '/components/input',
    description: 'Form input fields with validation',
    component: <input className="px-3 py-2 border rounded" placeholder="Input field" readOnly />,
    example: '/examples/form'
  },
  {
    name: 'Navbar',
    href: '/components/navbar',
    description: 'Top navigation with links and branding',
    component: <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded text-sm">Navbar</div>,
    example: '/examples/landing'
  },
  {
    name: 'Heading',
    href: '/components/heading',
    description: 'Semantic heading elements',
    component: <Heading level={3}>Heading</Heading>,
    example: '/examples/landing'
  },
  {
    name: 'Text',
    href: '/components/text',
    description: 'Typography components for content',
    component: <Text>Text component</Text>,
    example: '/examples/dashboard'
  },
  {
    name: 'ThemeSwitcher',
    href: '/components/themeswitcher',
    description: 'Light/dark mode toggle',
    component: <ThemeSwitcher />,
    example: '/examples/settings'
  },
  {
    name: 'Alert',
    href: '/components/alert',
    description: 'Notification banners',
    component: <div className="bg-blue-50 dark:bg-blue-900 p-2 rounded text-sm">Alert</div>,
    example: '/examples/dashboard'
  }
]

const examples = [
  {
    name: 'Dashboard',
    href: '/examples/dashboard',
    description: 'Admin dashboard with stats, charts, and data tables',
    icon: '📊'
  },
  {
    name: 'Form Example',
    href: '/examples/form',
    description: 'Complete form with validation and user feedback',
    icon: '📝'
  },
  {
    name: 'Landing Page',
    href: '/examples/landing',
    description: 'Marketing landing page with hero, features, and CTA',
    icon: '🚀'
  },
  {
    name: 'Settings Page',
    href: '/examples/settings',
    description: 'User settings with tabs, forms, and preferences',
    icon: '⚙️'
  }
]

function HomeContent() {
  const { isOpen } = useSidebar()
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      <Header />

      <div className="flex flex-1">
        <Sidebar className="fixed left-0 top-16 h-[calc(100vh-4rem)]" />

        <main className={`transition-all duration-300 flex-1 ${
          isOpen ? 'ml-64' : 'ml-0'
        } md:ml-64`}>
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <Heading level={1} className="text-4xl md:text-6xl font-bold mb-6">
                Next.js Style Guide
              </Heading>
              <Text className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
                A comprehensive collection of reusable UI components built with React 18, Next.js 15, and Tailwind CSS 4.
              </Text>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button size="lg" className="bg-purple-600 border-white border-2 text-black hover:bg-gray-50 px-8">
                  <a href="#getting-started">Get Started</a>
                </Button>
                <Button variant="outline" size="lg" className="bg-blue-600 border-black border-2 text-black hover:bg-white hover:text-blue-600 px-8">
                  <a href="/docs">View Documentation</a>
                </Button>
              </div>

              {/* Requirements Badge */}
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">React 18+</span>
                <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">Next.js 15+</span>
                <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">Tailwind CSS 4+</span>
                <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">TypeScript</span>
              </div>
            </div>
          </section>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            {/* Getting Started Section */}
            <section id="getting-started" className="mb-20">
              <div className="text-center mb-12">
                <Heading level={2} className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Getting Started
                </Heading>
                <Text className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Install the component library and start building beautiful interfaces in minutes.
                </Text>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                <Card>
                  <Heading level={3} className="mb-4 text-blue-600">1. Install Dependencies</Heading>
                  <Text className="mb-4">Install the component library and required dependencies:</Text>

                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <Text className="font-mono text-sm">Terminal</Text>
                      <button
                        onClick={() => navigator.clipboard.writeText('npm install @your-org/component-library react@^18 next@^15 tailwindcss@^4')}
                        className="text-sm px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
                      >
                        Copy
                      </button>
                    </div>
                    <pre className="text-sm overflow-x-auto">
                      <code>npm install @your-org/component-library react@^18 next@^15 tailwindcss@^4</code>
                    </pre>
                  </div>
                </Card>

                <Card>
                  <Heading level={3} className="mb-4 text-blue-600">2. Configure Tailwind CSS</Heading>
                  <Text className="mb-4">Add the component library to your Tailwind content paths:</Text>

                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <Text className="font-mono text-sm">tailwind.config.js</Text>
                      <button
                        onClick={() => navigator.clipboard.writeText('./node_modules/@your-org/component-library/**/*.{js,ts,jsx,tsx}')}
                        className="text-sm px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
                      >
                        Copy
                      </button>
                    </div>
                    <pre className="text-sm overflow-x-auto">
                      <code>{`content: [
  './src/**/*.{js,ts,jsx,tsx}',
  './node_modules/@your-org/component-library/**/*.{js,ts,jsx,tsx}'
]`}</code>
                    </pre>
                  </div>
                </Card>
              </div>

              <div className="text-center">
                <Card className="inline-block">
                  <Heading level={3} className="mb-4 text-blue-600">3. Start Using Components</Heading>
                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <Text className="font-mono text-sm">React/JSX</Text>
                      <button
                        onClick={() => navigator.clipboard.writeText(`import Button from '@your-org/component-library/components/core/Button'
import Card from '@your-org/component-library/components/core/Card'

export default function MyComponent() {
  return (
    <Card>
      <Button>Get Started</Button>
    </Card>
  )
}`)}
                        className="text-sm px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
                      >
                        Copy
                      </button>
                    </div>
                    <pre className="text-sm overflow-x-auto">
                      <code>{`import Button from '@your-org/component-library/components/core/Button'
import Card from '@your-org/component-library/components/core/Card'

export default function MyComponent() {
  return (
    <Card>
      <Button>Get Started</Button>
    </Card>
  )
}`}</code>
                    </pre>
                  </div>
                </Card>
              </div>
            </section>

            {/* Components Section */}
            <section className="mb-20">
              <div className="text-center mb-12">
                <Heading level={2} className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Explore Components
                </Heading>
                <Text className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Browse our comprehensive collection of production-ready components with live examples and documentation.
                </Text>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {components.map((component) => (
                  <Card key={component.name} className="hover:shadow-lg transition-shadow">
                    <div className="p-6">
                      <div className="mb-4 flex items-center justify-between">
                        <Heading level={3} className="mb-2">{component.name}</Heading>
                        <div className="text-sm opacity-60">
                          {component.component}
                        </div>
                      </div>
                      <Text className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                        {component.description}
                      </Text>
                      <div className="flex gap-2">
                        <Link href={component.href}>
                          <Button size="sm">View Docs</Button>
                        </Link>
                        <Link href={component.example}>
                          <Button variant="outline" size="sm">See in Action</Button>
                        </Link>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* Examples Section */}
            <section className="mb-20">
              <div className="text-center mb-12">
                <Heading level={2} className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Example Applications
                </Heading>
                <Text className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  See how our components work together in real-world scenarios. These examples automatically reflect any changes made to the underlying components.
                </Text>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {examples.map((example) => (
                  <Card key={example.name} className="hover:shadow-lg transition-shadow">
                    <div className="p-6">
                      <div className="mb-4 flex items-center">
                        <div className="text-3xl mr-4">{example.icon}</div>
                        <div>
                          <Heading level={3} className="mb-1">{example.name}</Heading>
                          <Text className="text-sm text-gray-600 dark:text-gray-400">
                            {example.description}
                          </Text>
                        </div>
                      </div>
                      <Link href={example.href}>
                        <Button className="w-full">View Example</Button>
                      </Link>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* Features Section */}
            <section className="mb-20">
              <div className="text-center mb-12">
                <Heading level={2} className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Why Choose Our Style Guide?
                </Heading>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: '🎨', title: 'Consistent Design', desc: 'Unified design system across all components' },
                  { icon: '⚡', title: 'Performance First', desc: 'Optimized for speed and bundle size' },
                  { icon: '♿', title: 'Accessible', desc: 'Built with accessibility best practices' },
                  { icon: '🛠️', title: 'Developer Friendly', desc: 'Easy to use API with TypeScript support' },
                  { icon: '🌙', title: 'Dark Mode Ready', desc: 'Built-in light and dark theme support' },
                  { icon: '📱', title: 'Responsive', desc: 'Mobile-first responsive design' },
                  { icon: '🔧', title: 'Customizable', desc: 'Flexible theming and customization options' },
                  { icon: '📚', title: 'Well Documented', desc: 'Comprehensive documentation and examples' }
                ].map((feature, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <Heading level={4} className="mb-2">{feature.title}</Heading>
                    <Text className="text-sm text-gray-600 dark:text-gray-400">{feature.desc}</Text>
                  </Card>
                ))}
              </div>
            </section>

            {/* CTA Section */}
            <section className="text-center bg-blue-50 dark:bg-blue-900/20 rounded-lg p-12">
              <Heading level={2} className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Ready to Get Started?
              </Heading>
              <Text className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of developers building better interfaces with our component library.
              </Text>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="px-8">
                  <a href="/docs">View Full Documentation</a>
                </Button>
                <Button variant="outline" size="lg" className="px-8">
                  <a href="#getting-started">Quick Start Guide</a>
                </Button>
              </div>
            </section>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  )
}

export default function Home() {
  return <HomeContent />
}
