'use client'

import { useState } from 'react'
import Button from '@/components/core/Button'
import Card from '@/components/core/Card'
import Input from '@/components/core/Input'
import Heading from '@/components/typography/Heading'
import Text from '@/components/typography/Text'
import Alert from '@/components/display/Alert'

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    profile: {
      name: 'John Doe',
      email: 'john.doe@example.com',
      bio: 'Frontend developer passionate about creating amazing user experiences.',
      location: 'San Francisco, CA'
    },
    notifications: {
      email: true,
      push: false,
      marketing: true,
      updates: false
    },
    privacy: {
      profileVisibility: 'public',
      dataSharing: false,
      analytics: true
    }
  })

  const [activeTab, setActiveTab] = useState('profile')
  const [saveMessage, setSaveMessage] = useState('')

  const handleProfileChange = (field: string, value: string) => {
    setSettings(prev => ({
      ...prev,
      profile: { ...prev.profile, [field]: value }
    }))
  }

  const handleNotificationChange = (field: string, value: boolean) => {
    setSettings(prev => ({
      ...prev,
      notifications: { ...prev.notifications, [field]: value }
    }))
  }

  const handlePrivacyChange = (field: string, value: string | boolean) => {
    setSettings(prev => ({
      ...prev,
      privacy: { ...prev.privacy, [field]: value }
    }))
  }

  const handleSave = (section: string) => {
    setSaveMessage(`${section} settings saved successfully!`)
    setTimeout(() => setSaveMessage(''), 3000)
  }

  const tabs = [
    { id: 'profile', label: 'Profile', icon: '👤' },
    { id: 'notifications', label: 'Notifications', icon: '🔔' },
    { id: 'privacy', label: 'Privacy', icon: '🔒' },
    { id: 'account', label: 'Account', icon: '⚙️' }
  ]

  return (
    <div className="max-w-6xl mx-auto p-8">
      <Heading level={1} className="mb-4">Settings</Heading>
      <Text className="mb-8 text-lg">
        Manage your account settings, preferences, and privacy options.
      </Text>

      {saveMessage && (
        <Alert type="success" className="mb-6">
          {saveMessage}
        </Alert>
      )}

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <div className="lg:w-64">
          <Card>
            <nav className="space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    activeTab === tab.id
                      ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200'
                      : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                  }`}
                >
                  <span className="mr-3">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </nav>
          </Card>
        </div>

        {/* Content */}
        <div className="flex-1">
          {/* Profile Tab */}
          {activeTab === 'profile' && (
            <Card>
              <Heading level={2} className="mb-6">Profile Information</Heading>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Full Name"
                    value={settings.profile.name}
                    onChange={(e) => handleProfileChange('name', e.target.value)}
                  />
                  <Input
                    label="Email"
                    type="email"
                    value={settings.profile.email}
                    onChange={(e) => handleProfileChange('email', e.target.value)}
                  />
                </div>
                <Input
                  label="Location"
                  value={settings.profile.location}
                  onChange={(e) => handleProfileChange('location', e.target.value)}
                />
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Bio
                  </label>
                  <textarea
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    rows={4}
                    value={settings.profile.bio}
                    onChange={(e) => handleProfileChange('bio', e.target.value)}
                    placeholder="Tell us about yourself..."
                  />
                </div>
                <div className="flex justify-end">
                  <Button onClick={() => handleSave('Profile')}>Save Changes</Button>
                </div>
              </div>
            </Card>
          )}

          {/* Notifications Tab */}
          {activeTab === 'notifications' && (
            <Card>
              <Heading level={2} className="mb-6">Notification Preferences</Heading>
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Text className="font-medium">Email Notifications</Text>
                      <Text className="text-sm text-gray-600 dark:text-gray-400">
                        Receive notifications via email
                      </Text>
                    </div>
                    <input
                      type="checkbox"
                      checked={settings.notifications.email}
                      onChange={(e) => handleNotificationChange('email', e.target.checked)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Text className="font-medium">Push Notifications</Text>
                      <Text className="text-sm text-gray-600 dark:text-gray-400">
                        Receive push notifications in your browser
                      </Text>
                    </div>
                    <input
                      type="checkbox"
                      checked={settings.notifications.push}
                      onChange={(e) => handleNotificationChange('push', e.target.checked)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Text className="font-medium">Marketing Emails</Text>
                      <Text className="text-sm text-gray-600 dark:text-gray-400">
                        Receive emails about new features and promotions
                      </Text>
                    </div>
                    <input
                      type="checkbox"
                      checked={settings.notifications.marketing}
                      onChange={(e) => handleNotificationChange('marketing', e.target.checked)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Text className="font-medium">Product Updates</Text>
                      <Text className="text-sm text-gray-600 dark:text-gray-400">
                        Get notified about product updates and improvements
                      </Text>
                    </div>
                    <input
                      type="checkbox"
                      checked={settings.notifications.updates}
                      onChange={(e) => handleNotificationChange('updates', e.target.checked)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button onClick={() => handleSave('Notification')}>Save Preferences</Button>
                </div>
              </div>
            </Card>
          )}

          {/* Privacy Tab */}
          {activeTab === 'privacy' && (
            <Card>
              <Heading level={2} className="mb-6">Privacy Settings</Heading>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Profile Visibility
                  </label>
                  <select
                    value={settings.privacy.profileVisibility}
                    onChange={(e) => handlePrivacyChange('profileVisibility', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="public">Public - Anyone can see your profile</option>
                    <option value="friends">Friends Only - Only friends can see</option>
                    <option value="private">Private - Only you can see</option>
                  </select>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Text className="font-medium">Data Sharing</Text>
                      <Text className="text-sm text-gray-600 dark:text-gray-400">
                        Allow anonymous usage data to help improve our services
                      </Text>
                    </div>
                    <input
                      type="checkbox"
                      checked={settings.privacy.dataSharing}
                      onChange={(e) => handlePrivacyChange('dataSharing', e.target.checked)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Text className="font-medium">Analytics</Text>
                      <Text className="text-sm text-gray-600 dark:text-gray-400">
                        Help us improve by sharing anonymous analytics data
                      </Text>
                    </div>
                    <input
                      type="checkbox"
                      checked={settings.privacy.analytics}
                      onChange={(e) => handlePrivacyChange('analytics', e.target.checked)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button onClick={() => handleSave('Privacy')}>Save Settings</Button>
                </div>
              </div>
            </Card>
          )}

          {/* Account Tab */}
          {activeTab === 'account' && (
            <Card>
              <Heading level={2} className="mb-6">Account Management</Heading>
              <div className="space-y-6">
                <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-md">
                  <Heading level={3} className="text-yellow-800 dark:text-yellow-200 mb-2">
                    Danger Zone
                  </Heading>
                  <Text className="text-yellow-700 dark:text-yellow-300 text-sm mb-4">
                    These actions cannot be undone. Please be certain.
                  </Text>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full border-red-300 text-red-600 hover:bg-red-50">
                      Export Account Data
                    </Button>
                    <Button variant="outline" className="w-full border-red-300 text-red-600 hover:bg-red-50">
                      Delete Account
                    </Button>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                  <Heading level={3} className="mb-4">Account Information</Heading>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <Text className="font-medium text-gray-600 dark:text-gray-400">Member Since</Text>
                      <Text>January 2024</Text>
                    </div>
                    <div>
                      <Text className="font-medium text-gray-600 dark:text-gray-400">Last Login</Text>
                      <Text>Today at 10:30 AM</Text>
                    </div>
                    <div>
                      <Text className="font-medium text-gray-600 dark:text-gray-400">Account Status</Text>
                      <Text className="text-green-600">Active</Text>
                    </div>
                    <div>
                      <Text className="font-medium text-gray-600 dark:text-gray-400">Plan</Text>
                      <Text>Pro Plan</Text>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
