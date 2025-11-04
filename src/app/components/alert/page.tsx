'use client'

import Alert from '@/components/display/Alert'
import Heading from '@/components/typography/Heading'
import Text from '@/components/typography/Text'

export default function AlertPage() {
  const codeExamples = {
    types: `<Alert type="info">This is an info alert.</Alert>
<Alert type="success">This is a success alert.</Alert>
<Alert type="warning">This is a warning alert.</Alert>
<Alert type="error">This is an error alert.</Alert>`
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <Heading level={1} className="mb-4">Alert</Heading>
      <Text className="mb-8 text-lg">
        Notification banners for displaying important messages to users with different severity levels.
      </Text>

      <section className="mb-12">
        <Heading level={2} className="mb-4">Alert Types</Heading>
        <div className="space-y-4 mb-6">
          <Alert type="info">This is an info alert - for general information.</Alert>
          <Alert type="success">This is a success alert - for successful operations.</Alert>
          <Alert type="warning">This is a warning alert - for cautionary messages.</Alert>
          <Alert type="error">This is an error alert - for error messages and failures.</Alert>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md">
          <div className="flex justify-between items-center mb-2">
            <Text className="font-mono text-sm">React</Text>
            <button
              onClick={() => copyToClipboard(codeExamples.types)}
              className="text-sm px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              Copy
            </button>
          </div>
          <pre className="text-sm overflow-x-auto">
            <code>{codeExamples.types}</code>
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
                <td className="border border-gray-300 dark:border-gray-600 p-3">The alert message content</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-mono">type</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">"info" | "success" | "warning" | "error"</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">"info"</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">The alert type and visual style</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
