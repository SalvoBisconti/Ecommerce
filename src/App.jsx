import CardList from "./components/cardList";
import Filter from "./components/filterEl";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import MiniCardList from "./components/miniCardList";
import ModalCard from "./components/modalCard";
import ModalCart from "./components/modalCart";

import { useState, useEffect } from "react";
import { GET } from "../src/utils/http";

import "./App.css";

function App() {
  const [productsData, setProductsData] = useState([]);
  useEffect(() => {
    GET("/products").then(({ products }) =>
      setProductsData(
        products.map((item) => {
          item.quantity = 1;
          return item;
        })
      )
    );
  }, []);

  const [categoryFilter, setCategoryFilter] = useState();
  const [inputEl, setInputEl] = useState("");
  const [modalContent, setModalContent] = useState({
    productData: {},
    isOpen: false,
  });

  const [isCartModal, setIsCartModal] = useState(false);
  const [modalCartContent, setModalCartContent] = useState([]);
  const cartStorageContent =
    JSON.parse(localStorage.getItem("cartStorage")) || [];

  return (
    <div className="App">
      <Header
        setIsCartModal={setIsCartModal}
        isCartModal={isCartModal}
        cartStorageContent={cartStorageContent}
      />
      <Hero setInputEl={setInputEl} inputEl={inputEl} />
      <MiniCardList endpoint={"/products"} inputEl={inputEl} />
      <Filter
        productsData={productsData}
        setCategoryFilter={setCategoryFilter}
        categoryFilter={categoryFilter}
      />
      <CardList
        productsData={productsData}
        title={"Products:"}
        setModalContent={setModalContent}
        categoryFilter={categoryFilter}
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
      <Footer />
    </div>
  );
}

export default App;
