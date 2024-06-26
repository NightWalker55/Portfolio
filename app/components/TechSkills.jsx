import React from 'react'
import Image from 'next/image'


const TechSkills = ({id,name,img}) => {
  return (
    <div className='lg:ml-8 opacity-90'>
        <div
      className='relative bg-black w-[100px] h-[100px] overflow-hidden rounded-full transition-transform duration-300 ease-in-out transform hover:scale-110 z-10'
      key={id}
    >
      <div className='relative w-full h-full overflow-hidden'>
        <Image
          src={img}
          layout='fill'
          objectFit='cover'
          objectPosition='center'
          className='rounded-lg bg-black transition-transform duration-300 ease-in-out transform hover:scale-120'
        />
      </div>
    </div>
    <h3 className='md:text-center ml-7 mt-2'>{name}</h3>
    </div>
    
  )
}

export default TechSkills
