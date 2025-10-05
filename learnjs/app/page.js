"use client"
import React from "react"
import { Calendar } from "../components/ui/calendar"
export default function Page() {
  const [date, setDate] = React.useState("");
  return (
  <>
  <h1 className=" text-3xl justify-self-center mb-5">Ledige datoer</h1>
  <Calendar
  ISOWeek
  mode="single"
  selected={date}
  onSelect={setDate} 
  className="rounded-md border shadow-sm justify-self-center" 
  />
  <h1 className="justify-self-center mt-5">Valgt dato {date ? date.toLocaleDateString() : ""}</h1>
  {console.log(date)}
  </>
  )
}