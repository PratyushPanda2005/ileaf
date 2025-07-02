import React from 'react'

const Footer = () => {
  return (
    <footer className='lg:px-20 px-10 mt-10'>
        <div className='bg-black p-20 flex flex-col items-center justify-center'>
            <div className='flex justify-between w-full'>
                <div className='w-1/3'>
                    <h1 className='uppercase text-neutral-500 mb-4'>Quick Links</h1>
                    <ul className='text-neutral-500 italic space-y-1'>
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
                <div className='w-1/3'>
                    <h1 className='uppercase text-neutral-500 mb-4'>products</h1>
                    <ul className='text-neutral-500 italic space-y-1'>
                        <li>- Luxury Doors</li>
                        <li>- GL Doors</li>
                        <li>- Gi Doors</li>
                        <li>- Windows</li>
                        <li>- Fibre Doors</li>
                        <li>- WPC Doors</li>
                    </ul>
                </div>
                <div className='w-1/3'>
                    <h1 className='uppercase text-neutral-500 mb-4'>address</h1>
                    <ul className='text-neutral-500 italic space-y-1'>
                        <p>34/1874A, Muttepadathu Building Padmasree Lane, Mamangalam, Kochi, Kerala, India - 682025</p>
                        <h2>Tel : +91 484 4042626</h2>
                        <h2>Mob : +91 91427 78877</h2>
                        <h2>e-Mail : ileafdoor@gmail.com</h2>
                    </ul>
                </div>
            </div>
            <div className='mt-16 flex justify-between w-full'>
                <h1 className='text-neutral-500'>Copyright © 2025 i-LEAF Doors & Windows</h1>
                <h1 className='text-neutral-500'>Privacy Policy | Terms of Service | Terms and Conditions</h1>
            </div>
        </div>
    </footer>
  )
}

export default Footer