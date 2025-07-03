import React from 'react'
import Parallelogram from '../components/parallelogram';

const Parallax = ({title,bgImage} : {title?:string;bgImage:string}) => {
  return (
    <section className='h-[55vh] w-full relative'>
        <div    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bgImage})`
        }}>
            <div className='w-full h-full flex flex-col items-center justify-center'>
            <h1 className='text-white text-xl md:text-2xl lg:text-3xl font-blafhyglibs tracking-[4px] lg:tracking-[7px] italic'>
                {title}
            </h1>
            <Parallelogram/>
            </div>
        </div>
    </section>
  )
}

export default Parallax