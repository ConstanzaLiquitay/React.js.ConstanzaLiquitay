import propTypes from "prop-types";
import { Link } from "react-router-dom";
import "./ItemList.css";

const ItemList = ({ items, isLoading }) => {
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h1>Nuestros Productos. </h1>

      <ul className="product-grid">
        {items.map((item) => (
          <li key={item.id}>"
            <Link to={`/item/${item.id}` } className="enlace">
              <div className="card">
              <img className="img-products" src={item.image} alt="" />
              <p>{item.category}</p>
              <h3>{item.title}</h3>
              <h4> {item.bodega} </h4>
              <p> {item.description} </p>
              <p>${item.price}</p>
              </div>
            </Link>
          </li>
        
        ))}
      </ul>
      </div>
  );
};

ItemList.propTypes = {
  items: propTypes.array.isRequired,
  isLoading: propTypes.bool,
};

export default ItemList;
