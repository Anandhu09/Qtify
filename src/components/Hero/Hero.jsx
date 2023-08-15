import hero_headphone from "../../assets/hero_headphones.png";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div>
        <h1>100 Thousand Songs,ad-free</h1>
        <h1>Over Thousand podcast episodes</h1>
      </div>
      <div>
        <img
          className="headphone_img"
          src={hero_headphone}
          alt="headphone_logo"
        />
      </div>
    </div>
  );
};
export default Hero;
