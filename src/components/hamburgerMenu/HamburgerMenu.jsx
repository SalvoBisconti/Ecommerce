import "./index.css";

const HamburgerMenu = ({ setIsHamburgerMenu, isHamburgerMenu }) => {
  const onHandleOverlay = () => {
    setIsHamburgerMenu((prev) => !prev);
  };
  return (
    <div
      className={`HamburgerMenu ${isHamburgerMenu && "show-hamburger-menu"}  `}
    >
      <div className="overlay-hamburger-menu" onClick={onHandleOverlay}></div>
      <div className="hamburger-menu-content">
        <ul className="hamburger-menu-list">
          <li>About us </li>
          <li>Shop </li>
          <li>Offers</li>
        </ul>
      </div>
    </div>
  );
};

export default HamburgerMenu;
