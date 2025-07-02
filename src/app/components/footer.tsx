import React from 'react'
import Logo from '../../../public/assets/logos/8f93e9b7801587928403b047a3fddf9487d7866f.png'
import Artherate from '../../../public/assets/logos/artherate.svg'
import Whatsapp from '../../../public/assets/logos/whatsapp.svg'
import Image from 'next/image'
const Footer = () => {
  return (
    <footer className='lg:px-20'>
        <div className='bg-[#DBDBDB] p-10 flex flex-col gap-10 lg:flex-row justify-between items-center'>
            <Image src={Logo} alt='' className='h-20 w-auto'/>
            <div className='flex flex-col lg:flex-row gap-6 items-center justify-center'>
            <Image src={Artherate} alt='' className=''/>
            <h1>info@ileafdoors.com</h1>
            </div>  
           <div className='flex flex-col lg:flex-row gap-6 items-center justify-center'>
            <Image src={Whatsapp} alt='' className=''/> 
                <h1> +91 91427 78877</h1>
           </div>
        </div>
        <div className='bg-black p-20 flex flex-col items-center justify-center'>
            <div className='flex flex-col gap-10 lg:gap-0 lg:flex-row justify-between w-full'>
                <div className='lg:w-1/3 text-center lg:text-left'>
                    <h1 className='uppercase text-white mb-4 italic text-lg'>Quick Links</h1>
                    <ul className='text-white italic space-y-1 text-lg'>
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
                <div className='lg:w-1/3 text-center lg:text-left'>
                    <h1 className='uppercase text-white mb-4 text-lg italic'>products</h1>
                    <ul className='text-white italic space-y-1 text-lg'>
                        <li>- Luxury Doors</li>
                        <li>- GL Doors</li>
                        <li>- Gi Doors</li>
                        <li>- Windows</li>
                        <li>- Fibre Doors</li>
                        <li>- WPC Doors</li>
                    </ul>
                </div>
                <div className='lg:w-1/3 text-center lg:text-left'>
                    <h1 className='uppercase text-white mb-4'>address</h1>
                    <ul className='text-white italic space-y-1'>
                        <p>34/1874A, Muttepadathu Building Padmasree Lane, Mamangalam, Kochi, Kerala, India - 682025</p>
                        <h2>Tel : +91 484 4042626</h2>
                        <h2>Mob : +91 91427 78877</h2>
                        <h2>e-Mail : ileafdoor@gmail.com</h2>
                    </ul>
                </div>
            </div>
            <div className='mt-16 flex flex-col lg:flex-row gap-10 lg:gap-0 text-center lg:text-left justify-between w-full'>
                <h1 className='text-white'>Copyright © 2025 i-LEAF Doors & Windows</h1>
                <h1 className='text-white'>Privacy Policy | Terms of Service | Terms and Conditions</h1>
            </div>
        </div>
    </footer>
  )
}

export default Footer