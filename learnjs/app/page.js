"use client"
import React from "react"
import { Calendar } from "../components/ui/calendar"
import { InputBooking } from "./form";
export default function Page() {
  const [date, setDate] = React.useState("");
  return (
  <main className="flex flex-col items-center justify-center">
  <h1 className="text-3xl mt-10 mb-10">Ledige datoer</h1>
  <Calendar
  ISOWeek
  mode="single"
  selected={date}
  onSelect={setDate} 
  className="justify-center rounded-md border shadow-sm" 
  />
  <h1 className="mt-5 mb-5">{date ? "Valgt dato: "+date.toLocaleDateString() : "Velg dato"}</h1>
  <InputBooking />
  {console.log(date)}
  </main>
  )
}