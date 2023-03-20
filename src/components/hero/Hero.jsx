import "./index.css";
import FormEl from "../formEl";
const Hero = () => {
  return (
    <div className="Hero">
      <div className="hero-overlay"></div>
      <img
        src="https://www.neolo.com/blog/wp-content/uploads/2020/04/Consejos-para-tiendas-online-2020.jpg"
        alt="hero image"
        className="hero-img"
      />
      <div className="hero-text">
        <h2>The best ecommerce to buy a lot of stuff </h2>
      </div>
    </div>
  );
};
export default Hero;
