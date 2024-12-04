import Button from '@/components/Common/Button'
import SecondaryButton from '@/components/Common/SecondaryButton'
import React from 'react'

export default function WhyChooseUsCard({
    icon,
    title,
    desc,
}) {
  return (
    <div className=' text-text-primary flex flex-col items-center gap-4 justify-center p-4'>
        <div className='p-4'>
            {/* <img src={icon} alt='icon' /> */}
        </div>
        <div className='text-center p-4'>
            <h3 className='font-bold md:text-2xl text-base '>{title}</h3>
            <p className='text-gray-600 text-sm md:text-base'>{desc}</p>
            <SecondaryButton >
                Learn More
            </SecondaryButton>
        </div>
    </div>
  )
}
