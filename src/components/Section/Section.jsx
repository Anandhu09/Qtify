import React, { useEffect, useState } from "react";
import "./Section.css";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import BasicTabs from "../Tabs/Tabs";
import { Box, CircularProgress } from "@mui/material";


const Section = ({ title, data, type ,filteredData=null}) => {
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = React.useState(0);
  const [songsData, setSongsData] = useState(data)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }
  const handleToggle = () => {
    console.log("change Text");
    setToggle(!toggle);
  };

  const generateSongsData=(key)=>{
    const res = data.filter((item)=>item.genre.key===key)
    filteredData(res)
  }
  useEffect(() => {
    if (value === 1) {
      generateSongsData('rock')
    }
  }, [value])
  return (
    <div>
      <div className="header">
        <h3>{title}</h3>
        <h4 className="toggleText" onClick={handleToggle}>
          {!toggle ? "Show All" : "Collapse All"}
        </h4>
      </div>
      {type == "song" ? <BasicTabs value={value} handleChange={handleChange} /> : null}
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
