import React from 'react'
import projects from '@/data/projects.json';
import SectionComponent from '../Section/SectionComponent';
import SectionHeader from '../Section/SectionHeader';
import Project from './Project';
import Image from 'next/image';
const Projects = () => {
  return (
    <SectionComponent id="Projects">
        <div className='w-full flex flex-col  items-center gap-10 md:gap-[50px] mx-6 md:mx-[64px]'>
<SectionHeader plainText='😎 Some of my' hightlightText='Best Works'/>
<div className='lg:w-full grid grid-cols-1 lg:grid-cols-2 gap-10'>
{
    projects.map((project,id)=>(
        <Project key={id} 
        thumbnail={project.thumbnail}
        title={project.title}
        link={project.link}
        description={project.description}
        languageIcons={project.languageIcons}
        />
    ))
}
</div>
        </div>
        <Image src="/projects_highlight.svg" alt="project highlight "
        width={558}
        height={558}
        className='absolute top-1/2 left-1/2 hidden md:block -translate-x-1/2 -translate-y-1/2 -z-10'
        />
        <Image src="/projects_highlight_mobile.svg" alt="Mobile project highlight "
        width={321}
        height={530}
        className='absolute top-1/2 left-1/2  md:hidden -translate-x-1/2 -translate-y-1/2 -z-10'
        />
    </SectionComponent>
  )
}
export default Projects;