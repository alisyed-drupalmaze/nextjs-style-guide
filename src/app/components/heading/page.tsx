'use client'

import Heading from '@/components/typography/Heading'
import Text from '@/components/typography/Text'

export default function HeadingPage() {
  const codeExamples = {
    levels: `<Heading level={1}>Heading 1</Heading>
<Heading level={2}>Heading 2</Heading>
<Heading level={3}>Heading 3</Heading>
<Heading level={4}>Heading 4</Heading>
<Heading level={5}>Heading 5</Heading>
<Heading level={6}>Heading 6</Heading>`
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <Heading level={1} className="mb-4">Heading</Heading>
      <Text className="mb-8 text-lg">
        Semantic heading components with responsive sizing and proper HTML hierarchy.
      </Text>

      <section className="mb-12">
        <Heading level={2} className="mb-4">Heading Levels</Heading>
        <div className="space-y-4 mb-6">
          <Heading level={1}>Heading 1 (H1)</Heading>
          <Heading level={2}>Heading 2 (H2)</Heading>
          <Heading level={3}>Heading 3 (H3)</Heading>
          <Heading level={4}>Heading 4 (H4)</Heading>
          <Heading level={5}>Heading 5 (H5)</Heading>
          <Heading level={6}>Heading 6 (H6)</Heading>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md">
          <div className="flex justify-between items-center mb-2">
            <Text className="font-mono text-sm">React</Text>
            <button
              onClick={() => copyToClipboard(codeExamples.levels)}
              className="text-sm px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              Copy
            </button>
          </div>
          <pre className="text-sm overflow-x-auto">
            <code>{codeExamples.levels}</code>
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
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-mono">level</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">1 | 2 | 3 | 4 | 5 | 6</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">-</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">The heading level (required)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-mono">children</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">ReactNode</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">-</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">The heading content</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
