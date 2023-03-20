import "./index.css";
import Slider from "../slider";

const ModalCard = ({
  modalContent,
  setModalContent,
  setModalCartContent,
  cartStorageContent,
  setIsPopup,
}) => {
  const onHandleModal = () => {
    setModalContent({ isOpen: false });
  };
  const showPopup = () => {
    setIsPopup((prev) => !prev);
    setTimeout(() => {
      setIsPopup(false);
    }, 2000);
  };
  const onHandleAddCart = () => {
    const isProductInLocal = cartStorageContent.find(
      (product) => product.id === modalContent.productData.id
    );
    if (isProductInLocal) {
      const updatedProductQty = {
        ...modalContent.productData,
        quantity: modalContent.productData.quantity++,
      };
      const filterCart = cartStorageContent.filter(
        (product) => product.id !== isProductInLocal.id
      );

      const newCartfinish = [...filterCart, updatedProductQty];

      setModalCartContent([newCartfinish]);

      localStorage.setItem("cartStorage", JSON.stringify([...newCartfinish]));

      showPopup();
    } else {
      setModalCartContent((prev) => [...prev, modalContent.productData]);
      localStorage.setItem(
        "cartStorage",
        JSON.stringify([...cartStorageContent, modalContent.productData])
      );
      showPopup();
    }
  };

  return (
    <div className="ModalCard">
      <div className="modal-background" onClick={onHandleModal}></div>
      <div className="modal-content">
        <div className="description-text">
          <h2> {modalContent.productData.title}</h2>
          <p>{modalContent.productData.description}</p>
        </div>
        <div className="images-section">
          <Slider modalContent={modalContent} />
        </div>

        <div className="buy-section">
          <div className="price-section">
            <h4 className="sale-text">{`-${modalContent.productData.discountPercentage}%`}</h4>
            <h3> {`$ ${modalContent.productData.price} `}</h3>
          </div>

          <button className="add-cart-btn" onClick={onHandleAddCart}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default ModalCard;
