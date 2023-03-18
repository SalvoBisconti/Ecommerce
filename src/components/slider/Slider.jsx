import { useState } from "react";
import "./index.css";

const Slider = ({ modalContent }) => {
  const [count, setCount] = useState(0);

  const imgArray = modalContent.productData.images.map((image) => [image]);

  const changeImg = () =>
    setCount((count - 1 + imgArray.length) % imgArray.length);

  return (
    <div className="Slider">
      <img src={imgArray[count]} alt="image_slider" className="img-slider" />
      <button className="left-slider" onClick={changeImg}>
        {"< "}
      </button>
      <button className="right-slider" onClick={changeImg}>
        {"> "}
      </button>
    </div>
  );
};

export default Slider;
