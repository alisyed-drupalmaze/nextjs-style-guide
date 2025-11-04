'use client'

import Text from '@/components/typography/Text'
import Heading from '@/components/typography/Heading'

export default function TextPage() {
  const codeExamples = {
    sizes: `<Text size="sm">Small text</Text>
<Text size="base">Base text</Text>
<Text size="lg">Large text</Text>`,
    colors: `<Text color="default">Default text</Text>
<Text color="muted">Muted text</Text>
<Text color="error">Error text</Text>`
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <Heading level={1} className="mb-4">Text</Heading>
      <Text className="mb-8 text-lg">
        Typography component for paragraphs and text content with size and color variants.
      </Text>

      <section className="mb-12">
        <Heading level={2} className="mb-4">Text Sizes</Heading>
        <div className="space-y-2 mb-6">
          <Text size="sm">Small text - for captions and secondary information</Text>
          <Text size="base">Base text - the default paragraph size</Text>
          <Text size="lg">Large text - for emphasis and lead paragraphs</Text>
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

      <section className="mb-12">
        <Heading level={2} className="mb-4">Text Colors</Heading>
        <div className="space-y-2 mb-6">
          <Text color="default">Default text - for primary content</Text>
          <Text color="muted">Muted text - for secondary or less important information</Text>
          <Text color="error">Error text - for validation messages and errors</Text>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md">
          <div className="flex justify-between items-center mb-2">
            <Text className="font-mono text-sm">React</Text>
            <button
              onClick={() => copyToClipboard(codeExamples.colors)}
              className="text-sm px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              Copy
            </button>
          </div>
          <pre className="text-sm overflow-x-auto">
            <code>{codeExamples.colors}</code>
          </pre>
        </div>
      </section>

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
                <td className="border border-gray-300 dark:border-gray-600 p-3">The text content</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-mono">size</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">"sm" | "base" | "lg"</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">"base"</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">The text size</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-mono">color</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">"default" | "muted" | "error"</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">"default"</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">The text color variant</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
