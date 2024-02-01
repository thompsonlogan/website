"use client"

import { Separator } from "@radix-ui/react-dropdown-menu";
import { PlanForm } from "./plan-form";
import { ModeToggle } from "@/components/mode-toggle";
import { SidebarNav } from "@/components/sidebar-nav";
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
        <div className="">
            {/*
            <ModeToggle/>
            <h1 className="text-center">Plan Header</h1>
            */}
            <div className="border-b">
              <div className="flex h-16 items-center px-4">
                <MainNav className="mx-6" />
                <div className="ml-auto flex items-center space-x-4">
                  <UserNav />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-8 gap-2">
              {/*
              <div className="col-start-1 col-end-1">
                <aside className="pl-5 pr-5">
                  <SidebarNav items={sidebarNavItems} />
                </aside>
              </div>
              */}
              <div className="col-start-2 col-end-8">
                <Separator/>
                <PlanForm/>
              </div>
            </div>
        </div>
    )
}