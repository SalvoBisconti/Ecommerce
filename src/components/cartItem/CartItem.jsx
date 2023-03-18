import "./index.css";
import { BsFillTrash3Fill } from "react-icons/bs";

const CartItem = ({ product, setModalCartContent, cartStorageContent }) => {
  const onHandleDelate = (product) => {
    const filteredCart = cartStorageContent.filter(
      (item) => item.id !== product.id
    );
    setModalCartContent([filteredCart]);
    localStorage.setItem("cartStorage", JSON.stringify([...filteredCart]));
  };
  return (
    <div className="CartItem">
      <div className="cart-product-details">
        <div className="top-cart-item-area">
          <img
            src={product.thumbnail}
            alt="product image"
            className="cart-product-img"
          />
          <div>
            <p>{product.title}</p>
            <h5 className="cart-item-price"> {`$ ${product.price}`}</h5>
          </div>
        </div>
        <div className="bottom-cart-item-area">
          <p>{`qty: ${product.quantity}`}</p>
          <BsFillTrash3Fill
            className="delete-item-icon"
            onClick={() => onHandleDelate(product)}
          />
        </div>
      </div>
    </div>
  );
};
export default CartItem;
