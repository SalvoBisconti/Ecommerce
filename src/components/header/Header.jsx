import "./index.css";
import { useState } from "react";
import { HiShoppingCart, HiOutlineShoppingCart } from "react-icons/hi";

const Header = ({
  setIsCartModal,
  isCartModal,
  cartStorageContent,
  setModalCartContent,
}) => {
  const onHandleCart = () => {
    setIsCartModal(!isCartModal);
  };
  return (
    <div className="Header">
      <div className="logo-sec">
        <img
          src="../../../public/logo.png"
          alt="logo"
          className="header-logo"
        />
      </div>
      <ul className="header-list">
        <li> </li>
        <li> </li>
        <li>
          <div className="cart-element-header">
            <HiOutlineShoppingCart
              onClick={onHandleCart}
              className="header-cart-icon"
            />
            <p className="cart-elements-number">{cartStorageContent.length}</p>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default Header;
