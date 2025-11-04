import { ReactNode } from 'react'

interface TextProps {
  children: ReactNode
  size?: 'sm' | 'base' | 'lg'
  color?: 'default' | 'muted' | 'error'
  className?: string
}

export default function Text({
  children,
  size = 'base',
  color = 'default',
  className = '',
}: TextProps) {
  const sizeClasses = {
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
  }

  const colorClasses = {
    default: 'text-gray-900 dark:text-white',
    muted: 'text-gray-600 dark:text-gray-400',
    error: 'text-red-600 dark:text-red-400',
  }

  return (
    <p className={`${sizeClasses[size]} ${colorClasses[color]} ${className}`}>
      {children}
    </p>
  )
}
