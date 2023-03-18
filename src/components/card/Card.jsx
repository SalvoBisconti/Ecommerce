import "./index.css";
import { shortingDescription } from "../../utils/functions";
const Card = ({ productsData, setModalContent }) => {
  const onHandleClickDetails = () => {
    setModalContent({
      productData: productsData,
      isOpen: true,
    });
  };
  return (
    <div className="Card" onClick={onHandleClickDetails}>
      <img
        src={productsData.thumbnail}
        alt="product image"
        className="card-img"
      />
      <div className="card-text">
        <div className="card-bio-area">
          <h4>{productsData.title}</h4>
          <p>{shortingDescription(productsData.description)}</p>
        </div>

        <div className="card-price-area">
          <h5 className="card-sale-icon">{`${productsData.discountPercentage}%`}</h5>
          <h4>{`$ ${productsData.price}`}</h4>
        </div>
      </div>
    </div>
  );
};
export default Card;
