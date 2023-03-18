import Card from "../card/Card";
import "./index.css";
import { GET } from "../../utils/http";
import { useState, useEffect } from "react";

const CardList = ({ endpoint, title, setModalContent }) => {
  const [productsData, setProductsData] = useState([]);
  useEffect(() => {
    GET(endpoint).then(({ products }) =>
      setProductsData(
        products.map((item) => {
          item.quantity = 1;
          return item;
        })
      )
    );
  }, []);

  return (
    <div className="CardList">
      <h2 className="list-title"> {title}</h2>
      <div className="card-list">
        {productsData.map((product) => (
          <Card
            productsData={product}
            key={product.id}
            setModalContent={setModalContent}
          />
        ))}
      </div>
    </div>
  );
};
export default CardList;
