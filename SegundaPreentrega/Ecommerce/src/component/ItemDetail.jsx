import PropTypes from "prop-types";

const ItemDetail = ({ items, isLoading, addItem }) => {
    if (isLoading) {
      return <h2>Loading...</h2>;
    }
  
    if (!items) {
      return <h2>Product not found</h2>;
    }

  return (
    <div>

      <img src={items.image} alt="" />
      <h2> {items.bodega} </h2>
      <p>{items.description}</p>
      <p> ${items.price} </p>
      <button  onClick={() => addItem(items, 1)}>Agregar al Carrito</button>
    </div>
  );
};

ItemDetail.propTypes = {
  items: PropTypes.object,
  isLoading: PropTypes.bool,
  addItem: PropTypes.func,
};

export default ItemDetail;