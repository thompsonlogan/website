"use client"

import { Row } from "@tanstack/react-table"
import { Copy, MoreHorizontal, Pen, Star, Tags, Trash } from "lucide-react"
import { Button } from "@/components/ui/button"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// import './styles/actionStyle.css';

interface DataTableRowActionsProps<TData> {
  row: Row<TData>
}

function editTest(): void {
    console.log("edit test")
}

function deleteTest(): void {
    console.log("delete test")
}

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  //const task = taskSchema.parse(row.original)
  
  return (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex h-8 w-8 p-0 data-[state=open]:bg-muted">
            <MoreHorizontal className="h-4 w-4" />
            <span className="sr-only">Open menu</span>
        </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="DropdownMenuContent">
        <DropdownMenuItem className="DropdownMenuItem" onClick={editTest}>
            <Pen className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
            Edit
        </DropdownMenuItem>
        {/*<DropdownMenuSeparator />
        <DropdownMenuSub>
            <DropdownMenuSubTrigger>
                <Tags className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
                Labels
            </DropdownMenuSubTrigger>
          
          <DropdownMenuSubContent>
            <DropdownMenuRadioGroup value={task.label}>
              {labels.map((label) => (
                <DropdownMenuRadioItem key={label.value} value={label.value}>
                  {label.label}
                </DropdownMenuRadioItem>
              ))}
              </DropdownMenuRadioGroup>
              </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSeparator />*/}
        <DropdownMenuItem className="DropdownMenuItem" onClick={deleteTest}>
            <Trash className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
            Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}