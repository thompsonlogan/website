"use client"

import { Separator } from "@radix-ui/react-dropdown-menu";
import { AccountForm } from "./account-form";
import { SidebarNav } from "@/components/sidebar-nav";
import { ModeToggle } from "@/components/mode-toggle";

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

export default function SettingsAccountPage() {
    return (
        <div>
            <ModeToggle></ModeToggle>
            <h1 className="text-center">Account Header</h1>
            <aside className="-mx-4 lg:w-1/5">
                <SidebarNav items={sidebarNavItems} />
            </aside>
            <Separator/>
            <AccountForm/>
        </div>
    )
}