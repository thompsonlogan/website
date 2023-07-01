import { ModeToggle } from '@/components/mode-toggle'
import { SidebarNav } from '@/components/sidebar-nav'
import Image from 'next/image'

const sidebarNavItems = [
  {
    title: "Dashboard",
    href: "/Dashboard",
  },
  {
    title: "Stats",
    href: "/Stats",
  },
  {
    title: "Plan",
    href: "/Plan",
  },
  {
    title: "Account",
    href: "/Account",
  },
]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ModeToggle></ModeToggle>
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 lg:w-1/5">
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div className="flex-1 lg:max-w-2xl"></div>
        </div>
    </main>
  )
}
