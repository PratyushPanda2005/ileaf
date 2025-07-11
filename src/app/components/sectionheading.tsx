import React from 'react'
import Parallelogram from './parallelogram'

const SectionHeading = () => {
  return (
    <div className='flex flex-col justify-center items-center p-10 md:p-20 bg-amber-400 md:bg-[#707070]'>
        <h1 className='text-xl md:text-2xl lg:text-3xl font-blafhyglibs italic text-black md:text-white tracking-[4px]'>Products Range</h1>
        <span className='hidden lg:flex'><Parallelogram/></span>
    </div>
  )
}

export default SectionHeading