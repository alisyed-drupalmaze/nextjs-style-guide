'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface SidebarContextType {
  isOpen: boolean
  toggle: () => void
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined)

export function SidebarProvider({ children }: { children: ReactNode }) {
  // Start with mobile-first approach: closed on mobile, open on desktop
  const getInitialState = () => {
    if (typeof window === 'undefined') return true // SSR: default to open
    return window.innerWidth >= 768 // Open on desktop, closed on mobile
  }

  const [isOpen, setIsOpen] = useState(getInitialState)

  // Load from localStorage on mount (client-side only)
  useEffect(() => {
    const stored = localStorage.getItem('sidebar-open')
    if (stored !== null) {
      setIsOpen(JSON.parse(stored))
    }
    // If no stored preference, keep the initial state based on screen size
  }, [])

  // Save to localStorage when state changes
  useEffect(() => {
    localStorage.setItem('sidebar-open', JSON.stringify(isOpen))
  }, [isOpen])

  const toggle = () => setIsOpen(!isOpen)

  return (
    <SidebarContext.Provider value={{ isOpen, toggle }}>
      {children}
    </SidebarContext.Provider>
  )
}

export function useSidebar() {
  const context = useContext(SidebarContext)
  if (context === undefined) {
    throw new Error('useSidebar must be used within a SidebarProvider')
  }
  return context
}
