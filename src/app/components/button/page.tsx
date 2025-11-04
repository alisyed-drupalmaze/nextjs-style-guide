'use client'

import Button from '@/components/core/Button'
import Heading from '@/components/typography/Heading'
import Text from '@/components/typography/Text'

export default function ButtonPage() {
  const codeExamples = {
    basic: `<Button>Click me</Button>`,
    variants: `<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>`,
    sizes: `<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`,
    disabled: `<Button disabled>Disabled</Button>`,
    withOnClick: `<Button onClick={() => console.log('clicked')}>Click me</Button>`
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <Heading level={1} className="mb-4">Button</Heading>
      <Text className="mb-8 text-lg">
        A versatile button component with multiple variants, sizes, and states for various UI interactions.
      </Text>

      {/* Basic Usage */}
      <section className="mb-12">
        <Heading level={2} className="mb-4">Basic Usage</Heading>
        <div className="mb-6">
          <Button>Click me</Button>
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

      {/* Variants */}
      <section className="mb-12">
        <Heading level={2} className="mb-4">Variants</Heading>
        <div className="flex gap-4 flex-wrap mb-6">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md">
          <div className="flex justify-between items-center mb-2">
            <Text className="font-mono text-sm">React</Text>
            <button
              onClick={() => copyToClipboard(codeExamples.variants)}
              className="text-sm px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              Copy
            </button>
          </div>
          <pre className="text-sm overflow-x-auto">
            <code>{codeExamples.variants}</code>
          </pre>
        </div>
      </section>

      {/* Sizes */}
      <section className="mb-12">
        <Heading level={2} className="mb-4">Sizes</Heading>
        <div className="flex gap-4 items-center flex-wrap mb-6">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md">
          <div className="flex justify-between items-center mb-2">
            <Text className="font-mono text-sm">React</Text>
            <button
              onClick={() => copyToClipboard(codeExamples.sizes)}
              className="text-sm px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              Copy
            </button>
          </div>
          <pre className="text-sm overflow-x-auto">
            <code>{codeExamples.sizes}</code>
          </pre>
        </div>
      </section>

      {/* States */}
      <section className="mb-12">
        <Heading level={2} className="mb-4">States</Heading>
        <div className="flex gap-4 flex-wrap mb-6">
          <Button disabled>Disabled</Button>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md">
          <div className="flex justify-between items-center mb-2">
            <Text className="font-mono text-sm">React</Text>
            <button
              onClick={() => copyToClipboard(codeExamples.disabled)}
              className="text-sm px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              Copy
            </button>
          </div>
          <pre className="text-sm overflow-x-auto">
            <code>{codeExamples.disabled}</code>
          </pre>
        </div>
      </section>

      {/* Event Handlers */}
      <section className="mb-12">
        <Heading level={2} className="mb-4">Event Handlers</Heading>
        <div className="mb-6">
          <Button onClick={() => alert('Button clicked!')}>Click me</Button>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md">
          <div className="flex justify-between items-center mb-2">
            <Text className="font-mono text-sm">React</Text>
            <button
              onClick={() => copyToClipboard(codeExamples.withOnClick)}
              className="text-sm px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              Copy
            </button>
          </div>
          <pre className="text-sm overflow-x-auto">
            <code>{codeExamples.withOnClick}</code>
          </pre>
        </div>
      </section>

      {/* Loading States */}
      <section className="mb-12">
        <Heading level={2} className="mb-4">Loading States</Heading>
        <div className="flex gap-4 flex-wrap mb-6">
          <Button disabled>Loading...</Button>
          <Button variant="outline" disabled>Submitting...</Button>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md">
          <div className="flex justify-between items-center mb-2">
            <Text className="font-mono text-sm">React</Text>
            <button
              onClick={() => copyToClipboard(`<Button disabled>Loading...</Button>
<Button variant="outline" disabled>Submitting...</Button>`)}
              className="text-sm px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              Copy
            </button>
          </div>
          <pre className="text-sm overflow-x-auto">
            <code>{`<Button disabled>Loading...</Button>
<Button variant="outline" disabled>Submitting...</Button>`}</code>
          </pre>
        </div>
      </section>

      {/* Advanced Usage */}
      <section className="mb-12">
        <Heading level={2} className="mb-4">Advanced Usage</Heading>
        <div className="mb-6">
          <Button
            onClick={() => console.log('Custom styled button clicked')}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
          >
            Custom Styled Button
          </Button>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md">
          <div className="flex justify-between items-center mb-2">
            <Text className="font-mono text-sm">React</Text>
            <button
              onClick={() => copyToClipboard(`<Button
  onClick={() => console.log('Custom styled button clicked')}
  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
>
  Custom Styled Button
</Button>`)}
              className="text-sm px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              Copy
            </button>
          </div>
          <pre className="text-sm overflow-x-auto">
            <code>{`<Button
  onClick={() => console.log('Custom styled button clicked')}
  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
>
  Custom Styled Button
</Button>`}</code>
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
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-mono">children</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">ReactNode</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">-</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">The content to display inside the button</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-mono">variant</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">"primary" | "secondary" | "outline" | "ghost"</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">"primary"</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">The visual style of the button</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-mono">size</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">"sm" | "md" | "lg"</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">"md"</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">The size of the button</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-mono">disabled</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">boolean</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">false</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">Whether the button is disabled</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-mono">onClick</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-mono">() {'=>'} void</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">-</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">Click handler function</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
