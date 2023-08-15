import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import { ReactComponent as RightArrow } from "../../../assets/RightArrow.svg";
import "./CarouselRightNavigation.css";
const CarouselRightNavigation = () => {
  const swiper = useSwiper();
  const [isEnd, setIsEnd] = useState(swiper.isEnd);

  useEffect(() => {
    swiper.on("slideChange", () => {
      setIsEnd(swiper.isEnd);
    });
  }, []);
  return (
    <div className="rightNavigation">
      {!isEnd && (
        <RightArrow
          onClick={() => {
            swiper.slideNext();
          }}
        />
      )}
      <div></div>
    </div>
  );
};

export default CarouselRightNavigation;