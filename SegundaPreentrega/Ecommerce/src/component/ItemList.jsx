import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import "./ItemList.css"

const ItemList = ({items}) => {
  return ( 
    <div>
      <h2>ItemList</h2>

      <div>
        {items.map((item) => (
          <div key={item.id}>
            <Link className='link' to={`/item/${item.id}`} >
              <img className="img-vinos" src={item.imagen} alt="" />
              <h2> {item.title} </h2>
              <h3> {item.subtitle} </h3>
              <h4>{item.bodega}</h4>
              <p> {item.description} </p>
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
