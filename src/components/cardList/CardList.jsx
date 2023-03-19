import Card from "../card/Card";
import "./index.css";

const CardList = ({ productsData, title, setModalContent, categoryFilter }) => {
  return (
    <div className="CardList">
      {/* <h2 className="list-title"> {title}</h2> */}
      <div className="card-list">
        {!categoryFilter
          ? productsData.map((product) => (
              <Card
                productsData={product}
                key={product.id}
                setModalContent={setModalContent}
              />
            ))
          : productsData
              .filter((item) => item.category === categoryFilter)
              .map((product) => (
                <Card
                  productsData={product}
                  key={product.id}
                  setModalContent={setModalContent}
                />
              ))}
      </div>
    </div>
  );
};
export default CardList;
