"use client"

import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
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
import { DataTableRowActions } from "./data-table-row-actions"
import { NotesButton } from "./notes-button"
  
  export type Exercise = {
    day: string,              // week of the program
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
        let selected = row.getIsSelected();
        if (selected) {
          return (
            <div className="flex justify-center items-center h-full">
              <input type="text" id="warmup_sets_input" defaultValue={row.original.warmup_sets} className="rounded-sm w-11 text-center"/>
            </div>
          )
        }
        return <div className="text-center">{row.original.warmup_sets}</div>
      }
    },
    {
      accessorKey: "working_sets",
      header: () => <div className="text-center">Working Sets</div>,
      cell: ({row}) => {
        let selected = row.getIsSelected();
        if (selected) {
          return (
            <div className="flex justify-center items-center h-full">
              <input type="text" id="working_sets_input" defaultValue={row.original.working_sets} className="rounded-sm w-11 text-center"/>
            </div>
          )
        }
        return <div className="text-center">{row.original.working_sets}</div>
      }
    },
    {
      accessorKey: "reps",
      header: () => <div className="text-center">Reps</div>,
      cell: ({row}) => {
        let selected = row.getIsSelected();
        if (selected) {
          return (
            <div className="flex justify-center items-center h-full">
              <input type="text" id="reps_input" defaultValue={row.original.reps} className="rounded-sm w-11 text-center"/>
            </div>
          )
        }
        return <div className="text-center">{row.original.reps}</div>
      }
    },
    {
      accessorKey: "load",
      header: () => <div className="text-center">Load (lbs)</div>,
      cell: ({row}) => {
        let selected = row.getIsSelected();
        if (selected) {
          return (
            <div className="flex justify-center items-center h-full">
              <input type="text" id="load_input" defaultValue={row.original.load} className="rounded-sm w-11 text-center"/>
            </div>
          )
        }
        return <div className="text-center">{row.original.load}</div>
      }
    },
    {
      accessorKey: "percent",
      header: () => <div className="text-center">% 1RM</div>,
      cell: ({row}) => {
        let selected = row.getIsSelected();
        const formatted = row.original.percent;//.toFixed(2)+"%"
        if (selected) {
          return (
            <div className="flex justify-center items-center h-full">
              <input type="text" id="percent_input" defaultValue={formatted} className="rounded-sm w-11 text-center"/>
            </div>
          )
        }
        return <div className="text-center">{formatted}</div>
      }
    },
    {
      accessorKey: "rpe",
      header: () => <div className="text-center">RPE</div>,
      cell: ({row}) => {
        let selected = row.getIsSelected();
        if (selected) {
          return (
            <div className="flex justify-center items-center h-full">
              <input type="text" id="rpe_input" defaultValue={row.original.rpe} className="rounded-sm w-11 text-center"/>
            </div>
          )
        }
        return <div className="text-center">{row.original.rpe}</div>
      }
    },
    {
      accessorKey: "rest_time",
      header: () => <div className="text-center">Rest Time</div>,
      cell: ({row}) => {
        let selected = row.getIsSelected();
        if (selected) {
          return (
            <div className="flex justify-center items-center h-full">
              <input type="text" id="rest_time_input" defaultValue={row.original.rest_time} className="rounded-sm w-11 text-center"/>
            </div>
          )
        }
        return <div className="text-center">{row.original.rest_time}</div>
      }
    },
    {
      accessorKey: "actual",
      header: () => <div className="text-center">Actual</div>,
      cell: ({row}) => {
        let selected = row.getIsSelected();
        if (selected) {
          return (
            <div className="flex justify-center items-center h-full">
              <input type="text" id="actual_input" defaultValue={row.original.actual} className="rounded-sm w-11 text-center"/>
            </div>
          )
        }
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
    {
      id: "actions",
      cell: ({ table, column, row }) => <DataTableRowActions table={table} column={column} row={row} />,
    },
  ]