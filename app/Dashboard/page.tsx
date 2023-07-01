"use client"

import { Separator } from "@radix-ui/react-dropdown-menu";
import { DashboardForm } from "./dashboard-form";
import { ModeToggle } from "@/components/mode-toggle";
import { SidebarNav } from "@/components/sidebar-nav";

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

export default function SettingsDashboardPage() {
    return (
        <div>
            <ModeToggle/>
            <h1 className="text-center">Dashboard Header</h1>
            <aside className="-mx-4 lg:w-1/5">
                <SidebarNav items={sidebarNavItems} />
            </aside>
            <Separator/>
            <DashboardForm/>
        </div>
    )
}