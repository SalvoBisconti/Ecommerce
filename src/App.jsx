import CardList from "./components/cardList";
import Header from "./components/header";
import Hero from "./components/hero";
import MiniCardList from "./components/miniCardList";
import ModalCard from "./components/modalCard";
import ModalCart from "./components/modalCart";
import Footer from "./components/footer";
import { useState } from "react";

import "./App.css";

function App() {
  const [inputEl, setInputEl] = useState("");
  const [modalContent, setModalContent] = useState({
    productData: {},
    isOpen: false,
  });

  const [isCartModal, setIsCartModal] = useState(false);
  const [modalCartContent, setModalCartContent] = useState([]);
  const cartStorageContent =
    JSON.parse(localStorage.getItem("cartStorage")) || [];
  console.log(modalCartContent);
  return (
    <div className="App">
      <Header
        setIsCartModal={setIsCartModal}
        isCartModal={isCartModal}
        modalCartContent={modalCartContent}
        cartStorageContent={cartStorageContent}
      />
      <Hero setInputEl={setInputEl} inputEl={inputEl} />
      <MiniCardList endpoint={"/products"} inputEl={inputEl} />
      <CardList
        endpoint={"/products"}
        title={"Products:"}
        setModalContent={setModalContent}
        setModalCartContent={setModalCartContent}
        modalCartContent={modalCartContent}
      />
      {modalContent.isOpen && (
        <ModalCard
          modalContent={modalContent}
          setModalContent={setModalContent}
          setModalCartContent={setModalCartContent}
          cartStorageContent={cartStorageContent}
        />
      )}

      {isCartModal && (
        <ModalCart
          isCartModal={isCartModal}
          cartStorageContent={cartStorageContent}
          setModalCartContent={setModalCartContent}
        />
      )}
    </div>
  );
}

export default App;
