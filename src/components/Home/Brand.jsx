import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import Title from "../Title";

const Brand = () => {
  const [brands, setBrand] = useState([]);
  useEffect(() => {
    fetch("/brands.json")
      .then((res) => res.json())
      .then((data) => setBrand(data));
  }, []);
  console.log(brands);
   
  return (
    <div>
      <div>
        <Title front={"Our"} back={"Brands"}></Title>
        <Swiper
  slidesPerView={4}
  spaceBetween={30}
  freeMode={true}
  pagination={{
    clickable: true,
  }}
  modules={[Autoplay, FreeMode, Pagination]} // Include Autoplay in the list of modules
  className="mySwiper"
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
  }}
>
          {brands.map((brand) => (
            <SwiperSlide key={brand.image}>
              <div className="card ">
                <figure>
                  <img src={brand.image} alt="Shoes" />
                </figure>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Brand;
