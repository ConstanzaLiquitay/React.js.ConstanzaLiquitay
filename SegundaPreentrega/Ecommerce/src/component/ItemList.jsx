import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import "./ItemList.css";
import {useState, useEffect} from 'react';
import {collection, getDocs, getFirestore, query, // where,
limit,
} from "firebase/firestore";

const ItemList = () => {

  const [items, setItems] = useState([])

  useEffect(() => {
const db = getFirestore();

const itemCollection = collection (db, "items")

getDocs(itemCollection).then((snapshot) =>{
const itemsFromSnapshot = snapshot.docs.map(doc => ({
  id: doc.id,
  ...doc.data(),
}))

setItems(itemsFromSnapshot)
})


  },[])

return (
  <div>
    <h2>Item List</h2>

    {items.map((items) => (
  

     
<card key= {items.id}>
        <h3>Nombre: {items.title}</h3>
        <img src={items.image} alt="" />
        <p>ID: {items.id}</p>
        <p>Descripción: {items.description}</p>
        <p>Precio: ${items.price}</p>
        <p>Stock: {items.stock}</p>
</card>

    ))}
  </div>
)
}

export default ItemList
