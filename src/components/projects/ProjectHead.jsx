import React from 'react'

import OptimizedImage from "../OptimizedImage";
const ProjectHead = () => {
    return (
        <>
            {/* Parent div  */}
            <div className='relative text-white'>

                {/* image */}
                <OptimizedImage src="/images/AboutUs.webp" className="w-full" alt=" Image team member "
                / />
                {/* text */}
                <div className='absolute top-4 font-thin text-center w-full md:top-32 space-y-4 '>
                    <h1 className='md:text-5xl font-bold '>Projects</h1>
                    <p className=' '>
                        Explore our case studies to see how our cutting-edge technology solutions have <br />
                        helped businesses achieve their goals and overcome their challenges.
                    </p>

                </div>
            </div >
        </>
    )
}

export default ProjectHead
