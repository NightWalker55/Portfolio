"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';


const HeroSection = () => {
  return (
    <section className='py-16 lg:mt-4'>
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <div className="col-span-7 place-self-center text-center sm:text-left">
            <h1 className="text-white mb-4 sm:text-5xl lg:text-6xl text-4xl font-extrabold">
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
              Hello, I am {""}
                </span>
                <br />
                <TypeAnimation
      sequence={[
        'Ikti',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'A full stack developer',
        1000,
        'Enthusiast of AI',
        1000,
      ]}
      wrapper="span"
      speed={10}
      repeat={Infinity}
    />
               </h1>
            <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6'>
              A guy with a thirst for knowledge and new technologies. I love working 
              with new techs and experiment with them.
            </p>
            <div>
                <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white'>Hire Me</button>
                <a href="/CV/CV.pdf" download>
                  <button className='px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3'>
                    <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>
                      Download CV
                    </span>
                  </button>
                  </a>
            </div>
            </div>
            <div className="col-span-5 place-self-center mt-4 lg:mt-0">
            <div className="col-span-5 place-self-center mt-4 lg:mt-0">
  <div className="rounded-full lg:ml-[100px] w-[265px] h-[290px] bg-gradient-to-r from-pink-500 to-purple-500 p-1">
    <div className="rounded-full bg-[#181818] w-[255px] h-[280px] relative overflow-hidden">
      <Image
        src="/images/port_image.jpeg"
        width={250}
        height={270}
        className="absolute w-full h-full object-cover top-0 left-0 rounded-full"
      />
    </div>
  </div>
</div>

</div>

        </div>
    </section>
  )
}

export default HeroSection
