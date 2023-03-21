import "./index.css";
import { useState } from "react";
import { HiShoppingCart, HiOutlineShoppingCart, HiMenu } from "react-icons/hi";

const Header = ({
  setIsCartModal,
  isCartModal,
  cartStorageContent,
  setIsHamburgerMenu,
  scroll,
}) => {
  const onHandleCart = () => {
    setIsCartModal(!isCartModal);
  };
  const onHandleHamburgerMenu = () => {
    setIsHamburgerMenu((prev) => !prev);
  };
  return (
    <div className={`Header ${scroll && "scrolled-header"}`}>
      <div className="logo-sec">
        <img
          src="../../../public/logo.png"
          alt="logo"
          className="header-logo"
        />
      </div>
      <ul className="header-list">
        <li className="li-hidden">About us </li>
        <li className="li-hidden">Shop </li>
        <li className="li-hidden">Offers</li>
        <li>
          <div className="cart-element-header">
            {cartStorageContent.length > 0 ? (
              <HiShoppingCart
                onClick={onHandleCart}
                className="header-cart-icon"
              />
            ) : (
              <HiOutlineShoppingCart
                onClick={onHandleCart}
                className="header-cart-icon"
              />
            )}
            <p className="cart-elements-number">{cartStorageContent.length}</p>
          </div>
        </li>
        <li>
          <HiMenu className="hamburger-menu" onClick={onHandleHamburgerMenu} />
        </li>
      </ul>
    </div>
  );
};
export default Header;
