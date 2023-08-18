import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Card from "./components/Card/Card";
import Section from "./components/Section/Section";
import { Footer } from "./components/Footer/Footer";
import "./styles.css";
import "./App.css";
import { useEffect, useState } from "react";
import { fetchTopAlbums, fetchSongs , fetchNewAlbums } from "./API/Api";
export default function App() {
  const [data, setData] = useState([]);
  const [songData, setSongData] = useState([]);
  const [newAlbumsData, setNewAlbumsData] = useState([]);

  const generateData = async () => {
    try {
      const res = await fetchTopAlbums();
      console.log(res);
      setData(res);
    } catch (err) {
      console.error(err);
    }
  };

  const generateSongsData = async () => {
    try {
      const res = await fetchSongs();
      console.log(res);
      setSongData(res);
    } catch (err) {
      console.error(err);
    }
  };
  const generateNewSongsData= async () => {
    try {
      const res = await fetchNewAlbums();
      console.log(res,"hey");
      setNewAlbumsData(res);
    } catch (err) {
      console.error(err);
    }
  };

  const filteredData = (val) =>{
    setSongData(val)
  }

  useEffect(() => {
    generateData();
    generateSongsData();
    generateNewSongsData()
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
        <Section data={newAlbumsData} type="album" title="New Albums" />
        <Section data={songData} type="song" title="Songs"filteredData={filteredData} />
      </div>
      <Footer/>
    </div>
  );
}
