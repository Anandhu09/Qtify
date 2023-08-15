import React, { useEffect, useState } from "react";
import { useSwiper, useSwiperSlider } from "swiper/react";
import { ReactComponent as LeftArrow } from "../../../assets/LeftArrow.svg";
import "./CarouselLeftNavigation.css";

const CarouselLeftNavigation = () => {
  const swiper = useSwiper();
  // console.log(swiper)
  const [isBegin, setIsBegining] = useState(swiper.isBeginning);

  useEffect(() => {
    swiper.on("slideChange", function () {
      setIsBegining(swiper.isBeginning);

    });
  }, []);
  return (
    <div className="leftNavigation">
      {!isBegin && (
        <LeftArrow
          onClick={() => {
            swiper.slidePrev();
            setIsBegining(swiper.isBeginning)
          }}
        />
      )}
    </div>
  );
};

export default CarouselLeftNavigation;
