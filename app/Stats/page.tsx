"use client"

import { Separator } from "@radix-ui/react-dropdown-menu";
import { StatsForm } from "./stats-form";
import { ModeToggle } from "@/components/mode-toggle";
import { SidebarNav } from "@/components/sidebar-nav";
import { PlanForm } from "../Plan/plan-form";

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
          <div className="absloute top-0 right-0">
            <ModeToggle/>
          </div>
            <h1 className="text-center">Account Header</h1>
            <aside className="-mx-4 lg:w-1/5">
                <SidebarNav items={sidebarNavItems} />
            </aside>
            <Separator/>
            <StatsForm/>
        </div>
    )
}
// 