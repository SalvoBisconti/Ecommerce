import MiniCard from "../miniCard/MiniCard";
import "./index.css";
import { GET } from "../../utils/http";
import { useState, useEffect } from "react";

const MiniCardList = (endpoint, inputEl) => {
  const [miniProductsData, setMiniProductsData] = useState([]);
  // const a = inputEl;
  // console.log(a);
  useEffect(() => {
    GET(
      inputEl ? `/products/category/skincare` : "/products/category/laptops"
    ).then(({ products }) => setMiniProductsData(products));
  }, [inputEl]);

  return (
    <div className="MiniCardList">
      <div className="miniCardList-product">
        {miniProductsData.map((product) => (
          <MiniCard productsData={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};
export default MiniCardList;
