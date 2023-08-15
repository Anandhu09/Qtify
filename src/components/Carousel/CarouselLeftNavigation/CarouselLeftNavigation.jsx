import React, { useEffect, useState } from "react";
import { useSwiper, useSwiperSlider } from "swiper/react";
import { ReactComponent as LeftArrow } from "../../../assets/LeftArrow.svg";
import "./CarouselLeftNavigation.css";

const CarouselLeftNavigation = () => {
  const swiper = useSwiper();
  const [isBegining, setIsBegining] = useState(swiper.isBegining);

  useEffect(() => {
    swiper.on("slideChange", function () {
      setIsBegining(swiper.isBegining);
    });
  }, []);
  return (
    <div className="leftNavigation">
      {!isBegining && (
        <LeftArrow
          onClick={() => {
            swiper.slidePrev();
          }}
        />
      )}
      <div></div>
    </div>
  );
};

export default CarouselLeftNavigation;
