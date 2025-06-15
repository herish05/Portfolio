import Image from 'next/image'
import React from 'react'

type Props = {
    thumbnail:string,
    title:string,
    link:{
        url:string,
        label:string
    },
    description:string,
    languageIcons:string[]
}

const Project = ({thumbnail,title,link,description,languageIcons}: Props) => {
  return (
    <div className='bg-card rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex flex-col items-stretch w-full max-w-[428.4px] p-5 md:p-[18px] gap-[30px]'>
        <Image
        src={thumbnail}
        alt={`Thumbnail for ${title}`}
        width={392}
        height={230}
        className='w-full h-[230px] object-cover'
        />
        <div className='flex flex-col gap-[11px]'>
<div className='flex justify-between items-center'>
    <h3 className='font-semibold text-xl md:text-[22px]'>{title} </h3>
    <a href={link.url} className='flex px-[5px] py-[3px] gap-1 bg-[#b9b9b9] bg-opacity-[24%] rounded text-[14px]' target='_blank'>
    <span className='hidden md:block'>{link.label}</span>
    <Image src="/link_arrow.svg" alt="Link Arrow" className='block dark:hidden ' />
    <Image src="/link_arrow_dark.svg" alt="Link Arrow" className='hidden dark:block ' />

    </a>
</div>
<p className='line-clamp-3 text-sm md:text-base'>
{description}
</p>
<div className='flex flex-row gap-[11px]'>
    {languageIcons.map((icon,iconId)=>(
        <Image src={icon} alt="Language Icon" key={iconId} height={23} width={23}/>
    ))}
</div>
        </div>
    </div>
  )
}

export default Project