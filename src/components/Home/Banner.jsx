import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

const Banner = () => {
  return (
    <div>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        autoplay={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide
          style={{
            backgroundImage: `url(https://i.ibb.co/sJHH9cM/pexels-drew-williams-3568520.jpg) `,
            width: "100vw",
            height: "100vh",
          }}
        >
          <div className="banner h- bg-gray-800 flex items-center justify-center">
            <div className="slide-content text-center">
              <h2 className="text-4xl text-white mt-36">
                Tech Electronic shop: Your One-Stop Shop for Cutting-Edge
                Electronics
              </h2>
              <p className="text-center text-2xl m-4 text-yellow-700">
                Buy latest Laptop,tablet,mobile and desktop
              </p>

              <button className="btn btn-outline text-white ">
                Buy Products
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: `url(https://i.ibb.co/XsgtDQL/pexels-life-of-pix-7764.jpg)`,
            width: "100vw",
            height: "100vh",
          }}
        >
          <div className="banner h-64 bg-gray-800 flex items-center justify-center">
            <div className="slide-content text-center">
              <h2 className="text-4xl text-white">
                Tech Electronic shop: Your One-Stop Shop for Cutting-Edge
                Electronics
              </h2>
              <p className="text-center text-2xl m-4 text-yellow-700">
                Buy latest Laptop,tablet,mobile and desktop
              </p>
              <button className="btn btn-outline text-white mt-10">
                Buy Products
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: `url(https://i.ibb.co/JrKnBNv/Gear-Laptop-Monitor-159167665.webp)`,
            width: "100vw",
            height: "100vh",
          }}
        >
          <div className="banner h-64 bg-gray-800 flex items-center justify-center">
            <div className="slide-content text-center">
              <h2 className="text-4xl text-white">
                Tech Electronic shop: Your One-Stop Shop for Cutting-Edge
                Electronics
              </h2>
              <p className="text-center text-2xl m-4 text-yellow-700">
                Buy latest Laptop,tablet,mobile and desktop
              </p>

              <button className="btn btn-outline text-white mt-10">
                Buy Products
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
