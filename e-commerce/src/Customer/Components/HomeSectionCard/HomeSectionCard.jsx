import React from 'react'

const HomeSectionCard = () => {
  return (
    <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3 border' >
        <div className='h-[13rem] w-[10rem]'>
            <img className='object-cover object-top w-full h-full'src='https://rukminim2.flixcart.com/image/612/612/kf1fo280hlty2aw-0/t-shirt/w/s/e/-original-imafdfvvr8hqdu65.jpeg?q=70'></img>
        </div>    
        <div className='p-4'>
            <h3 className='text-lg font-medium text-gray-900'>Hoodie</h3>
            <p className='mt-2 text-sm text-gray-500'>Men's Casual Hoodie</p>
        </div>  
    </div>
  )
}

export default HomeSectionCard
