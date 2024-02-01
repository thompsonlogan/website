"use client"

import { Separator } from "@radix-ui/react-dropdown-menu";
import { StatsForm } from "./stats-form";
import { ModeToggle } from "@/components/mode-toggle";
import { SidebarNav } from "@/components/sidebar-nav";
import { PlanForm } from "../Plan/plan-form";
import { MainNav } from "@/app/Dashboard/components/main-nav"
import { UserNav } from "@/app/Dashboard/components/user-nav"

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

export default function SettingsPlanPage() {
    return (
        <div>
          <div className="border-b">
             <div className="flex h-16 items-center px-4">
              <MainNav className="mx-6" />
              <div className="ml-auto flex items-center space-x-4">
                <UserNav />
              </div>
            </div>
          </div>
          <Separator/>
          <StatsForm/>
        </div>
    )
}
// 