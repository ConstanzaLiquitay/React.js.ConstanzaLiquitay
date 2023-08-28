import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../services";
import ItemList from "./ItemList"


const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const {categoryId} = useParams();

useEffect(() => {
  console.log("useEffect" , categoryId);
getProducts(categoryId).then((response) => {
  setItems(response);
});
}, [categoryId ])




return <ItemList items={items}></ItemList>
};

export default ItemListContainer
