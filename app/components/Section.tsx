'use client'
import React, { useState } from 'react'
import Hero from './Hero/Hero'
import Skill from './Skills/Skill'
import Skills from './Skills/Skills'
import Projects from './Projects/Projects'
import Contact from './Contact'
import SocialLinks from './SocialLinks'
import Footer from './Footer/Footer'
type Props={
    activeSession:string,
    setActiveSession:(val:string)=>void
}
const Section = ({activeSession,setActiveSession}:Props) => {
 
  return (
    <main className='flex flex-col gap-[142px] w-full md:max-w-screen-lg pt-[236px]  md:pt-60 mx-auto'>
        <Hero/>
        <Skills/>
        <Projects/>
        <Contact/>
        <SocialLinks/>
       <div className='mx-[22px] md:mx-[116px]'>
         <Footer activeSession={activeSession} setActiveSession={setActiveSession}/>
       </div>
    </main>
  )
}

export default Section