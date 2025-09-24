import Slider from "react-slick"

import OptimizedImage from "../OptimizedImage";
const Testimonials = () => {
  const settings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    customPaging: () => <div className="w-2 h-2 mt-6 rounded-full bg-gray-400 transition-all duration-300"></div>,
    appendDots: (dots) => (
      <div className="mt-6">
        <ul
          className="flex justify-center gap-2
          [&_.slick-active>div]:bg-blue-600 
          [&_.slick-active>div]:w-2 
          [&_.slick-active>div]:h-2 
          [&_.slick-active>div]:transition-all 
          [&_.slick-active>div]:duration-300"
        >
          {dots}
        </ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  const testimonials = [
    {
      img: "/images/p1.png",
      title: "Amazing service!",
      reviewer: "John Partho",
      review:
        "BrightCodeLab was able to quickly assist Caremerge with Data Export needs from our back-end. BrighCodeLab identified our architecture, and understood the process that was needed, and proposed a plan and an associated budget. If I have any future needs for data export, manipulation or import services; BrightCodeLab is my first choice as a vendor to respond efficiently and effectively to my organizations' needs.",
    },
    {
      img: "/images/p2.png",
      title: "Expert Developers!",
      reviewer: "Mullar Sarth",
      review:
        "QA resources provided by BrightCodeLab are top-notch. Our QA engineer is meticulous to detail, manually tests each new Feature in all different environments, plus is always interested in learning about new technologies to help automate and improve our QA process.",
    },
    {
      img: "/images/p3.png",
      title: "Good Support!",
      reviewer: "Kolis Mullar",
      review:
        "BrightCodeLab worked on the Wysefit mobile app. They were attentive, dedicated, and processes-driven. They often worked on weekends and odd hours when we had deadlines. I felt that they had my back; acting not as an outsourced team but like a dedicated team whom I could rely upon. I enjoyed working with BrightCodeLab",
    },
    {
      img: "/images/p4.png",
      title: "Nice Environment!",
      reviewer: "Partho Sarothi",
      review:
        "The BrighCodeLab team has been an extremely capable addition to our team, and they're truly a pleasure to work with. Highly recommend!",
    },
  ]

  return (
    <section className="py-16 bg-[#f8fbff] overflow-visible">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0f2c59]">Our clients speaks for us</h2>
      </div>

      {/* Slider */}
      <div className="container mx-auto px-8 overflow-visible">
        <Slider {...settings}>
          {testimonials.map((test, index) => (
            <div key={index} className="px-4 pb-2">
              {/* Profile image positioned at top center of border */}
              <div className="bg-white rounded-2xl shadow-lg relative pb-8 px-8 text-center min-h-[460px] flex flex-col overflow-visible mt-10">
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-10">
                  <OptimizedImage src={test.img || "/placeholder.svg"}
                    alt={test.reviewer}
                    className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                    />
                </div>

                {/* Review text */}
                <p className="text-gray-600 text-base leading-relaxed mb-6 flex-1 mt-20">{test.review}</p>

                {/* Reviewer Info at bottom */}
                <div className="flex flex-col items-center">
                  <h4 className="text-lg font-semibold text-gray-800">{test.reviewer}</h4>
                  <span className="text-gray-500 text-sm">{test.title}</span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default Testimonials