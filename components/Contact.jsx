import React from 'react'
import Email from './Email'
import Phone from './Phone'

const Contact = () => {
  return (
   <div className='mt-24 flex'>
   {/* Left */}
   <div className='mt-10 w-1/2 items-center mx-10 p-5 text-light-text'>
       <div className="flex items-start space-x-2">
            <div className="h-1 w-7 bg-[#64F4AB] mt-4"/>
            <p className="text-[#64F4AB] font-bold tracking-wide text-lg font-montserrat p-2">Contact Me</p>
       </div>
             <h1 className="text-3xl sm:text-4xl sm:tracking-wide font-montserrat font-semibold">Get In Touch With Me</h1>
             <p className="mt-6 text-left text-xl  font-montserrat font-light ">
                 The technological revolution is changing aspect of our lives, and the
                 fabric of society itself. it’s also changing the way we learn and what
                 we learn. Factual knowledge is less prized when everything you ever
                 need to know can be found on your phone. There’s no imperative to be
                 an expert Factual knowledge is less prized when everything you ever
                 need to know can be found at doing everything.
            </p>
                        {/* Email and Phone */}
      <div className='flex mt-10 space-x-14'>
           <div className='flex  space-x-9'>
              <Phone/>
        <div className='flex flex-col'>
              <h2 className="text-3xl sm:text-3xl sm:tracking-wide font-montserrat font-semibold">Phone</h2>
              <p className="text-lg  font-montserrat font-light max-w-2xl">123 456 758 88</p>
              <p className="text-lg  font-montserrat font-light max-w-2xl">568 123 478 88</p>
        </div>
        </div>  

        <div className='flex space-x-9'>
             <Email/>
        <div className='flex flex-col'>
             <h2 className="text-3xl sm:text-3xl sm:tracking-wide font-montserrat font-semibold">Email</h2>
             <p className="text-lg  font-montserrat font-light max-w-2xl">example@email.com</p>
             <p className="text-lg  font-montserrat font-light max-w-2xl">example@email.com</p>
        </div>
        </div>
      </div>
 </div>

   {/* Right */}
<div className='w-1/2 mt-10'>
     <form>
         <div className="mx-20 px-5 py-5 flex flex-wrap space-x-3">
         <input className="rounded-lg h-14 flex-grow p-2 border-[#64F4AB] border bg-[#00000066]" placeholder='Full Name' type="text" />
         <input className="rounded-lg h-14 flex-grow p-2 border-[#64F4AB] border bg-[#00000066]" placeholder='Email'  type="text" />
         <input className="rounded-lg h-72 flex-grow p-2  mt-4 border-[#64F4AB] border bg-[#00000066]" placeholder='Message'  type="text" />
         </div>
         <button className="py-4 px-14 rounded-xl mx-28 bg-gradient-to-r from-yellow-400 shadow-2xl to-yellow-600 hover:bg-gradient-to-b transition-colors text-xl transform duration-150">Send To Me</button>
   </form> 
</div>
</div>
  )
}

export default Contact