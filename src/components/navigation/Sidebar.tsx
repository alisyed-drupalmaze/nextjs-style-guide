'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useSidebar } from '@/components/layout/SidebarContext'

interface SidebarProps {
  className?: string
}

interface SidebarProps {
  className?: string
}

const components = [
  { id: 'button', label: 'Button', href: '/components/button', category: 'core' },
  { id: 'card', label: 'Card', href: '/components/card', category: 'core' },
  { id: 'input', label: 'Input', href: '/components/input', category: 'core' },
  { id: 'navbar', label: 'Navbar', href: '/components/navbar', category: 'navigation' },
  { id: 'heading', label: 'Heading', href: '/components/heading', category: 'typography' },
  { id: 'text', label: 'Text', href: '/components/text', category: 'typography' },
  { id: 'themeswitcher', label: 'ThemeSwitcher', href: '/components/themeswitcher', category: 'utils' },
  { id: 'alert', label: 'Alert', href: '/components/alert', category: 'display' },
]

const examples = [
  { id: 'dashboard', label: 'Dashboard', href: '/examples/dashboard' },
  { id: 'form', label: 'Form Example', href: '/examples/form' },
  { id: 'landing', label: 'Landing Page', href: '/examples/landing' },
  { id: 'settings', label: 'Settings Page', href: '/examples/settings' },
]

export default function Sidebar({ className = '' }: SidebarProps) {
  const { isOpen, toggle } = useSidebar()
  const [searchTerm, setSearchTerm] = useState('')

  const filteredComponents = components.filter(component =>
    component.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
    component.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const filteredExamples = examples.filter(example =>
    example.label.toLowerCase().includes(searchTerm.toLowerCase())
  )

  // Close sidebar when clicking on a link (mobile)
  const handleLinkClick = () => {
    if (window.innerWidth < 768) { // md breakpoint
      toggle()
    }
  }

  // Close sidebar when pressing Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        toggle()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      // Prevent body scroll when sidebar is open
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, toggle])

  return (
    <>
      {/* Backdrop for mobile only */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggle}
          aria-hidden="true"
        />
      )}

      {/* Sidebar - always visible on desktop, toggleable on mobile */}
      <nav
        className={`w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-4 fixed left-0 top-16 h-[calc(100vh-4rem)] transition-transform duration-300 z-50 ${
          isOpen ? 'translate-x-0' : 'md:translate-x-0 -translate-x-full'
        } ${className}`}
      >
        <div className="mb-6">
          <Link
            href="/"
            className="block text-lg font-semibold text-gray-900 dark:text-white mb-4 hover:text-blue-600 dark:hover:text-blue-400"
            onClick={handleLinkClick}
          >
            ← Home
          </Link>

        {/* Search Bar */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search components..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Components Section */}
        <div className="mb-6">
          <h2 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wide">
            Components
          </h2>
          <ul className="space-y-1">
            {filteredComponents.map((component) => (
              <li key={component.id}>
                <Link
                  href={component.href}
                  className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white transition-colors rounded-md"
                  onClick={handleLinkClick}
                >
                  {component.label}
                </Link>
              </li>
            ))}
            {searchTerm && filteredComponents.length === 0 && (
              <li className="px-3 py-2 text-sm text-gray-500 dark:text-gray-400">
                No components found
              </li>
            )}
          </ul>
        </div>

        {/* Examples Section */}
        <div className="mb-6">
          <h2 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wide">
            Examples
          </h2>
          <ul className="space-y-1">
            {filteredExamples.map((example) => (
              <li key={example.id}>
                <Link
                  href={example.href}
                  className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white transition-colors rounded-md"
                  onClick={handleLinkClick}
                >
                  {example.label}
                </Link>
              </li>
            ))}
            {searchTerm && filteredExamples.length === 0 && (
              <li className="px-3 py-2 text-sm text-gray-500 dark:text-gray-400">
                No examples found
              </li>
            )}
          </ul>
        </div>

        {/* Documentation Section */}
        <div className="mb-6">
          <h2 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wide">
            Resources
          </h2>
          <ul className="space-y-1">
            <li>
              <Link
                href="/docs"
                className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white transition-colors rounded-md"
                onClick={handleLinkClick}
              >
                📚 Documentation
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  )
}
