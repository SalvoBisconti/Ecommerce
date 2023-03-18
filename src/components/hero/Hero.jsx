import "./index.css";
import FormEl from "../formEl";
const Hero = ({ setInputEl, inputEl, setCategory, category }) => {
  return (
    <div className="Hero">
      <img
        src="https://www.neolo.com/blog/wp-content/uploads/2020/04/Consejos-para-tiendas-online-2020.jpg"
        alt="hero image"
        className="hero-img"
      />
      <FormEl
        setInputEl={setInputEl}
        inputEl={inputEl}
        setCategory={setCategory}
        category={category}
      />
    </div>
  );
};
export default Hero;
