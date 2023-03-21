import "./index.css";
import CartItem from "../cartItem";

const ModalCart = ({
  isCartModal,
  cartStorageContent,
  setModalCartContent,
}) => {
  const cartSum = cartStorageContent.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  return (
    <div className={`ModalCart ${isCartModal && "modal-cart-show "}`}>
      <div className="cart-content">
        <h2 className="cart-title"> Your cart</h2>
        <div className="items-cart-list">
          {!cartStorageContent.length ? (
            <div className="empty-cart">
              <p className="empty-cart-text">Your cart is empty</p>
              <a href="">
                <button className="empty-cart-btn" type="button">
                  Add a product
                </button>
              </a>
            </div>
          ) : (
            cartStorageContent.map((item, i) => (
              <CartItem
                key={i}
                product={item}
                setModalCartContent={setModalCartContent}
                cartStorageContent={cartStorageContent}
              />
            ))
          )}
          {cartStorageContent.length ? (
            <h4 className="cart-sum"> Total: ${cartSum} </h4>
          ) : null}
        </div>
      </div>
    </div>
  );
};
export default ModalCart;
