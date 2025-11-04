import { ReactNode } from 'react'
import Link from 'next/link'

interface NavbarProps {
  brand?: ReactNode
  links?: Array<{ href: string; label: string }>
  className?: string
}

export default function Navbar({ brand, links = [], className = '' }: NavbarProps) {
  return (
    <nav className={`bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              {brand || (
                <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
                  Style Guide
                </Link>
              )}
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {links.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
