import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-center items-center py-5 mb-5 border-b-2 border-transparent' 
         style={{
           borderImage: 'linear-gradient(to right, transparent, #eee, transparent) 1',
           borderImageSlice: 1
         }}>
        <Image src="logo.svg" alt="logo" width={90} height={90}  />
    </nav>
  )
}

export default Navbar
