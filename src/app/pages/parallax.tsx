import React from 'react'

const Parallax = ({title,bgImage} : {title?:string;bgImage:string}) => {
  return (
    <section className='h-[55vh] w-full relative'>
        <div    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bgImage})`
        }}>
            <div className='w-full h-full flex items-center justify-center'>
            <h1 className='text-white text-3xl md:text-4xl font-serif italic'>
                {title}
            </h1>
            </div>
        </div>
    </section>
  )
}

export default Parallax