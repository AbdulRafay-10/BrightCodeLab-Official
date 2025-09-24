import React from 'react'

const OurExperts = () => {
  return (
    <div className='pt-5 md:flex justify-between items-center  px-5 bg-customLightGray h-60 '>

      <div> {/* Text  */}
        <h1 className='font-bold text-4xl'><span className='text-customBlue'>Let’s</span> meet our experts </h1>
        <p className='pt-4 text-xl'><span className='text-customBlue'>Looking for expert guidance?
        </span> Book a consultation with us and select a time slot that suits you best.
        </p>

      </div>

      {/* button */}
      <div className="pt-7">
        <button className="bg-customBlue rounded-md h-10 w-64 hover:bg-white transitoin duration-[1.5s] hover:text-customBlue ">
          Book a Consultation - it's free
        </button>
      </div>
    </div>
  )
}

export default OurExperts
