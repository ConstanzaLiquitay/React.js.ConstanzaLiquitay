import propTypes from 'prop-types';
import { Link } from 'react-router-dom'

const ItemList = ({items}) => {
  return ( 
    <div>
      <h2>ItemList</h2>

      <div>
        {items.map((item) => (
          <div key={item.id}>
            <Link to={`/item/${item.id}`} >
              <img src={item.imagen} alt="" />
              <h2> {item.title} </h2>
              <h3> {item.subtitle} </h3>
              <p> {item.info} </p>
              <button> {item.btnVerMas} Ver Mas</button>
              <button> {item.btnComprar} Comprar </button>
              </Link>
          </div>
        ))}
      </div>
      </div>
  ) 
  
}


ItemList.propTypes = {
  items: propTypes.array.isRequired,
};

export default ItemList
