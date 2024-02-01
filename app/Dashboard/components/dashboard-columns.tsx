"use client"

import { ColumnDef } from "@tanstack/react-table"
  
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
  ]