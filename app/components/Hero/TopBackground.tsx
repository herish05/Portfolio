import Image from 'next/image'
import React from 'react'
import image from '@/public/top_bg_light.svg'


const TopBackground = () => {
  return (
    <>
    <div className='absolute w-full max-w-[360px] md:max-w-screen-lg h-[285px] md:h-[656px] top-[188px] md:top-11 left-1/2 -translate-x-1/2 md:overflow-x-hidden z-10'>
        <div className='w-full h-full relative'>
            <div className='flex items-center justify-center
    rounded-full w-11 h-11 md:w-14 md:h-14 bg-[#f4ebff] bg-opacity-[12%] absolute -top-2.5 left-[171px] md:top-28 md:left-72'>
                <Image src="/rocket_icon.svg"
                alt="Rocket icon"
                height={23}
                width={23}
                />
            </div>
            <div className='flex items-center justify-center
    rounded-full w-11 h-11 md:w-14 md:h-14 bg-[#f4ebff] bg-opacity-[12%] absolute top-[230px] left-1  md:top-64 md:left-0'>
                <Image src="/bracket_icon.svg"
                alt="Bracket icon"
                height={23}
                width={23}
                />
            </div>
            <div className='flex items-center justify-center
    rounded-full w-11 h-11 md:w-14 md:h-14 bg-[#f4ebff] bg-opacity-[12%] absolute top-60 left-[350px]  md:top-[570px] md:left-100'>
                <Image src="/github_icon.svg"
                alt="Github icon"
                height={23}
                width={23}
                />
            </div>
            <div className='hidden md:flex items-center justify-center
    rounded-full w-11 h-11 md:w-14 md:h-14 bg-[#f4ebff] bg-opacity-[12%] absolute   md:top-[592px] md:left-[608px]'>
                <Image src="/electricity_icon.svg"
                alt="Electricity icon"
                height={23}
                width={23}
                />
            </div>
            <div className='hidden md:flex items-center justify-center
    rounded-full w-11 h-11 md:w-14 md:h-14 bg-[#f4ebff] bg-opacity-[12%] absolute   md:top-[158px] md:left-[606px]'>
                <Image src="/merge_icon.svg"
                alt="Merge icon"
                height={23}
                width={23}
                />
            </div>
            <div className='hidden md:flex items-center justify-center
    rounded-full w-11 h-11 md:w-14 md:h-14 bg-[#f4ebff] bg-opacity-[12%] absolute   md:top-[368px] md:left-[965px]'>
                <Image src="/stack_icon.svg"
                alt="Stack icon"
                height={23}
                width={23}
                />
            </div>
        </div>
    </div>
    <img src="/top_highlight.svg" alt="top dark mode background" width={429} height={465} className='absolute top-[-229px] hidden dark:md:block left-1/2 -translate-x-1/2'/>
     <img 
     src="/top_highlight.svg" 
     alt="top dark mode background" 
     width={809} height={877}
      className='absolute top-[-515px] hidden dark:block dark:md:hidden left-1/2 -translate-x-1/2'/>
     <div 
     className="absolute top-0 w-full h-[795px] bg-repeat-x bg-[url('/top_bg_light.svg')] bg-[auto-auto] hidden  dark:hidden md:block"/>
   <div 
     className="absolute top-0 w-full h-[600px] bg-repeat-x bg-[url('/top_bg_mobile_light.svg')] bg-[auto-auto]   dark:hidden md:hidden"/>
     <div 
     className="absolute top-0 w-full h-[795px] bg-repeat-x bg-[url('/top_bg_dark.svg')] hidden  md:dark:block"/>
   <div 
     className="absolute top-0 w-full h-[600px] bg-repeat-x bg-[url('/top_bg_mobile_dark.svg')] dark:block dark:md:hidden"/>
    </>
    
  )
}

export default TopBackground