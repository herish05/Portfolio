'use client'
import React, { useCallback } from 'react'
type Props={
    
    setActiveSession:(val:string)=>void
}
const Footer = ({setActiveSession}:Props) => {
    const scrollToView=useCallback((id:string)=>{
        const section=document.getElementById(id);
        if(section){
            section.scrollIntoView({
                behavior:'smooth'
            })
        }
    },[])
  return (
   <section className=' w-screen relative -ml-[50vw] -mr-[50vw] left-1/2 right-1/2 border-t-2 border-neutral-600/50 p-10'>
    <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-24 md:gap-10 mt-36 justify-center'>
        <div className=' flex flex-col md:pl-36 gap-3 md:mb-40'>
        <span className='text-4xl font-light text-neutral-100 tracking-[0.2rem]'>HK</span>
        <p className='text-neutral-400 text-sm leading-relaxed'>Full Stack Developer passionate about building intuitive, scalable, and impactful web applications that solve real-world problems.</p>
        <div className='flex space-x-3 mt-3 '>
            <a 
            className='h-8 w-8  rounded-lg flex justify-center items-center hover:text-neutral-200 text-neutral-400 hover:border-gray-300 transition-all duration-300'
             href='https://github.com/herish05' target='_blank'>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
            </a>
            {/* Linked In */}
            <a className='h-8 w-8 rounded-lg flex justify-center items-center hover:text-neutral-200 text-neutral-400 hover:border-gray-300 transition-all duration-300' href="https://www.linkedin.com/in/herish-kumar-0094b428b/" target='_blank'>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
            </a>
            {/* twitter */}
            <a className='h-8 w-8 rounded-lg flex justify-center items-center hover:text-neutral-200 text-neutral-400 hover:border-gray-300 transition-all duration-300' href="https://x.com/HerishGarg" target="_blank">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
            </a>
            {/* Envelope */}
              <a className='h-8 w-8 rounded-lg flex justify-center items-center hover:text-neutral-500 text-neutral-400 hover:border-gray-300 transition-all duration-300' href="https://mail.google.com/mail/u/0/#inbox" target="_blank">
                <svg className="w-5 h-5 text-neutral-400 group-hover:text-neutral-200 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
            </a>
        </div>


        </div>
        <div className='flex flex-col md:pl-12 md:mb-40'>
            <h3 className='text-sm text-neutral-300 tracking-[0.2rem] font-light uppercase'>Navigation</h3>
            <ul className='space-y-3 mt-7'> 
                <li className=''>
                    <a
                    
                   onClick={(e)=>{
                        e.preventDefault();
                        scrollToView('home')
                    setActiveSession("home")
                    }}
                    className="group flex items-center gap-2 text-neutral-400 hover:text-neutral-200 
                             transition-colors duration-300"
                  >
                    <span className="h-px w-4 bg-neutral-700 group-hover:w-6 group-hover:bg-neutral-400 
                                   transition-all duration-300" />
                    <span className="text-sm">Home</span>
                  </a>
                </li>
                <li>
                    <a
                    
                   onClick={(e)=>{
                        e.preventDefault();
                        scrollToView('Projects')
                    setActiveSession("Projects")
                    }}
                    className="group flex items-center gap-2 text-neutral-400 hover:text-neutral-200 
                             transition-colors duration-300"
                  >
                    <span className="h-px w-4 bg-neutral-700 group-hover:w-6 group-hover:bg-neutral-400 
                                   transition-all duration-300" />
                    <span className="text-sm">Projects</span>
                  </a>
                </li>
                <li>
                    <a
                    
                    onClick={(e)=>{
                        e.preventDefault();
                        scrollToView('Skills')
                    setActiveSession("Skills")
                    }}
                    className="group flex items-center gap-2 text-neutral-400 hover:text-neutral-200 
                             transition-colors duration-300"
                  >
                    <span className="h-px w-4 bg-neutral-700 group-hover:w-6 group-hover:bg-neutral-400 
                                   transition-all duration-300" />
                    <span className="text-sm">Skills</span>
                  </a>
                </li>
                <li>
                    <a
                    
                   onClick={(e)=>{
                        e.preventDefault();
                        scrollToView('Contact')
                    setActiveSession("Contact")
                    
                    }}
                    className="group flex items-center gap-2 text-neutral-400 hover:text-neutral-200 
                             transition-colors duration-300"
                  >
                    <span className="h-px w-4 bg-neutral-700 group-hover:w-6 group-hover:bg-neutral-400 
                                   transition-all duration-300" />
                    <span className="text-sm">Contact</span>
                  </a>
                </li>
            </ul>
        </div>
        <div className=' flex flex-col md:mb-40'>
            <h3 className='text-lg text-neutral-300 uppercase tracking-[0.2rem] font-lght'>Let&apos;s Connect </h3>
       <div className='space-y-4'>
         <p className='text-sm text-neutral-400 leading-relaxed' >Feel free to reach out for collaborations or just a friendly hello</p>
         <a href="mailto:herishgarg@gmail.com" className='inline-flex items-center gap-2 text-neutral-400 hover:text-neutral-200 transition-colors duration-300 group'>
            <span className='text-sm'>herishgarg@gmail.com</span>
            <span className='h-px w-4 group-hover:w-6 bg-neutral-700 group-hover:bg-neutral-400 transition-all duration-300'></span>
         </a>
       </div>
        </div>

    </div>
    <div className='flex justify-between mt-5 md:mt-0 mb-10'>
        <div className='md:pl-36 text-neutral-500 text-sm'>
            © {new Date().getFullYear()} Herish Kumar <span className='text-neutral-700'>|</span> All rights reserved. </div>
        <div className='md:pr-48 flex space-x-6 text-neutral-500 text-sm '>
                    <div className='hover:text-neutral-300 relative group transition-colors duration-300'>Privacy Policy<span className='absolute w-0 left-0 -bottom-1 h-px bg-neutral-400 group-hover:w-full transition-all duration-300'></span></div>
                    <div className='hover:text-neutral-300 relative group transition-colors duration-300 '>Terms of service<span className='absolute w-0 left-0 -bottom-1 h-px bg-neutral-400 group-hover:w-full transition-all duration-300'></span></div>
        </div>
    </div>
   </section>
  )
}

export default Footer