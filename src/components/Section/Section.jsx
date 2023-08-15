import React, { useState } from "react";
import "./Section.css";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import { Box, CircularProgress } from "@mui/material";
const Section = ({ title, data, type }) => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    console.log("change Text");
    setToggle(!toggle);
  };
  return (
    <div>
      <div className="header">
        <h3>{title}</h3>
        <h4 className="toggleText" onClick={handleToggle}>
          {!toggle ? "Show All" : "Collapse All"}
        </h4>
      </div>
      {!data.length ? (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      ) : (
        <div className="cardsWrapper">
          {toggle ? (
            <div className="section_wrapper">
              {data.map((item) => {
                return <Card data={item} type={type} />;
              })}
            </div>
          ) : (
            <Carousel
              data={data}
              component={(data) => {
                return <Card data={data} type={type} />;
              }}
            />
          )}
        </div>
      )}
    </div>
  );
};
export default Section;
