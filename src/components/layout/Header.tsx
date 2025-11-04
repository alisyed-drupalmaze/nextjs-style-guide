import Link from 'next/link'
import Button from '@/components/core/Button'
import Text from '@/components/typography/Text'
import ThemeSwitcher from '@/components/utils/ThemeSwitcher'
import { useSidebar } from './SidebarContext'

export default function Header() {
  const { toggle } = useSidebar()

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Components', href: '/#components' },
    { label: 'Examples', href: '/#examples' }
  ]

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center mr-3">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <div>
                <Text className="font-bold text-gray-900 dark:text-white">Component Library</Text>
                <Text className="text-xs text-gray-500 dark:text-gray-400 -mt-1">Next.js + Tailwind</Text>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <ThemeSwitcher />
          </nav>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeSwitcher />
            <button
              onClick={toggle}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
