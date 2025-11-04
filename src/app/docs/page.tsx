'use client'

import { useState } from 'react'
import Button from '@/components/core/Button'
import Card from '@/components/core/Card'
import Heading from '@/components/typography/Heading'
import Text from '@/components/typography/Text'
import Alert from '@/components/display/Alert'

export default function DocsPage() {
  const [copiedCommand, setCopiedCommand] = useState<string>('')

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopiedCommand(text)
    setTimeout(() => setCopiedCommand(''), 2000)
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <Heading level={1} className="mb-4">Documentation</Heading>
      <Text className="mb-8 text-lg">
        Complete guide for installing and using the Component Library in your React projects.
      </Text>

      {/* Quick Start */}
      <section className="mb-12">
        <Heading level={2} className="mb-6">Quick Start</Heading>

        <Card className="mb-6">
          <Heading level={3} className="mb-4">Installation</Heading>
          <Text className="mb-4">
            Install the component library and its dependencies:
          </Text>

          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mb-4">
            <div className="flex justify-between items-center mb-2">
              <Text className="font-mono text-sm">Terminal</Text>
              <button
                onClick={() => copyToClipboard('npm install @your-org/component-library react@^18 next@^15 tailwindcss@^4')}
                className="text-sm px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
              >
                {copiedCommand === 'npm install @your-org/component-library react@^18 next@^15 tailwindcss@^4' ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <pre className="text-sm overflow-x-auto">
              <code>npm install @your-org/component-library react@^18 next@^15 tailwindcss@^4</code>
            </pre>
          </div>

          <Text className="text-sm text-gray-600 dark:text-gray-400">
            <strong>Note:</strong> This library requires React 18+, Next.js 15+, and Tailwind CSS 4.x
          </Text>
        </Card>

        <Card className="mb-6">
          <Heading level={3} className="mb-4">Basic Setup</Heading>
          <Text className="mb-4">
            Import and use components in your application:
          </Text>

          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mb-4">
            <div className="flex justify-between items-center mb-2">
              <Text className="font-mono text-sm">JavaScript/JSX</Text>
              <button
                onClick={() => copyToClipboard(`import Button from '@your-org/component-library/components/core/Button'
import Card from '@your-org/component-library/components/core/Card'

export default function MyPage() {
  return (
    <div>
      <Card>
        <Button>Click me!</Button>
      </Card>
    </div>
  )
}`)}
                className="text-sm px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
              >
                {copiedCommand === `import Button from '@your-org/component-library/components/core/Button'
import Card from '@your-org/component-library/components/core/Card'

export default function MyPage() {
  return (
    <div>
      <Card>
        <Button>Click me!</Button>
      </Card>
    </div>
  )
}` ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <pre className="text-sm overflow-x-auto">
              <code>{`import Button from '@your-org/component-library/components/core/Button'
import Card from '@your-org/component-library/components/core/Card'

export default function MyPage() {
  return (
    <div>
      <Card>
        <Button>Click me!</Button>
      </Card>
    </div>
  )
}`}</code>
            </pre>
          </div>
        </Card>
      </section>

      {/* Requirements */}
      <section className="mb-12">
        <Heading level={2} className="mb-6">Requirements</Heading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <Heading level={3} className="mb-4">Runtime Dependencies</Heading>
            <ul className="space-y-2 text-sm">
              <li><strong>React:</strong> 18.0.0 or higher</li>
              <li><strong>React DOM:</strong> 18.0.0 or higher</li>
              <li><strong>Next.js:</strong> 15.0.0 or higher (App Router)</li>
              <li><strong>Tailwind CSS:</strong> 4.0.0 or higher</li>
            </ul>
          </Card>

          <Card>
            <Heading level={3} className="mb-4">Development Dependencies</Heading>
            <ul className="space-y-2 text-sm">
              <li><strong>TypeScript:</strong> 5.0.0 or higher</li>
              <li><strong>Node.js:</strong> 18.0.0 or higher</li>
              <li><strong>npm/yarn/pnpm:</strong> Latest stable</li>
            </ul>
          </Card>
        </div>

        <Alert type="info" className="mt-6">
          <strong>Important:</strong> This component library uses modern React patterns and requires the new App Router in Next.js 15+.
        </Alert>
      </section>

      {/* Tailwind Configuration */}
      <section className="mb-12">
        <Heading level={2} className="mb-6">Tailwind CSS Setup</Heading>

        <Card>
          <Text className="mb-4">
            Ensure your Tailwind configuration includes the component library styles:
          </Text>

          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mb-4">
            <div className="flex justify-between items-center mb-2">
              <Text className="font-mono text-sm">tailwind.config.js</Text>
              <button
                onClick={() => copyToClipboard(`/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@your-org/component-library/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`)}
                className="text-sm px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
              >
                {copiedCommand === `/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@your-org/component-library/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}` ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <pre className="text-sm overflow-x-auto">
              <code>{`/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@your-org/component-library/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`}</code>
            </pre>
          </div>

          <Text className="text-sm text-gray-600 dark:text-gray-400">
            Make sure to include the component library path in your content array so Tailwind can purge unused styles.
          </Text>
        </Card>
      </section>

      {/* Usage Examples */}
      <section className="mb-12">
        <Heading level={2} className="mb-6">Usage Examples</Heading>

        <div className="space-y-6">
          <Card>
            <Heading level={3} className="mb-4">Button Variants</Heading>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mb-4">
              <div className="flex justify-between items-center mb-2">
                <Text className="font-mono text-sm">React</Text>
                <button
                  onClick={() => copyToClipboard(`<Button>Primary Button</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost Button</Button>
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
<Button disabled>Disabled</Button>`)}
                  className="text-sm px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
                >
                  {copiedCommand === `<Button>Primary Button</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost Button</Button>
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
<Button disabled>Disabled</Button>` ? 'Copied!' : 'Copy'}
                </button>
              </div>
              <pre className="text-sm overflow-x-auto">
                <code>{`<Button>Primary Button</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost Button</Button>
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
<Button disabled>Disabled</Button>`}</code>
              </pre>
            </div>
          </Card>

          <Card>
            <Heading level={3} className="mb-4">Form Components</Heading>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mb-4">
              <div className="flex justify-between items-center mb-2">
                <Text className="font-mono text-sm">React</Text>
                <button
                  onClick={() => copyToClipboard(`<Input
  label="Email Address"
  type="email"
  placeholder="Enter your email"
/>
<Input
  label="Password"
  type="password"
  placeholder="Enter your password"
/>
<Button type="submit">Sign In</Button>`)}
                  className="text-sm px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
                >
                  {copiedCommand === `<Input
  label="Email Address"
  type="email"
  placeholder="Enter your email"
/>
<Input
  label="Password"
  type="password"
  placeholder="Enter your password"
/>
<Button type="submit">Sign In</Button>` ? 'Copied!' : 'Copy'}
                </button>
              </div>
              <pre className="text-sm overflow-x-auto">
                <code>{`<Input
  label="Email Address"
  type="email"
  placeholder="Enter your email"
/>
<Input
  label="Password"
  type="password"
  placeholder="Enter your password"
/>
<Button type="submit">Sign In</Button>`}</code>
              </pre>
            </div>
          </Card>

          <Card>
            <Heading level={3} className="mb-4">Layout Components</Heading>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mb-4">
              <div className="flex justify-between items-center mb-2">
                <Text className="font-mono text-sm">React</Text>
                <button
                  onClick={() => copyToClipboard(`<Card>
  <Heading level={2}>Card Title</Heading>
  <Text>This is card content with proper spacing.</Text>
  <div className="flex gap-2 mt-4">
    <Button>Action 1</Button>
    <Button variant="outline">Action 2</Button>
  </div>
</Card>`)}
                  className="text-sm px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
                >
                  {copiedCommand === `<Card>
  <Heading level={2}>Card Title</Heading>
  <Text>This is card content with proper spacing.</Text>
  <div className="flex gap-2 mt-4">
    <Button>Action 1</Button>
    <Button variant="outline">Action 2</Button>
  </div>
</Card>` ? 'Copied!' : 'Copy'}
                </button>
              </div>
              <pre className="text-sm overflow-x-auto">
                <code>{`<Card>
  <Heading level={2}>Card Title</Heading>
  <Text>This is card content with proper spacing.</Text>
  <div className="flex gap-2 mt-4">
    <Button>Action 1</Button>
    <Button variant="outline">Action 2</Button>
  </div>
</Card>`}</code>
              </pre>
            </div>
          </Card>
        </div>
      </section>

      {/* API Overview */}
      <section className="mb-12">
        <Heading level={2} className="mb-6">API Overview</Heading>

        <Card>
          <Text className="mb-4">
            All components follow consistent API patterns:
          </Text>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 dark:border-gray-600 mb-6">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-700">
                  <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Pattern</th>
                  <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Description</th>
                  <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Example</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 font-mono">variant</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">Visual style variants</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 font-mono">variant="primary" | "secondary"</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 font-mono">size</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">Component sizing</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 font-mono">size="sm" | "md" | "lg"</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 font-mono">className</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">Custom CSS classes</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 font-mono">className="my-custom-class"</td>
                </tr>
              </tbody>
            </table>
          </div>

          <Alert type="info">
            <strong>Tip:</strong> All components support the <code>className</code> prop for additional styling and customization.
          </Alert>
        </Card>
      </section>

      {/* Support */}
      <section className="mb-12">
        <Heading level={2} className="mb-6">Support & Contributing</Heading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <Heading level={3} className="mb-4">Need Help?</Heading>
            <ul className="space-y-2 text-sm">
              <li>📖 Check the component documentation</li>
              <li>🔍 Browse the example applications</li>
              <li>🐛 Report issues on GitHub</li>
              <li>💬 Join our community discussions</li>
            </ul>
          </Card>

          <Card>
            <Heading level={3} className="mb-4">Contributing</Heading>
            <ul className="space-y-2 text-sm">
              <li>📝 Follow our contribution guidelines</li>
              <li>🎨 Design system consistency</li>
              <li>✅ Comprehensive test coverage</li>
              <li>📚 Clear documentation</li>
            </ul>
          </Card>
        </div>
      </section>
    </div>
  )
}
