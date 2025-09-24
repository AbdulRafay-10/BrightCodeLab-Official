import React from 'react'

import OptimizedImage from "../OptimizedImage";
const OurOffices = () => {
    return (
        <div>
            {/* image */}
            <div className=" px-5">
                <div className="relative">
                    <OptimizedImage className="h-[40rem] w-screen bg-customDarkBlue"
                        src="/images/Offices.webp"
                        alt=""
                    / />
                    {/* text */}
                    <div className="absolute text-white top-0 pt-6 pl-8">
                        <h1 className="text-3xl">Offices</h1>
                        {/* USA */}
                        <div className="pt-8 px-5">
                            <h1 className="text-2xl font-bold text-customLightBlue2">
                                Canada
                            </h1>
                            <p className="tracking-tight">
                                W11133 Shady Trail PMB 205 Dallas, TX 75229
                            </p>
                        </div>

                        {/* USA */}
                        <div className="pt-8 px-5">
                            <h1 className="text-2xl font-bold text-customLightBlue2">
                                Pakistan
                            </h1>
                            <p className="tracking-tight">
                                West Tower, 371 Deansgate, Manchester M15 4UP, United Kingdom{" "}
                            </p>
                        </div>

                        {/* USA */}
                        <div className="pt-8 px-5">
                            <h1 className="text-2xl font-bold text-customLightBlue2">USA</h1>
                            <p className="tracking-tight">
                                61-51 26B St, Jumeirah - Jumeirah 2 - Dubai - United Arab
                                Emirates{" "}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurOffices
