import Image from "next/image";
import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
//import svg's
import Bed from "../../public/bed.svg";
import Bath from "../../public/bath.svg";
import Garage from "../../public/garage.svg";

const incentives = [
  { name: "4", icon: Bed },
  { name: "3", icon: Bath },
  { name: "2", icon: Garage },
];

const animVariants = {
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, y: 50 },
};

export default function Slider() {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={animVariants}
    >
      <div className="mb-12 sm:mb-0 max-w-2xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-heading text-primary sm:text-4xl">
          <span className="block">Featured Properties</span>
        </h2>
      </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper  max-w-lg md:w-[70%] mx-auto lg:max-w-none"
      >
        <SwiperSlide className="lg:p-16">
          <div className="cursor-pointer lg:hover:scale-[1.03] transition-all duration-500 max-w-full lg:flex">
            <div
              className="h-64 sm:h-[465px] w-[620px] flex xs:flex-none bg-cover text-center overflow-hidden"
              style={{ backgroundImage: 'url("/slide.webp")' }}
              title="House with pool"
            >
              <div className="absolute uppercase bg-primary font-sans text-white p-2">
                <span>Sole Mandate</span>
              </div>
            </div>

            <div className="w-xs flex-1 border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white p-10 flex flex-col justify-between leading-normal">
              <div className="mb-8">
                <div className="text-gray-900 font-bold text-xl mb-2">
                  R1,100,000
                </div>
                <p className="mb-4 text-gray-500 text-base">
                  4 Bedroom house for sale in Stellenbosch
                </p>
                <div className="flex overflow-x-auto">
                  <div className="flex space-x-8 whitespace-nowrap py-3">
                    {incentives.map((incentive) => (
                      <div
                        key={incentive.name}
                        className="flex items-center text-sm font-medium text-indigo-600"
                      >
                        <incentive.icon className="mr-3 flex-none w-9 h-9" />

                        <p className="text-gray-500 font-sans font-bold">
                          {incentive.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="mt-4 text-gray-500 text-base">
                  This stylish single-level Cowies Hill home showcases
                  high-quality finishes, an easy indoor/outdoor...
                </p>
              </div>
              <div className="flex items-center">
                <Image
                  className="w-20 h-20 rounded-full mr-4"
                  src="/avatar.jpg"
                  alt="Avatar of Michelle Ruffelo"
                  width="70"
                  height="70"
                />
                <div className="text-sm">
                  <p className="mb-1 text-primary font-sans font-bold leading-none">
                    Michelle Ruffelo
                  </p>
                  <p className="text-secondary">View contact number</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="lg:p-16">
          <div className="cursor-pointer lg:hover:scale-[1.03] transition-all duration-500 max-w-full lg:flex">
            <div
              className="h-64 sm:h-[465px] w-[620px] flex xs:flex-none bg-cover text-center overflow-hidden"
              style={{ backgroundImage: 'url("/slide.webp")' }}
              title="House with pool"
            ></div>

            <div className="w-xs flex-1 border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white p-10 flex flex-col justify-between leading-normal">
              <div className="mb-8">
                <div className="text-gray-900 font-bold text-xl mb-2">
                  R2,300,000
                </div>
                <p className="mb-4 text-gray-500 text-base">
                  4 Bedroom house for sale in Stellenbosch
                </p>
                <div className="flex overflow-x-auto">
                  <div className="flex space-x-8 whitespace-nowrap py-3">
                    {incentives.map((incentive) => (
                      <div
                        key={incentive.name}
                        className="flex items-center text-sm font-medium text-indigo-600"
                      >
                        <incentive.icon className="mr-3 flex-none w-9 h-9" />

                        <p className="text-gray-500 font-sans font-bold">
                          {incentive.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="mt-4 text-gray-500 text-base">
                  This stylish single-level Cowies Hill home showcases
                  high-quality finishes, an easy indoor/outdoor...
                </p>
              </div>
              <div className="flex items-center">
                <Image
                  className="w-20 h-20 rounded-full mr-4"
                  src="/avatar.jpg"
                  alt="Avatar of Michelle Ruffelo"
                  width="70"
                  height="70"
                />
                <div className="text-sm">
                  <p className="mb-1 text-primary font-sans font-bold leading-none">
                    Michelle Ruffelo
                  </p>
                  <p className="text-secondary">View contact number</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="lg:p-16">
          <div className="cursor-pointer lg:hover:scale-[1.03] transition-all duration-500 max-w-full lg:flex">
            <div
              className="h-64 sm:h-[465px] w-[620px] flex xs:flex-none bg-cover text-center overflow-hidden"
              style={{ backgroundImage: 'url("/slide.webp")' }}
              title="House with pool"
            >
              <div className="absolute uppercase bg-primary font-sans text-white p-2">
                <span>Price Reduced</span>
              </div>
            </div>

            <div className="w-xs flex-1 border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white p-10 flex flex-col justify-between leading-normal">
              <div className="mb-8">
                <div className="text-gray-900 font-bold text-xl mb-2">
                  R1,780,000
                </div>
                <p className="mb-4 text-gray-500 text-base">
                  4 Bedroom house for sale in Stellenbosch
                </p>
                <div className="flex overflow-x-auto">
                  <div className="flex space-x-8 whitespace-nowrap py-3">
                    {incentives.map((incentive) => (
                      <div
                        key={incentive.name}
                        className="flex items-center text-sm font-medium text-indigo-600"
                      >
                        <incentive.icon className="mr-3 flex-none w-9 h-9" />

                        <p className="text-gray-500 font-sans font-bold">
                          {incentive.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="mt-4 text-gray-500 text-base">
                  This stylish single-level Cowies Hill home showcases
                  high-quality finishes, an easy indoor/outdoor...
                </p>
              </div>
              <div className="flex items-center">
                <Image
                  className="w-20 h-20 rounded-full mr-4"
                  src="/avatar.jpg"
                  alt="Avatar of Michelle Ruffelo"
                  width="70"
                  height="70"
                />
                <div className="text-sm">
                  <p className="mb-1 text-primary font-sans font-bold leading-none">
                    Michelle Ruffelo
                  </p>
                  <p className="text-secondary">View contact number</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </motion.div>
  );
}
