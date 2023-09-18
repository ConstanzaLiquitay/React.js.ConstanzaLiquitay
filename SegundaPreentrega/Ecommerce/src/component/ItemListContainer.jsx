import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../services";
import ItemList from "./ItemList"


const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const {category} = useParams();

useEffect(() => {
  console.log("useEffect" , category);
getProducts(category).then((response) => {
  setItems(response);
});
}, [category])




return <ItemList items={items}></ItemList>
};

export default ItemListContainer
