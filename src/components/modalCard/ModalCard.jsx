import "./index.css";
import Slider from "../slider";

const ModalCard = ({
  modalContent,
  setModalContent,
  setModalCartContent,
  cartStorageContent,
}) => {
  const onHandleModal = () => {
    setModalContent({ isOpen: false });
  };

  const onHandleAddCart = () => {
    //C!! trasformo undefined in true/false
    setModalCartContent((prev) =>
      !!prev.find((product) => product.id === modalContent.productData.id)
        ? [...prev]
        : [...prev, modalContent.productData]
    );
    const isProductInLocalStorage = cartStorageContent.find(
      (product) => product.id === modalContent.productData.id
    );
    // cartStorageContent.map((item) => {
    //   if (cartStorageContent.length) {
    //     if (item.id === modalContent.productData.id) {
    //       alert("n'avutru n vo?");
    //     } else {
    //       localStorage.setItem(
    //         "cartStorage",
    //         JSON.stringify([...cartStorageContent, modalContent.productData])
    //       );
    //     }
    //   } else {
    //     localStorage.setItem(
    //       "cartStorage",
    //       JSON.stringify([...cartStorageContent, modalContent.productData])
    //     );
    //   }
    // });
    if (isProductInLocalStorage) {
      //FIXME:  da risolvere l'aumento della quantità
      // cartStorageContent.map((item) => {
      //   item.id === modalContent.productData.id;
      //   setModalCartContent((prev) =>
      //     item.id === modalContent.productData.id
      //       ? [...prev]
      //       : [...prev, modalContent.productData.quantity++]
      //   );
      // });
      // console.log(cartStorageContent);

      alert(`${modalContent.productData.title} è già presente nel carrello!`);
    } else {
      localStorage.setItem(
        "cartStorage",
        JSON.stringify([...cartStorageContent, modalContent.productData])
      );

      alert(`${modalContent.productData.title} aggiunto al carrello!`);
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
            <h4 className="sale-text">{`${modalContent.productData.discountPercentage}%`}</h4>
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
