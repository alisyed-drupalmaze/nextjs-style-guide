'use client'

import { useState } from 'react'
import Button from '@/components/core/Button'
import Card from '@/components/core/Card'
import Input from '@/components/core/Input'
import Heading from '@/components/typography/Heading'
import Text from '@/components/typography/Text'
import Alert from '@/components/display/Alert'

export default function FormPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    bio: '',
    country: '',
    newsletter: false
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleInputChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required'
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid'
    if (!formData.password) newErrors.password = 'Password is required'
    else if (formData.password.length < 8) newErrors.password = 'Password must be at least 8 characters'
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitMessage('')

    if (!validateForm()) return

    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))

    setSubmitMessage('Form submitted successfully!')
    setIsSubmitting(false)
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <Heading level={1} className="mb-4">Form Example</Heading>
      <Text className="mb-8 text-lg">
        A comprehensive form example showcasing various input types, validation, and user feedback using our component library.
      </Text>

      {submitMessage && (
        <Alert type="success" className="mb-6">
          {submitMessage}
        </Alert>
      )}

      <Card>
        <Heading level={2} className="mb-6">User Registration</Heading>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="First Name"
              placeholder="Enter your first name"
              value={formData.firstName}
              onChange={handleInputChange('firstName')}
              error={errors.firstName}
            />
            <Input
              label="Last Name"
              placeholder="Enter your last name"
              value={formData.lastName}
              onChange={handleInputChange('lastName')}
              error={errors.lastName}
            />
          </div>

          {/* Email */}
          <Input
            label="Email Address"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleInputChange('email')}
            error={errors.email}
          />

          {/* Password Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Password"
              type="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleInputChange('password')}
              error={errors.password}
            />
            <Input
              label="Confirm Password"
              type="password"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleInputChange('confirmPassword')}
              error={errors.confirmPassword}
            />
          </div>

          {/* Bio */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Bio
            </label>
            <textarea
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              rows={4}
              placeholder="Tell us about yourself..."
              value={formData.bio}
              onChange={(e) => setFormData(prev => ({ ...prev, bio: e.target.value }))}
            />
            <Text className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Brief description for your profile. Max 500 characters.
            </Text>
          </div>

          {/* Country Select */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Country
            </label>
            <select
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={formData.country}
              onChange={(e) => setFormData(prev => ({ ...prev, country: e.target.value }))}
            >
              <option value="">Select a country</option>
              <option value="us">United States</option>
              <option value="ca">Canada</option>
              <option value="uk">United Kingdom</option>
              <option value="de">Germany</option>
              <option value="fr">France</option>
              <option value="jp">Japan</option>
              <option value="au">Australia</option>
            </select>
          </div>

          {/* Newsletter Checkbox */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="newsletter"
              checked={formData.newsletter}
              onChange={(e) => setFormData(prev => ({ ...prev, newsletter: e.target.checked }))}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="newsletter" className="ml-2 text-sm text-gray-700 dark:text-gray-300">
              Subscribe to our newsletter for updates and tips
            </label>
          </div>

          {/* Submit Button */}
          <div className="flex gap-4">
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Create Account'}
            </Button>
            <Button type="button" variant="outline" onClick={() => {
              setFormData({
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: '',
                bio: '',
                country: '',
                newsletter: false
              })
              setErrors({})
              setSubmitMessage('')
            }}>
              Reset Form
            </Button>
          </div>
        </form>
      </Card>

      {/* Form Tips */}
      <Card className="mt-8">
        <Heading level={3} className="mb-4">Form Best Practices</Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Heading level={4} className="mb-2">Validation</Heading>
            <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-400">
              <li>• Real-time validation feedback</li>
              <li>• Clear error messages</li>
              <li>• Field-level validation</li>
              <li>• Form-level validation</li>
            </ul>
          </div>
          <div>
            <Heading level={4} className="mb-2">User Experience</Heading>
            <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-400">
              <li>• Loading states during submission</li>
              <li>• Success/error feedback</li>
              <li>• Form reset functionality</li>
              <li>• Keyboard navigation</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  )
}
