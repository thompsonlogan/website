"use client"

import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"
// import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
    CaretSortIcon,
    ChevronDownIcon,
    DotsHorizontalIcon,
  } from "@radix-ui/react-icons"
// import { WeekNumber } from "react-day-picker"
import { DataTableRowActions } from "./data-table-row-actions"
import { NotesButton } from "./notes-button"
  
  export type Exercise = {
    day: string,             // week of the program
    exercise: string,         // name of the exercise
    warmup_sets: number,      // number of warmup sets
    working_sets: number,     // number of working sets
    reps: number,             // number of reps
    load: number,             // weight to lift
    percent: number,          // % of 1RM
    rpe: number,              // rate of perceived exersion
    rest_time: number,        // rest time between sets
    actual: number,           // actual weight and sets done
    notes: string,            // notes for the lift
  }

  let weekNumber = "Week 1"
  
  export const columns: ColumnDef<Exercise>[] = [
    /*{
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={table.getIsAllPageRowsSelected()}
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },*/
    /*{
      accessorKey: "day",
      header: weekNumber,
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("status")}</div>
      ),
    },*/
    {
      accessorKey: "day",
      header: weekNumber,
    },
    {
      accessorKey: "exercise",
      header: () => <div className="text-center">Exercise</div>,
      cell: ({row}) => {
        return <div className="text-left">{row.original.exercise}</div>
      }
    },
    {
      accessorKey: "warmup_sets",
      header: () => <div className="text-center">Warm-up Sets</div>,
      cell: ({row}) => {
        return <div className="text-center">{row.original.warmup_sets}</div>
      }
    },
    {
      accessorKey: "working_sets",
      header: () => <div className="text-center">Working Sets</div>,
      cell: ({row}) => {
        return <div className="text-center">{row.original.working_sets}</div>
      }
    },
    {
      accessorKey: "reps",
      header: () => <div className="text-center">Reps</div>,
      cell: ({row}) => {
        return <div className="text-center">{row.original.reps}</div>
      }
    },
    {
      accessorKey: "load",
      header: () => <div className="text-center">Load (lbs)</div>,
      cell: ({row}) => {
        return <div className="text-center">{row.original.load}</div>
      }
    },
    {
      accessorKey: "percent",
      header: () => <div className="text-center">% 1RM</div>,
      cell: ({row}) => {
        const formatted = row.original.percent.toFixed(2)+"%"
        return <div className="text-center">{formatted}</div>
      }
    },
    {
      accessorKey: "rpe",
      header: () => <div className="text-center">RPE</div>,
      cell: ({row}) => {
        return <div className="text-center">{row.original.rpe}</div>
      }
    },
    {
      accessorKey: "rest_time",
      header: () => <div className="text-center">Rest Time</div>,
      cell: ({row}) => {
        return <div className="text-center">{row.original.rest_time}</div>
      }
    },
    {
      accessorKey: "actual",
      header: () => <div className="text-center">Actual</div>,
      cell: ({row}) => {
        return <div className="text-center">{row.original.actual}</div>
      }
    },
    {
      accessorKey: "notes",
      header: () => <div className="text-center">Notes</div>,
      cell: ({row}) => {
        return <NotesButton/>/*<div className="text-left">{row.original.notes}</div>*/
      }
    },
    /*{
      accessorKey: "email",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Email
            <CaretSortIcon className="ml-2 h-4 w-4" />
          </Button>
        )
      },
      cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
    },
    {
      accessorKey: "amount",
      header: () => <div className="text-right">Amount</div>,
      cell: ({ row }) => {
        const amount = parseFloat(row.getValue("amount"))
  
        // Format the amount as a dollar amount
        const formatted = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(amount)
  
        return <div className="text-right font-medium">{formatted}</div>
      },
    },*/
    /*{
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        const exercise = row.original
  
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <DotsHorizontalIcon className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(exercise.exercise)}
              >
                Copy payment ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>View customer</DropdownMenuItem>
              <DropdownMenuItem>View payment details</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )
      },
    },*/
    {
      id: "actions",
      cell: ({ row }) => <DataTableRowActions row={row} />,
    },
  ]