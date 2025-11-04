'use client'

import Card from '@/components/core/Card'
import Button from '@/components/core/Button'
import Heading from '@/components/typography/Heading'
import Text from '@/components/typography/Text'

export default function CardPage() {
  const codeExamples = {
    basic: `<Card>
  <h3>Card Title</h3>
  <p>Card content goes here.</p>
</Card>`,
    padding: `<Card padding="sm">
  <p>Small padding card</p>
</Card>

<Card padding="md">
  <p>Medium padding card (default)</p>
</Card>

<Card padding="lg">
  <p>Large padding card</p>
</Card>`
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <Heading level={1} className="mb-4">Card</Heading>
      <Text className="mb-8 text-lg">
        A container component for grouping related content with consistent styling and spacing.
      </Text>

      {/* Basic Usage */}
      <section className="mb-12">
        <Heading level={2} className="mb-4">Basic Usage</Heading>
        <div className="mb-6">
          <Card>
            <Heading level={3}>Card Title</Heading>
            <Text>This is a basic card component that groups related content together.</Text>
          </Card>
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

      {/* Padding Variants */}
      <section className="mb-12">
        <Heading level={2} className="mb-4">Padding Variants</Heading>
        <div className="grid gap-6 mb-6">
          <Card padding="sm">
            <Heading level={4}>Small Padding</Heading>
            <Text>Content with small padding around it.</Text>
          </Card>
          <Card padding="md">
            <Heading level={4}>Medium Padding</Heading>
            <Text>Content with medium padding (default).</Text>
          </Card>
          <Card padding="lg">
            <Heading level={4}>Large Padding</Heading>
            <Text>Content with large padding around it.</Text>
          </Card>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md">
          <div className="flex justify-between items-center mb-2">
            <Text className="font-mono text-sm">React</Text>
            <button
              onClick={() => copyToClipboard(codeExamples.padding)}
              className="text-sm px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              Copy
            </button>
          </div>
          <pre className="text-sm overflow-x-auto">
            <code>{codeExamples.padding}</code>
          </pre>
        </div>
      </section>

      {/* Advanced Usage */}
      <section className="mb-12">
        <Heading level={2} className="mb-4">Advanced Usage</Heading>
        <div className="mb-6">
          <Card className="hover:shadow-xl transition-shadow">
            <Heading level={3}>Custom Styled Card</Heading>
            <Text>This card has custom hover effects and additional styling.</Text>
            <div className="mt-4">
              <Button size="sm">Action Button</Button>
            </div>
          </Card>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md">
          <div className="flex justify-between items-center mb-2">
            <Text className="font-mono text-sm">React</Text>
            <button
              onClick={() => copyToClipboard(`<Card className="hover:shadow-xl transition-shadow">
  <Heading level={3}>Custom Styled Card</Heading>
  <Text>This card has custom hover effects and additional styling.</Text>
  <div className="mt-4">
    <Button size="sm">Action Button</Button>
  </div>
</Card>`)}
              className="text-sm px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              Copy
            </button>
          </div>
          <pre className="text-sm overflow-x-auto">
            <code>{`<Card className="hover:shadow-xl transition-shadow">
  <Heading level={3}>Custom Styled Card</Heading>
  <Text>This card has custom hover effects and additional styling.</Text>
  <div className="mt-4">
    <Button size="sm">Action Button</Button>
  </div>
</Card>`}</code>
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
                <td className="border border-gray-300 dark:border-gray-600 p-3">The content to display inside the card</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-mono">padding</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">"sm" | "md" | "lg"</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">"md"</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">The padding size inside the card</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
