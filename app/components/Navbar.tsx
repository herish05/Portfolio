"use client"
import React, { useCallback, useEffect, useState } from 'react'
import cn from 'classnames'
type Props={
    activeSession:string,
    setActiveSession:(val:string)=>void
}
const Navbar = ({activeSession,setActiveSession}:Props) => {
    const [isOpen,setIsOpen]=useState(false);
    // const [activeSession,setActiveSession]=useState("home");
    useEffect(()=>{
setActiveSession("home")
    },[])
    const scrollToSection=useCallback((sectionId:string)=>{
        const section=document.getElementById(sectionId);
        if(section){
            section.scrollIntoView({
                behavior:"smooth",
            })
        }
    },[])
  return (
    <div className='fixed top-12 mx-auto right-6 flex flex-col gap-2.5 items-end z-50 md:right-auto md:left-1/2 md:-translate-x-1/2'>
       <button className='bg-background card-shadow p-3 md:hidden rounded' onClick={(prev)=>setIsOpen(!isOpen)}>
        <img className="hidden dark:block" src="/menu_icon_dark.svg" alt="menu icon"/>
       </button>
       <nav className={cn("bg-background md:block rounded p-3 card-shadow duration-300 ease-in-out",{
        "opacity-100":isOpen,
        "opacity-0 md:opacity-100":!isOpen
       })}>
        <ul className='flex flex-col items-center gap-9 text-lg font-normal md:flex-row'>
            <li className='cursor-pointer'>
                <div className={cn("rounded p-1 duration-300 ease-in-out",{
                    "bg-primary text-white ":activeSession==="home",
                })}
                onClick={()=>{
                    setActiveSession("home") 
                    scrollToSection("home")
                    setIsOpen(false)
                }
            }
                    
                >
                    Home
                </div>
            </li>
             <li className='cursor-pointer'>
                <div className={cn("rounded p-1 duration-300 ease-in-out",{
                    "bg-primary text-white ":activeSession==="about",
                })}
                onClick={()=>{
                    setActiveSession("about") 
                    scrollToSection("home")
                    setIsOpen(false)
                }
            }
                    
                >
                    About
                </div>
            </li>
             <li className='cursor-pointer'>
                <div className={cn("rounded p-1 duration-300 ease-in-out",{
                    "bg-primary text-white ":activeSession==="Projects",
                })}
                onClick={()=>{
                    setActiveSession("Projects") 
                    scrollToSection("Projects")
                    setIsOpen(false)
                }
            }
                    
                >
                    Projects
                </div>
            </li>
             <li className='cursor-pointer'>
                <div className={cn("rounded p-1 duration-300 ease-in-out",{
                    "bg-primary text-white ":activeSession==="Skills",
                })}
                onClick={()=>{
                    setActiveSession("Skills") 
                    scrollToSection("Skills")
                    setIsOpen(false)
                }
            }
                    
                >
                    Skills
                </div>
            </li>
             <li className='cursor-pointer'>
                <div className={cn("rounded p-1 duration-300 ease-in-out",{
                    "bg-primary text-white ":activeSession==="Contact",
                })}
                onClick={()=>{
                    setActiveSession("Contact") 
                    scrollToSection("Contact")
                    setIsOpen(false)
                }
            }
                    
                >
                    Contact
                </div>
            </li>
        </ul>
       </nav>
        </div>
  )
}

export default Navbar