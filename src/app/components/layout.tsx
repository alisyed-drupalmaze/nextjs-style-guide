'use client'

import Sidebar from '@/components/navigation/Sidebar'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { useSidebar } from '@/components/layout/SidebarContext'

function ComponentsLayoutContent({
  children,
}: {
  children: React.ReactNode
}) {
  const { isOpen } = useSidebar()

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      <Header />

      <div className="flex flex-1">
        <Sidebar className="fixed left-0 top-16 h-[calc(100vh-4rem)]" />
        <main className={`transition-all duration-300 flex-1 ${
          isOpen ? 'ml-64' : 'ml-0'
        } md:ml-64`}>
          {children}
        </main>
      </div>

      <Footer />
    </div>
  )
}

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ComponentsLayoutContent>{children}</ComponentsLayoutContent>
}
