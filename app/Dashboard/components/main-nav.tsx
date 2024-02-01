import Link from "next/link"

import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"


export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const currentPath = usePathname();
  const activeStyle = "text-sm font-medium transition-colors hover:text-primary";
  const passiveStyle = "text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
  return (
    <div>
      <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)} {...props}>
        <Link href="/Dashboard" className={`${currentPath === "/Dashboard" ? activeStyle:passiveStyle}`}>Dashboard</Link>
        <Link href="/Stats" className={`${currentPath === "/Stats" ? activeStyle:passiveStyle}`}>Stats</Link>
        <Link href="/Plan" className={`${currentPath === "/Plan" ? activeStyle:passiveStyle}`}>Plan</Link>
        <Link href="/Profile" className={`${currentPath === "/Profile" ? activeStyle:passiveStyle}`}>Profile</Link>
      </nav>
    </div>
  )
}