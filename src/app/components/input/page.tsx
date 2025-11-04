'use client'

import { useState } from 'react'
import Input from '@/components/core/Input'
import Heading from '@/components/typography/Heading'
import Text from '@/components/typography/Text'

export default function InputPage() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    description: ''
  })

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues(prev => ({ ...prev, [field]: e.target.value }))
  }

  const codeExamples = {
    basic: `<Input label="Name" placeholder="Enter your name" />`,
    types: `<Input label="Email" type="email" placeholder="Enter your email" />
<Input label="Password" type="password" placeholder="Enter your password" />
<Input label="Age" type="number" placeholder="Enter your age" />`,
    validation: `<Input
  label="Email"
  type="email"
  placeholder="Enter your email"
  error={!values.email.includes('@') && values.email ? 'Please enter a valid email' : undefined}
/>`
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <Heading level={1} className="mb-4">Input</Heading>
      <Text className="mb-8 text-lg">
        A form input component with labels, validation support, and various input types.
      </Text>

      {/* Basic Usage */}
      <section className="mb-12">
        <Heading level={2} className="mb-4">Basic Usage</Heading>
        <div className="mb-6">
          <Input
            label="Name"
            placeholder="Enter your name"
            value={values.name}
            onChange={handleChange('name')}
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

      {/* Input Types */}
      <section className="mb-12">
        <Heading level={2} className="mb-4">Input Types</Heading>
        <div className="space-y-4 mb-6">
          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange('email')}
          />
          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange('password')}
          />
          <Input
            label="Number"
            type="number"
            placeholder="Enter a number"
          />
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

      {/* Controlled Inputs */}
      <section className="mb-12">
        <Heading level={2} className="mb-4">Controlled Inputs</Heading>
        <div className="space-y-4 mb-6">
          <Input
            label="First Name"
            placeholder="Enter your first name"
            value={values.name}
            onChange={handleChange('name')}
          />
          <Input
            label="Last Name"
            placeholder="Enter your last name"
          />
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md">
          <div className="flex justify-between items-center mb-2">
            <Text className="font-mono text-sm">React</Text>
            <button
              onClick={() => copyToClipboard(`const [values, setValues] = useState({ name: '', lastName: '' })

const handleChange = (field) => (e) => {
  setValues(prev => ({ ...prev, [field]: e.target.value }))
}

return (
  <>
    <Input
      label="First Name"
      placeholder="Enter your first name"
      value={values.name}
      onChange={handleChange('name')}
    />
    <Input
      label="Last Name"
      placeholder="Enter your last name"
      value={values.lastName}
      onChange={handleChange('lastName')}
    />
  </>
)`)}
              className="text-sm px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              Copy
            </button>
          </div>
          <pre className="text-sm overflow-x-auto">
            <code>{`const [values, setValues] = useState({ name: '', lastName: '' })

const handleChange = (field) => (e) => {
  setValues(prev => ({ ...prev, [field]: e.target.value }))
}

return (
  <>
    <Input
      label="First Name"
      placeholder="Enter your first name"
      value={values.name}
      onChange={handleChange('name')}
    />
    <Input
      label="Last Name"
      placeholder="Enter your last name"
      value={values.lastName}
      onChange={handleChange('lastName')}
    />
  </>
)`}</code>
          </pre>
        </div>
      </section>

      {/* Validation */}
      <section className="mb-12">
        <Heading level={2} className="mb-4">Validation</Heading>
        <div className="mb-6">
          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange('email')}
            error={!values.email.includes('@') && values.email ? 'Please enter a valid email' : undefined}
          />
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md">
          <div className="flex justify-between items-center mb-2">
            <Text className="font-mono text-sm">React</Text>
            <button
              onClick={() => copyToClipboard(codeExamples.validation)}
              className="text-sm px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              Copy
            </button>
          </div>
          <pre className="text-sm overflow-x-auto">
            <code>{codeExamples.validation}</code>
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
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-mono">label</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">string</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">-</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">The label text for the input</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-mono">type</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">string</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">"text"</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">The input type (text, email, password, etc.)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-mono">placeholder</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">string</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">-</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">Placeholder text for the input</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-mono">value</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">string</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">-</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">Controlled value for the input</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-mono">onChange</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">(e: ChangeEvent{'<'}HTMLInputElement{'>'}) =&gt; void</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">-</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">Change handler for controlled inputs</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-mono">error</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">string</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">-</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">Error message to display</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
