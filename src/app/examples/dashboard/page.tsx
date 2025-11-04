'use client'

import { useState } from 'react'
import Button from '@/components/core/Button'
import Card from '@/components/core/Card'
import Input from '@/components/core/Input'
import Navbar from '@/components/navigation/Navbar'
import Heading from '@/components/typography/Heading'
import Text from '@/components/typography/Text'
import Alert from '@/components/display/Alert'

export default function DashboardPage() {
  const [notifications, setNotifications] = useState([
    { id: 1, type: 'success', message: 'Profile updated successfully!' },
    { id: 2, type: 'warning', message: 'Storage space running low' },
    { id: 3, type: 'info', message: 'New feature available' }
  ])

  const dismissNotification = (id: number) => {
    setNotifications(prev => prev.filter(n => n.id !== id))
  }

  const stats = [
    { label: 'Total Users', value: '12,345', change: '+12%', positive: true },
    { label: 'Revenue', value: '$45,678', change: '+8%', positive: true },
    { label: 'Orders', value: '1,234', change: '-2%', positive: false },
    { label: 'Conversion', value: '3.2%', change: '+5%', positive: true }
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <div className="flex items-center justify-between">
              <div>
                <Heading level={1} className="mb-2">Dashboard</Heading>
                <Text>Welcome back! Here's what's happening with your project.</Text>
              </div>
              <div className="flex gap-3">
                <Button variant="outline">Export Data</Button>
                <Button>View Reports</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Notifications */}
        {notifications.length > 0 && (
          <div className="mb-8 space-y-3">
            {notifications.map(notification => (
              <Alert
                key={notification.id}
                type={notification.type as 'success' | 'warning' | 'info' | 'error'}
                className="flex items-center justify-between"
              >
                <span>{notification.message}</span>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => dismissNotification(notification.id)}
                  className="ml-4"
                >
                  ×
                </Button>
              </Alert>
            ))}
          </div>
        )}

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <div className="flex items-center justify-between">
                <div>
                  <Text className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </Text>
                  <Heading level={2} className="text-2xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </Heading>
                </div>
                <div className={`text-sm font-medium ${stat.positive ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.change}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Activity */}
          <div className="lg:col-span-2">
            <Card>
              <Heading level={3} className="mb-4">Recent Activity</Heading>
              <div className="space-y-4">
                {[
                  { user: 'John Doe', action: 'created a new project', time: '2 hours ago' },
                  { user: 'Jane Smith', action: 'updated the dashboard', time: '4 hours ago' },
                  { user: 'Mike Johnson', action: 'added new team member', time: '1 day ago' },
                  { user: 'Sarah Wilson', action: 'completed task review', time: '2 days ago' }
                ].map((activity, index) => (
                  <div key={index} className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
                    <div>
                      <Text className="font-medium">{activity.user}</Text>
                      <Text className="text-sm text-gray-600 dark:text-gray-400">{activity.action}</Text>
                    </div>
                    <Text className="text-sm text-gray-500 dark:text-gray-500">{activity.time}</Text>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Button variant="outline" className="w-full">
                  View All Activity
                </Button>
              </div>
            </Card>
          </div>

          {/* Quick Actions */}
          <div>
            <Card>
              <Heading level={3} className="mb-4">Quick Actions</Heading>
              <div className="space-y-3">
                <Button className="w-full justify-start">
                  + Create New Project
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  📊 Generate Report
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  👥 Invite Team Member
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  ⚙️ Settings
                </Button>
              </div>
            </Card>

            {/* Search */}
            <Card className="mt-6">
              <Heading level={3} className="mb-4">Quick Search</Heading>
              <Input
                placeholder="Search projects, users, or tasks..."
                className="mb-4"
              />
              <Button variant="outline" size="sm" className="w-full">
                Advanced Search
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
