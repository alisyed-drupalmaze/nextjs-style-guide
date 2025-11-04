'use client'

import Button from '@/components/core/Button'
import Card from '@/components/core/Card'
import Heading from '@/components/typography/Heading'
import Text from '@/components/typography/Text'

export default function LandingPage() {
  const features = [
    {
      icon: '🚀',
      title: 'Fast & Reliable',
      description: 'Built with performance in mind, ensuring your applications run smoothly.'
    },
    {
      icon: '🎨',
      title: 'Beautiful Design',
      description: 'Modern, clean interface that looks great on all devices and themes.'
    },
    {
      icon: '🔧',
      title: 'Highly Customizable',
      description: 'Flexible components that adapt to your design system and requirements.'
    },
    {
      icon: '📱',
      title: 'Mobile First',
      description: 'Responsive design that works perfectly on phones, tablets, and desktops.'
    },
    {
      icon: '♿',
      title: 'Accessible',
      description: 'Built with accessibility best practices for inclusive user experiences.'
    },
    {
      icon: '🛠️',
      title: 'Developer Friendly',
      description: 'Easy to use API with comprehensive documentation and examples.'
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Product Manager',
      company: 'TechCorp',
      content: 'This component library has transformed our development workflow. The consistency and quality are outstanding.'
    },
    {
      name: 'Mike Chen',
      role: 'Lead Developer',
      company: 'StartupXYZ',
      content: 'The documentation is excellent and the components are highly customizable. Perfect for our needs.'
    },
    {
      name: 'Emma Davis',
      role: 'UX Designer',
      company: 'DesignStudio',
      content: 'Beautiful components that match our design system perfectly. The dark mode support is a game changer.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <Heading level={1} className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Build Better
              <span className="text-blue-600 dark:text-blue-400"> Interfaces</span>
            </Heading>
            <Text className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              A comprehensive component library for modern web applications.
              Beautiful, accessible, and developer-friendly components built with React and Tailwind CSS.
            </Text>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8">
                Get Started
              </Button>
              <Button variant="outline" size="lg" className="px-8">
                View Components
              </Button>
            </div>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full opacity-20 blur-3xl"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Heading level={2} className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Our Components?
            </Heading>
            <Text className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Built with modern web standards, our component library provides everything you need to create beautiful, functional interfaces.
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <Heading level={3} className="mb-2">{feature.title}</Heading>
                <Text className="text-gray-600 dark:text-gray-400">{feature.description}</Text>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600 dark:bg-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heading level={2} className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </Heading>
          <Text className="text-xl text-blue-100 mb-8">
            Join thousands of developers building better interfaces with our component library.
          </Text>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8 bg-white text-blue-600 hover:bg-gray-50">
              Start Building
            </Button>
            <Button variant="outline" size="lg" className="px-8 border-white text-white hover:bg-white hover:text-blue-600">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Heading level={2} className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Loved by Developers
            </Heading>
            <Text className="text-lg text-gray-600 dark:text-gray-300">
              See what our community has to say about our component library.
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  <Text className="text-gray-600 dark:text-gray-400 italic">
                    "{testimonial.content}"
                  </Text>
                </div>
                <div>
                  <Heading level={4} className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </Heading>
                  <Text className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role} at {testimonial.company}
                  </Text>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Heading level={3} className="mb-4">Component Library</Heading>
              <Text className="text-gray-400">
                Modern UI components for React applications.
              </Text>
            </div>
            <div>
              <Heading level={4} className="mb-4">Components</Heading>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/components/button" className="hover:text-white">Button</a></li>
                <li><a href="/components/card" className="hover:text-white">Card</a></li>
                <li><a href="/components/input" className="hover:text-white">Input</a></li>
                <li><a href="/components/navbar" className="hover:text-white">Navbar</a></li>
              </ul>
            </div>
            <div>
              <Heading level={4} className="mb-4">Examples</Heading>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/examples/dashboard" className="hover:text-white">Dashboard</a></li>
                <li><a href="/examples/form" className="hover:text-white">Forms</a></li>
                <li><a href="/examples/landing" className="hover:text-white">Landing Page</a></li>
              </ul>
            </div>
            <div>
              <Heading level={4} className="mb-4">Links</Heading>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/" className="hover:text-white">Home</a></li>
                <li><a href="/docs" className="hover:text-white">Documentation</a></li>
                <li><a href="/examples" className="hover:text-white">Examples</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <Text>© 2024 Component Library. Built with Next.js and Tailwind CSS.</Text>
          </div>
        </div>
      </footer>
    </div>
  )
}
