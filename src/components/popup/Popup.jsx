import "./index.css";

const Popup = ({ popupText }) => {
  return (
    <div className="Popup">
      <p className="popup-text"> {popupText}</p>
    </div>
  );
};

export default Popup;
