'use client'
import React from 'react'
import Hero from './Hero/Hero'
import Skills from './Skills/Skills'
import Projects from './Projects/Projects'
import Contact from './Contact'
import SocialLinks from './SocialLinks'
import Footer from './Footer/Footer'
type Props={
    
    setActiveSession:(val:string)=>void
}
const Section = ({setActiveSession}:Props) => {
 
  return (
    <main className='flex flex-col gap-[142px] w-full md:max-w-screen-lg pt-[236px]  md:pt-60 mx-auto'>
        <Hero/>
        <Skills/>
        <Projects/>
        <Contact/>
        <SocialLinks/>
       <div className='mx-[22px] md:mx-[116px]'>
         <Footer  setActiveSession={setActiveSession}/>
       </div>
    </main>
  )
}

export default Section