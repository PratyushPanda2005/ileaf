import React from 'react'

const WhyUs = () => {
  return (
    <section className='min-h-screen bg-black px-10 lg:px-20 pb-40'>
  <div className='flex flex-col gap-6 justify-center items-center p-20 bg-[#707070]'>
        <h1 className='text-3xl md:text-4xl font-serif italic text-white tracking-wide'>Why us</h1>
        <div className='w-4 h-2 bg-amber-300 transform skew-x-[-200deg]'/>
    </div>
    <div className='flex flex-col gap-10 mb-10 lg:mb-16'>
    <div className='h-[70vh] w-full bg-amber-400 sticky top-0 '>
        1
    </div>
    <div className='h-[70vh] w-full bg-amber-400 sticky top-0 z-[2]'>
            2
    </div>
    <div className='h-[70vh] w-full bg-amber-400 sticky top-0 z-[3]'>
            3
    </div>
    <div className='h-[70vh] w-full bg-amber-400 sticky top-0 z-[4]'>
            4
    </div>
    </div>
    <div className='w-full flex justify-center items-center'>
    <button className='uppercase p-3 px-6 lg:p-4 lg:px-8 transform -skew-x-12 text-sm lg:text-base bg-[#707070] text-amber-400'>Explore now</button>
    </div>

    </section>
  )
}

export default WhyUs