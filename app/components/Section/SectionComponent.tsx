import React from 'react'

type Props = React.PropsWithChildren<{id:string}>

const SectionComponent = ({children,id}: Props) => {
  return (
    <section id={id} className='w-full relative flex justify-center z-30'>{children}</section>
  )
}
export default SectionComponent;