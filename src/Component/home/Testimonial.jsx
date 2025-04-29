import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";



const Testimonial = () => {
  return (
    <div className="bg-red-100 py-25 px-6 text-center relative overflow-hidden ">
      {/* Half-Shown Top Decorative Circle */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-red-500 w-20 h-10 rounded-b-full"></div>

      {/* Testimonial Content */}
      <h2 className="text-3xl font-bold mb-4">Testimonials</h2>

      {/* Profile Section */}
      <div className="md:w-4xl mx-auto">
        <Swiper
          modules={[Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="text-center space-y-2 ">
              <p>
                Krishno Roy was fantastic to work with! He set up a flawless
                GDPR and CCPA-compliant cookie banner, configured Google
                Analytics 4 perfectly, and ensured my data analytics were
                running smoothly. Great communication, fast delivery, and
                professional results. Highly recommended for anyone needing
                expert tracking and compliance solutions!
              </p>

              <h1 className="text-xl font-bold">mehazabien_chy</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center space-y-2 ">
              <p>
                This partner responded very quickly and clearly. He works fast
                and accurately, with excellent communication. I will definitely
                give him more tasks in the future.
              </p>
              <h1 className="text-xl font-bold">aaliyahfrye</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center space-y-2 ">
              <p>
                It was great working with you. Thank you for finding the
                solution to all the technical issues. We really appreciate it.
                5/5
              </p>
              <h1 className="text-xl font-bold">tegafuego</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center space-y-2 ">
              <p>
                As always, excellent and seamless cooperation. Communication was
                quick, and the work was done excellently. Thank you.
              </p>
              <h1 className="text-xl font-bold">fufson</h1>
            </div>
          </SwiperSlide>
          ...
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
