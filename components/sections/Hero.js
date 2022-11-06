import Image from "next/image";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

// import required modules
import { Autoplay, EffectFade } from "swiper";

const images = ["/hero.webp", "/hero2.webp"];

export default function Hero() {
  return (
    <header>
      <div className="relative w-full bg-bottom bg-cover max-h-[60rem] sm:h-[calc(100vh-112px)] h-[calc(125vh)]">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          effect={"fade"}
          autoplay={{
            delay: 8000,
            disableOnInteraction: false,
          }}
          navigation={false}
          modules={[EffectFade, Autoplay]}
          className="mySwiper absolute"
        >
          <SwiperSlide
            style={{
              backgroundImage: `url('/hero.webp')`,
              height: "85vh",
            }}
            className="w-full bg-bottom bg-cover max-h-[60rem] sm:h-[calc(100vh-112px)] h-[calc(125vh)]"
          ></SwiperSlide>
          <SwiperSlide
            style={{
              backgroundImage: `url('/hero2.webp')`,
              height: "85vh",
            }}
            className="w-full bg-bottom bg-cover max-h-[60rem] sm:h-[calc(100vh-112px)] h-[calc(125vh)]"
          ></SwiperSlide>
        </Swiper>

        <div className="absolute top-0 z-10 flex items-end justify-center w-full h-full">
          <div className="w-full md:w-[70%] mx-6 mb-[5vh] sm:mb-[12vh] shadow p-5 sm:p-8 rounded-lg bg-primary bg-opacity-70">
            <div className="grid lg:grid-cols-8 gap-y-6 gap-x-4">
              <div className="inline-block relative">
                <select className="appearance-none text-slate-500 px-3 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                  <option value="">Buy</option>
                  <option value="for-rent">Rent</option>
                </select>
                <div className="mr-2 pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    width="17"
                    height="9"
                    viewBox="0 0 17 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.50008 9L9.24392 8.33619L17 1.42024L15.5123 0L8.5 6.25202L1.4877 0L0 1.42024L7.75608 8.33619L8.50008 9Z"
                      fill="#19263A"
                    />
                  </svg>
                </div>
              </div>
              <div className="col-span-3 relative">
                <select className="appearance-none text-slate-500 px-3 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                  <option value="">Residential</option>
                  <option value="for-rent">Commercial</option>
                </select>
                <div className="mr-2 pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    width="17"
                    height="9"
                    viewBox="0 0 17 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.50008 9L9.24392 8.33619L17 1.42024L15.5123 0L8.5 6.25202L1.4877 0L0 1.42024L7.75608 8.33619L8.50008 9Z"
                      fill="#19263A"
                    />
                  </svg>
                </div>
              </div>
              <div className="col-span-4">
                <input
                  type="text"
                  placeholder="Type Area or Suburb Name"
                  className="text-slate-500 placeholder:text-slate-500 px-3 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-4 md:grid-cols-8 gap-y-6 gap-x-4">
              <div className="relative col-span-8 md:col-span-2 flex items-start justify-between mt-4">
                <div class="absolute flex h-full items-start mt-4 ml-3">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.5191 6.49536H2.00897C1.45394 6.49536 1.01245 6.05453 1.01245 5.49884C1.01245 4.94381 1.45329 4.50232 2.00897 4.50232H14.5197C15.0747 4.50232 15.5162 4.94316 15.5162 5.49884C15.5156 6.05451 15.0748 6.49536 14.5191 6.49536H14.5191Z"
                      fill="#FC495D"
                    />
                    <path
                      d="M13.5066 11.4917H0.996521C0.44149 11.4917 0 11.0509 0 10.4952C0 9.94015 0.440837 9.49866 0.996521 9.49866H13.5073C14.0623 9.49866 14.5038 9.93949 14.5038 10.4952C14.5191 11.0508 14.0623 11.4917 13.5066 11.4917H13.5066Z"
                      fill="#FC495D"
                    />
                    <path
                      d="M4.50815 16C4.45903 16 4.40991 16 4.36142 15.9834C3.82233 15.9017 3.43062 15.3952 3.51228 14.8568L5.52064 0.86028C5.6023 0.305249 6.10886 -0.0705207 6.6473 0.0111399C7.18639 0.0928006 7.5781 0.599358 7.49644 1.1378L5.48808 15.1343C5.42236 15.6408 4.99811 16 4.50815 16L4.50815 16Z"
                      fill="#FC495D"
                    />
                    <path
                      d="M9.50522 15.9996C9.4561 15.9996 9.40698 15.9996 9.35849 15.9831C8.8194 15.9014 8.42769 15.3948 8.50935 14.8564L10.5177 0.859925C10.5994 0.320834 11.1059 -0.0708761 11.6444 0.0107845C12.2 0.0758582 12.5758 0.582409 12.4941 1.13744L10.5018 15.1339C10.4201 15.6405 9.99523 15.9996 9.50527 15.9996L9.50522 15.9996Z"
                      fill="#FC495D"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Web Ref. Number Search"
                  className="pl-10 py-3 text-white placeholder:text-white w-full rounded-md bg-transparent border border-white focus:border-gray-500 focus:ring-0 text-sm"
                />
              </div>
              <div className="hidden md:block md:col-span-2"></div>
              <div className="col-span-8 md:col-span-4 flex flex-wrap items-center justify-end">
                <p className="font-bold text-sm text-white mt-3">
                  124 properties
                </p>
                <div className="relative ml-3 mt-3 ">
                  <div className="ml-2 pointer-events-none absolute inset-y-0 left-0 flex items-center px-2 text-gray-700">
                    <svg
                      width="17"
                      height="9"
                      viewBox="0 0 17 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.50008 9L9.24392 8.33619L17 1.42024L15.5123 0L8.5 6.25202L1.4877 0L0 1.42024L7.75608 8.33619L8.50008 9Z"
                        fill="#FC495D"
                      />
                    </svg>
                  </div>
                  <select className="appearance-none text-white pl-10 px-3 py-3 rounded-md bg-transparent border border-white focus:ring-0 text-sm">
                    <option value="">More Search options</option>
                  </select>
                </div>

                <button className="lg:ml-3 mt-4 lg:mt-3 inline-flex items-center justify-center w-full px-4 py-3 text-sm font-medium text-white uppercase transition-colors duration-300 transform bg-secondary rounded-md lg:w-auto hover:bg-primary focus:outline-none">
                  <svg
                    className="mr-2"
                    width="13"
                    height="14"
                    viewBox="0 0 13 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 6C9 7.92969 7.42969 9.5 5.5 9.5C3.57031 9.5 2 7.92969 2 6C2 4.07031 3.57031 2.5 5.5 2.5C7.42969 2.5 9 4.07031 9 6ZM13 12.5C13 12.2344 12.8906 11.9766 12.7109 11.7969L10.0312 9.11719C10.6641 8.20313 11 7.10938 11 6C11 2.96094 8.53906 0.5 5.5 0.5C2.46094 0.5 0 2.96094 0 6C0 9.03906 2.46094 11.5 5.5 11.5C6.60938 11.5 7.70313 11.1641 8.61719 10.5312L11.2969 13.2031C11.4766 13.3906 11.7344 13.5 12 13.5C12.5469 13.5 13 13.0469 13 12.5Z"
                      fill="white"
                    />
                  </svg>
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
