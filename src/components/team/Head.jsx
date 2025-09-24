import React from 'react'

import OptimizedImage from "../OptimizedImage";
const Head = () => {
    return (
        <>
            {/* Parent div  */}
            <div className='relative text-white'>

                {/* image */}
                <OptimizedImage src="/images/AboutUs.webp" className="w-full" alt=" Image team member "
                / />
                {/* text */}
                <div className='absolute top-4 font-thin text-center w-full md:top-32 space-y-4 '>
                    <h1 className='md:text-5xl font-bold '>Team</h1>
                    <p className='md:text-xl font-light '></p>
                    "We are a passionate and dedicated team, committed to innovation and excellence, with <br />
                    our strength lying in collaboration, creativity, and achieving outstanding results together."

                </div>
            </div >
        </>
    )
}

export default Head

