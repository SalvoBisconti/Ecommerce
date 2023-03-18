import "./index.css";

const MiniCard = ({ productsData }) => {
  return (
    <div className="MiniCard">
      <img
        className="minicard-img"
        src={productsData.thumbnail}
        alt={productsData.title}
      ></img>
    </div>
  );
};
export default MiniCard;
