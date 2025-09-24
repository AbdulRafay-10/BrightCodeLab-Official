import React from 'react'
import OptimizedVideo from '../OptimizedVideo'

const Card = ({ videoUrl, title, text }) => {
    return (
        <>
            {/* Card */}
            <div className='w-[35%] cursor-pointer'>

                {/* video */}
                <div className="">
                    <OptimizedVideo
                        className="rounded-xl"
                        src={videoUrl}
                        muted
                        controlsList="nodownload nofullscreen noremoteplayback"
                        onMouseEnter={(e) => e.target.play()}
                        onMouseLeave={(e) => e.target.pause()}
                    />

                </div>

                {/* text */}
                <div className='py-3'>
                    <h1 className='text-3xl font-bold'> {title}</h1>
                    <p className='text-lg font-light pt-2 ' > {text}</p>
                </div>




            </div >
        </>
    )
}

export default Card
