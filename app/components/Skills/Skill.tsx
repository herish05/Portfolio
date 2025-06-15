import React from 'react'
import { IconType } from 'react-icons'
type Props = {
    icon:IconType;
    name:string;
    color:string;
}

const Skill = ({icon:Icon,name,color}: Props) => {
  return (
    <div className='relative flex gap-2 p-2 border-primary border rounded-lg h-[46px]'>
<Icon size={23} style={{color:color}}/>
<p className='text-lg'>{name}</p>
    </div>
  )
}

export default Skill