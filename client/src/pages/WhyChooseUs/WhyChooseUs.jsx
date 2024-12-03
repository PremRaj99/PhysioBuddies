import React from 'react'

export default function WhyChooseUs() {
  return (
    <div className='bg-bg-primary p-4'>
        <div className='text-center text-2xl font-bold text-text-primary my-4'>
            Why Choose Us
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-8'>
            <div className='bg-bg-secondary p-4 rounded-lg shadow-xl'>
            <div className='text-2xl font-bold text-text-primary  my-3'>Quality Care</div>
            <div className='text-text-primary'>
                Our team of experienced doctors and nurses provide quality care to
                all our patients. We ensure that you receive the best treatment and
                care possible.
            </div>
            </div>
            <div className='bg-bg-secondary p-4 rounded-lg shadow-xl'>
            <div className='text-2xl font-bold text-text-primary my-3'>Experienced Doctors</div>
            <div className='text-text-primary'>
                Our doctors have years of experience in their respective fields. We
                ensure that you are in safe hands and receive the best treatment.
            </div>
            </div>
            <div className='bg-bg-secondary p-4 rounded-lg shadow-xl'>
            <div className='text-2xl font-bold text-text-primary my-3'>Advanced Technology</div>
            <div className='text-text-primary'>
                We use the latest technology and equipment to provide the best care
                to our patients. Our advanced technology ensures that you receive the
                best treatment possible.
            </div>
            </div>
            <div className='bg-bg-secondary p-4 rounded-lg shadow-xl'>
            <div className='text-2xl font-bold text-text-primary my-3'>24/7 Support</div>
            <div className='text-text-primary'>
                We provide 24/7 support to all our patients. Our team is always
                available to help you with any queries or concerns you may have.
            </div>
            </div>
        </div>
    </div>
  )
}
