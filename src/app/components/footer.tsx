import React from 'react'
import Logo from '../../../public/assets/logos/8f93e9b7801587928403b047a3fddf9487d7866f.png'
import Artherate from '../../../public/assets/logos/artherate.svg'
import Image from 'next/image'
const Footer = () => {
  return (
    <footer className='lg:px-20 bg-[#e4e4e4]'>
        <div className='bg-[#e4e4e4] p-10 flex flex-col gap-10 lg:flex-row justify-between items-center'>
            <Image src={Logo} alt='' className='h-16 w-auto'/>
            <div className='flex flex-col lg:flex-row gap-2 items-center justify-center'>
            <Image src={Artherate} alt='' className='w-8'/>
            <h1 className='font-raleway'>info@ileafdoors.com</h1>
            </div>  
        </div>
        <div className='bg-black p-20 flex flex-col items-center justify-center'>
            <div className='flex flex-col gap-10 lg:gap-0 lg:flex-row justify-between w-full'>
                <div className='lg:w-1/3 text-center lg:text-left font-raleway'>
                    <h1 className='uppercase text-[#707070] mb-4 italic'>Quick Links</h1>
                    <ul className='text-[#707070]  italic space-y-1'>
                        <li>- Home</li>
                        <li>- About Us</li>
                        <li>- Products</li>
                        <li>- Features</li>
                        <li>- Gallery</li>
                        <li>- Testimonials</li>
                        <li>- Enquiry</li>
                        <li>- Contact Us</li>
                    </ul>
                </div>
                <div className='lg:w-1/3 text-center lg:text-left font-raleway'>
                    <h1 className='uppercase text-[#707070]  mb-4 italic'>products</h1>
                    <ul className='text-[#707070] italic space-y-1'>
                        <li>- Luxury Doors</li>
                        <li>- GL Doors</li>
                        <li>- Gi Doors</li>
                        <li>- Windows</li>
                        <li>- Fibre Doors</li>
                        <li>- WPC Doors</li>
                    </ul>
                </div>
                <div className='lg:w-1/3 text-center lg:text-left font-raleway'>
                    <h1 className='uppercase text-[#707070] mb-4'>address</h1>
                    <ul className='text-[#707070] italic space-y-1'>
                        <p>34/1874A, Muttepadathu Building Padmasree Lane, Mamangalam, Kochi, Kerala, India - 682025</p>
                        <h2>Tel : +91 484 4042626</h2>
                        <h2>e-Mail : ileafdoor@gmail.com</h2>
                    </ul>
                </div>
            </div>
            <div className='mt-16 flex flex-col lg:flex-row gap-10 lg:gap-0 text-center lg:text-left justify-between w-full font-raleway'>
                <h1 className='text-[#707070]'>Copyright © 2025 i-LEAF Doors & Windows</h1>
                <h1 className='text-[#707070]'>Privacy Policy | Terms of Service | Terms and Conditions</h1>
            </div>
        </div>
    </footer>
  )
}

export default Footer