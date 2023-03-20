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
            <p className="empty-cart-text">Your cart is empty</p>
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
          <h4 className="cart-sum">Total: ${cartSum} </h4>
        </div>
      </div>
    </div>
  );
};
export default ModalCart;
