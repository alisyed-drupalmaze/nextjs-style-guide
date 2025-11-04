'use client'

import Navbar from '@/components/navigation/Navbar'
import Heading from '@/components/typography/Heading'
import Text from '@/components/typography/Text'

export default function NavbarPage() {
  const codeExamples = {
    basic: `<Navbar
  links={[
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]}
/>`,
    withBrand: `<Navbar
  brand={<div className="text-xl font-bold">My App</div>}
  links={[
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
  ]}
/>`
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <Heading level={1} className="mb-4">Navbar</Heading>
      <Text className="mb-8 text-lg">
        A responsive top navigation bar component with support for branding and navigation links.
      </Text>

      {/* Basic Usage */}
      <section className="mb-12">
        <Heading level={2} className="mb-4">Basic Usage</Heading>
        <div className="mb-6 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
          <Navbar
            links={[
              { href: '/', label: 'Home' },
              { href: '/about', label: 'About' },
              { href: '/contact', label: 'Contact' },
            ]}
          />
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md">
          <div className="flex justify-between items-center mb-2">
            <Text className="font-mono text-sm">React</Text>
            <button
              onClick={() => copyToClipboard(codeExamples.basic)}
              className="text-sm px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              Copy
            </button>
          </div>
          <pre className="text-sm overflow-x-auto">
            <code>{codeExamples.basic}</code>
          </pre>
        </div>
      </section>

      {/* With Brand */}
      <section className="mb-12">
        <Heading level={2} className="mb-4">With Custom Branding</Heading>
        <div className="mb-6 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
          <Navbar
            brand={<div className="text-xl font-bold text-blue-600">My App</div>}
            links={[
              { href: '/', label: 'Home' },
              { href: '/about', label: 'About' },
            ]}
          />
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md">
          <div className="flex justify-between items-center mb-2">
            <Text className="font-mono text-sm">React</Text>
            <button
              onClick={() => copyToClipboard(codeExamples.withBrand)}
              className="text-sm px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              Copy
            </button>
          </div>
          <pre className="text-sm overflow-x-auto">
            <code>{codeExamples.withBrand}</code>
          </pre>
        </div>
      </section>

      {/* API Reference */}
      <section className="mb-12">
        <Heading level={2} className="mb-4">API Reference</Heading>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-700">
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Prop</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Type</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Default</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-mono">brand</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">ReactNode</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">Default brand text</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">Custom branding element</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-mono">links</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">Array{'<'}&#123;href: string, label: string&#125;{'>'}</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">[]</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">Navigation links array</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
