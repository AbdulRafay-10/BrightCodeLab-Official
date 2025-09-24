import React from 'react'

import OptimizedImage from "../OptimizedImage";
const TopServices = () => {
    return (
        <>
            {/* Parent div  */}
            <div className='relative text-white'>

                {/* image */}
                <OptimizedImage src="/images/AboutUs.webp" className="w-full" alt=" Image team member "
                / />
                {/* text */}
                <div className='absolute top-4 font-thin text-center w-full md:top-24 space-y-4 '>
                    <h1 className='md:text-5xl font-bold'>Services</h1>
                    <p className=''>Bright Code Lab  Technologies is a custom software design and development company offering a <br />
                        comprehensive range of innovative and AI powered solutions. Our expert team is well versed in Website<br />
                        development, Mobile application development, UI UX design, Quality assurance, MVP builder and Dedicated team<br />
                        services.
                    </p>
                </div>

            </div >
        </>
    )
}

export default TopServices
