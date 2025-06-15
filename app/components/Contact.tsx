'use client'
import React, { useState } from 'react'
import SectionComponent from './Section/SectionComponent'
import SectionHeader from './Section/SectionHeader'
import {Mail,Phone,MessageSquare,Video} from 'lucide-react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [data,setData]=useState({
    name:"",
    email:"",
    message:""
  })
  const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
   emailjs.send(
    'service_7euj70m',
    'template_nlrj4qn',
    data,
    'VvjWXYIYypBg8nDet'
   ).then((res)=>{
    console.log("Email send successfully ",res.text);
setData({
      name:"",
      email:"",
      message:""
    })
   }).catch((err)=>{
    console.log(err)
   })
    
  }
  return (
<SectionComponent id="Contact">
    
    <div className='w-full flex flex-col  items-center gap-10 md:gap-[50px] mx-[22px] md:mx-[116px]'>
        <SectionHeader plainText="Let's Create " hightlightText='Together' />
        <div className='flex flex-col md:flex-row gap-10 items-start w-full' >
            <div className='w-full md:w-2/3 border  border-[#1E1E1E] rounded-lg p-2'>
            <form className='w-full flex flex-col p-2 gap-5 ' onSubmit={handleSubmit}>
                <div className='flex flex-col mt-1 gap-1'>
                <label htmlFor='name'>Your Name</label>
                <input id="name"className='border-1 border-[#352d2d] rounded-lg py-3 pl-2 placeholder-gray-500' 
                placeholder="Herish kumar" 
                required
                value={data.name}
                onChange={(e)=>setData({...data,name:e.target.value})}
                />
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor='email'>Your Email</label>
                <input id="email"className='border-1 border-[#352d2d] rounded-lg py-3 pl-2 placeholder-gray-500 ' 
                placeholder='example@gmail.com'
                value={data.email}
                onChange={(e)=>setData({...data,email:e.target.value})}
                 required/>
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor='message'>Your Message</label>
                <textarea id="email"className='border-1 border-[#352d2d] rounded-lg py-3 pl-2 placeholder-gray-500 ' placeholder="Hello,I'd like to talk about..."
                rows={5}
                value={data.message}
                onChange={(e)=>setData({...data,message:e.target.value})}
                required
                />
                </div>
                <button type="submit" className='border border-[#352d2d] hover:bg-[#474747] bg-[#424243] py-3 rounded-lg text-lg font-semibold
                ' >Send Message</button>
            </form>
            </div>
            <div className=' invisible md:visible  relative w-full md:w-1/3 flex justify-center items-center h-[400px]'>
             <div className='relative w-40 h-32 rounded-lg animate border border-gray-500 flex justify-center items-center text-white/5 backdrop-blur-md'>
            <Mail className='md:w-10 h-10 text-white'/>
             </div>
             <div className="absolute top-10 left-[45%] animate-float1">
        <div className="p-2 bg-white/10 border border-gray-500 rounded-md">
          <MessageSquare className="w-6 h-6 text-white" />
        </div>
      </div>
       <div className="absolute top-[35%] right-[20%] animate-float2">
        <div className="p-2 bg-white/10 border border-gray-500 rounded-md">
          <Phone className="w-6 h-6 text-white" />
        </div>
      </div>
      <div className="absolute bottom-[15%] right-[25%] animate-float3">
        <div className="p-2 bg-white/10 border border-gray-500 rounded-md">
          <Video className="w-6 h-6 text-white" />
        </div>
      </div>
            </div>
        </div>
    </div>
    {/* Social links */}
    
</SectionComponent>

  )
}

export default Contact