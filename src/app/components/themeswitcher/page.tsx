'use client'

import ThemeSwitcher from '@/components/utils/ThemeSwitcher'
import Heading from '@/components/typography/Heading'
import Text from '@/components/typography/Text'

export default function ThemeSwitcherPage() {
  const codeExamples = {
    basic: `<ThemeSwitcher />`
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <Heading level={1} className="mb-4">ThemeSwitcher</Heading>
      <Text className="mb-8 text-lg">
        A toggle component for switching between light and dark themes with localStorage persistence.
      </Text>

      <section className="mb-12">
        <Heading level={2} className="mb-4">Basic Usage</Heading>
        <div className="mb-6">
          <ThemeSwitcher />
        </div>
        <Text className="mb-4">Click the theme switcher to toggle between light and dark modes. The preference is saved in localStorage.</Text>
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

      <section className="mb-12">
        <Heading level={2} className="mb-4">Features</Heading>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>Automatic theme detection based on system preference</li>
          <li>localStorage persistence across browser sessions</li>
          <li>Smooth transitions between themes</li>
          <li>Accessible with proper ARIA labels</li>
        </ul>
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
                <td className="border border-gray-300 dark:border-gray-600 p-3">No props</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">-</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">-</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">This component has no configurable props</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
