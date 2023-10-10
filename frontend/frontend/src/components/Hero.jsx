import React from 'react'

const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
        {/* overlay */}
        <div className='max-h-[500px] relative'>
            <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center '>
                <h1 className='px-4 text-4xl  sm:text-5xl md:text-6xl lg:text-7xl font-bold'>The  <span>Best </span></h1>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>Plan <span>Delivered </span></h1>
            </div>
            
            <img className='w-full max-h-[500px] object-cover  ' src="https://media.istockphoto.com/id/1456147420/photo/abstract-futuristic-city-downtown-on-dark-background-with-skyscrapers-city-map-and-copy-space.webp?s=1024x1024&w=is&k=20&c=Zgdx7omjB3ZsGWnvqEfVKwpCgVkcqrFTz-pjOVKuQJk=" alt="" />
        </div>
    </div>
  )
}

export default Hero