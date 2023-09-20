import { Routes, Route } from "react-router-dom";
//import Modalcontainer from "./component/ModalContainer";
import ItemDetailContainer from "./component/ItemDetailContainer";
import ItemListContainer from "./component/ItemListContainer";
//import CarritoContainer from "./component/CarritoContainer";
import NavBar from './component/NavBar';
import CartProvider from "./component/Context/CartProvider";




function App() {
  return (
    <CartProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />}> </Route>
        <Route path="/category/:category" element={<ItemListContainer />}> </Route>
        <Route path="/item/:id" element={<ItemDetailContainer />}> </Route>
      </Routes>
    </CartProvider>

  );
}

export default App
