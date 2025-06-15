import React from 'react'

import SectionComponent from '../Section/SectionComponent';
import SectionHeader from '../Section/SectionHeader';
import Skill from './Skill';
import Image from 'next/image';
import {SiJavascript,SiReact,SiCss3,SiHtml5,SiNextdotjs,SiNodedotjs,SiPython,SiTailwindcss,SiCplusplus,SiMongodb,SiMysql,SiLinux} from 'react-icons/si'
const skills=[
    
    {
      
        name:"C++",
        icon:SiCplusplus,
         color: '#00599C',
    },
     {
        name:"Python++",
        icon:SiPython,
         color: '#3776AB',
    },
     {
        name:"HTML",
        icon:SiHtml5,
        color: '#FCC624',
    },
     {
       name:"CSS",
        icon:SiCss3,
        color: '#FCC624',
    },
     {
       name:"TailwindCSS",
        icon:SiTailwindcss,
        color: '#FCC624',
    },
     {
        name:"JavaScript",
        icon:SiJavascript,
        color: '#F7DF1E',
    },
     {
       name:"ReactJS",
        icon:SiReact,
         color: '#61DAFB',
    },
     {
       name:"NextJS",
        icon:SiNextdotjs,
        color: '#ffffff',
    },
     {
        name:"NodeJS",
        icon:SiNodedotjs,
         color: '#339933',
    },
     {
       name:"Linux",
        icon:SiLinux,
        color: '#FCC624',
    },
     {
        name:"MongoDB",
        icon:SiMongodb,
        color: '#47A248',
    },
     {
        name:"My-Sql",
        icon:SiMysql,
          color: '#336791',
    }
]
const Skills = () => {
  return (
   <SectionComponent id="Skills">
    {/*section-contents:w-full flex flex-col  items-center gap-10 md:gap-[50px]  */}
    <div className='w-full flex flex-col  items-center gap-10 md:gap-[50px] mx-[22px] md:mx-[116px]'>
        <SectionHeader plainText='💻This is my' hightlightText='Tech Stack'/>
        <div className='bg-card rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-full px-[33px] py-[27px] flex flex-wrap flex-col md:flex-row justify-center items-center gap-[19px] md:gap-[33px]'> 
     <div className='relative flex gap-2 p-2 border-primary border rounded-lg h-[46px]'>
<Image src="/java_icon.png" alt="java icon"/>
<p className='text-lg'>Java</p>
    </div>
            {
                skills.map((skil,id)=>(
                    <Skill key={id} 
                    icon={skil.icon}
                    name={skil.name}
                    color={skil.color} />
                ))
            }
        </div>
    </div>
    <>
    <Image src="/tech_stack_grid_dark.svg"
    alt="Background grid"
    width={569}
    height={373}
    className='hidden dark:md:block -z-10 absolute -left-[135px] -top-[39px]'
    />
     <Image src="/tech_stack_grid.svg"
    alt="Background grid"
    width={569}
    height={373}
    className='hidden dark:hidden md:block -z-10 absolute -left-[125px] -top-[39px]'
    />
    </>
   </SectionComponent>
  )
}

export default Skills