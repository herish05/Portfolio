'use client'
import { useState } from "react";
import TopBackground from "./components/Hero/TopBackground";
import Navbar from "./components/Navbar";
import Section from "./components/Section";

export default function Home() {
   const [activeSession,setActiveSession]=useState("home");
  return (
    <div className="relative overflow-clip" id="home">
      <Section  setActiveSession={setActiveSession}/>
      <Navbar activeSession={activeSession} setActiveSession={setActiveSession}/>
      <TopBackground/>
      </div>
  );
}
