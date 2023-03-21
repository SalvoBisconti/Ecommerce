import "./index.css";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="top-footer">
        <img src="/logo.png" alt="logo" className="footer-logo" />
        <ul className="footer-list">
          <li>About us</li>
          <li>Concacts</li>
          <li>Policy</li>
          <li>Privacy</li>
          <li></li>
        </ul>
      </div>

      <div className="bottom-footer">
        <p>Created by Salvo Bisconti. © All rights reserved</p>
      </div>
    </div>
  );
};
export default Footer;
