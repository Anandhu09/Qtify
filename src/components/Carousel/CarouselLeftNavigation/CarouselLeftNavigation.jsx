import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import { ReactComponent as LeftArrow } from "../../../assets/LeftArrow.svg";
import "./CarouselLeftNavigation.css";

const CarouselLeftNavigation = () => {
  const swiper = useSwiper();
  const [isBegin, setIsBegining] = useState(swiper.isBeginning);

  useEffect(() => {
    swiper.on("slideChange", function () {
      setIsBegining(swiper.isBeginning);
      console.log("Hello",swiper.isBeginning)
    });
  }, [isBegin]);
  return (
    <div className="leftNavigation">
      {!isBegin && (
        <LeftArrow
          onClick={() => {
            swiper.slidePrev();
            // setIsBegining(swiper.isBeginning)
            console.log("Hellooo",swiper.isBeginning)
          }}
        />
      )}
    </div>
  );
};

export default CarouselLeftNavigation;
