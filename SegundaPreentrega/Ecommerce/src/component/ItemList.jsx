import propTypes from "prop-types";
import { Link } from "react-router-dom";

const ItemList = ({ items, isLoading }) => {
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h1>ItemList</h1>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Link to={`/item/${item.id}`}>
              <img src={item.image} alt="" />
              <p>{item.category}</p>
              <h3>{item.title}</h3>
              <h4> {item.bodega} </h4>
              <p> {item.description} </p>
              <p>${item.price}</p>
            </Link>
            <button>Agregar al Carrito</button>
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
