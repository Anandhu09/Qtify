import React, { useEffect } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper";

import CarouselLeftnavigation from "./CarouselLeftNavigation/CarouselLeftNavigation";
import CarouselRightnavigation from "./CarouselRightNavigation/CarouselRightNavigation";
import "swiper/css";

const Controls = ({ data }) => {
  const swiper = useSwiper();

  useEffect(() => {
    swiper.slideTo(0, 10);
  }, [data]);
};

const Carousel = ({ data, component }) => {
  return (
    <div className="carousel_wrapper">
      <Swiper
        style={{ padding: "0px 20px" }}
        initialSlide={0}
        modules={Navigation}
        slidesPerView="auto"
        spaceBetween={40}
        allowTouchMove
      >
        <Controls data={data} />
        <CarouselLeftnavigation />
        <CarouselRightnavigation />

        {data.map((item) => (
          <SwiperSlide>{component(item)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
