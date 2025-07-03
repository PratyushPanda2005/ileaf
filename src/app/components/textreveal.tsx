import React from 'react'

const TextReveal = () => {
  return (
    <section className='p-20 w-full relative bg-[#707070] '>
    <div    className=" bg-cover bg-center bg-no-repeat flex justify-center items-center">
        <div className='w-full h-full flex items-center justify-center'>
        <p className='text-black font-[300] italic text-base leading-7 tracking-[1px] text-center font-raleway '>
        In today’s fast-paced world, homes are often left unattended due to hectic work schedules and
        <br/>
        constant travel. This has led to a growing need for heightened security at home. At i-Leaf, we bring you
        <br/>
        the best quality steel doors for homes equipped with modern smart locks that blend safety with
        <br/>
        sophistication. Whether you’re seeking fireproof doors for home safety, termite-proof doors, or beautiful
        <br/>
        steel doors that elevate your interiors, our wide range of products is designed to meet your every need.
        <br/>
        From security steel doors and steel windows for living rooms, kitchens, and bathrooms, we ensure the
        <br/>
        perfect solution for every space.
        </p>
        </div>
    </div>
    <div className='flex w-full justify-center items-center mt-10'>
        <div className='w-4 h-2 bg-amber-300 transform skew-x-[-200deg]'/>
    </div>
</section>
  )
}

export default TextReveal