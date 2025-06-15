import Image from 'next/image'
import React from 'react'
const Hero = () => {
  return (
    <section className='relative flex flex-row items-center z-20 mx-auto md:gap-[37px] md:mx-10'>
        <div 
        className='flex flex-col gap-[13px] items-center md:gap-[34px] md:items-start md:mx-[58px] '>
            <h1 className='text-2xl text-center font-semibold block md:text-[40px] md:text-left md:inline'>
            <span className='-ml-3'>👋</span>
            Hello I'm Herish Kumar,I'm a {" "}<span className='block text-[27px] bg-primary p-1.5 rounded-[4px] text-white mt-5 md:text-[45px] md:mt-6 md:inline'>Full Stack Developer</span>
            </h1>
            <p className='text-center text-sm mx-6 md:text-[22px] md:text-left md:mx-0'>I'm passionate about building scalable and high performance websites that deliver real impact.With strong problem-solving skills and a strong foundation in Data structures and Algorithms.
            </p>
            <a href="mailto:herishgarg@gmail.com" className='self-center bg-primary text-white p-2.5 rounded
            flex gap-2.5 items-center text-sm md:self-start md:text-xl md:leading-6'>
                Let's Connect{" "}
                <img src="/arrow_right_icon.svg" alt="Arrow right icon"/>
            </a>
            
        </div>
        <div className=''>
                <Image
                src="/profile_light_purple.png"
                alt="Light purple reactangle"
                width={372}
                height={430}
                className='hidden md:block w-[372px] h-[430px] absolute right-0 -z-10'
                />
                 <Image
                src="/profile_dark_purple.png"
                alt="Dark purple reactangle"
                width={372}
                height={430}
                className='hidden md:block w-[372px] h-[430px] absolute right-0 -z-10'
                />
                <Image
                src="/hk.jpg"
                alt="Profile Picture"
                width={357}
                height={417}
                className='hidden md:block min-w-[357px] h-[417px] z-10 mr-[7.7px] my-[6.5px] object-cover'
                />
            </div>
    </section>
  )
}

export default Hero