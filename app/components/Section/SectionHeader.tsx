import React from 'react'

type Props = {
    plainText:string;
    hightlightText:string;
}

const SectionHeader = ({plainText,hightlightText}: Props) => {
  return (
    <h2 className='text-[22px] md:text-[35px] px-20 text-center '>
        {plainText}{" "}<span className='bg-primary px-4 rounded-[4px] text-center text-white px-2 whitespace-nowrap'>{hightlightText}</span>
    </h2>
  )
}

export default SectionHeader