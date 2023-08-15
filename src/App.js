import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Card from "./components/Card/Card";
import Section from "./components/Section/Section";
import "./styles.css";
import "./App.css";
import { useEffect, useState } from "react";
import { fetchTopAlbums } from "./API/Api";
export default function App() {
  const [data, setData] = useState([]);

  const generateData = async () => {
    try {
      const res = await fetchTopAlbums();
      console.log(res);
      setData(res);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    generateData();
  }, []);
  return (
    <div className="App">
      <NavBar />
      <Hero />
      {/* {data.map((item) => {
        return <Card data={item} type="album" />;
      })} */}
      <div className="section">
        <Section data={data} type="album" title="Top Albums" />
        <Section data={data} type="album" title="New Albums" />
      </div>
    </div>
  );
}
