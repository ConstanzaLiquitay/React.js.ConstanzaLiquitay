import { Routes, Route } from "react-router-dom";
import Modalcontainer from "./component/ModalContainer";
import ItemDetailContainer from "./component/ItemDetailContainer";
import ItemListContainer from "./component/ItemListContainer";
import CarritoContainer from "./component/CarritoContainer";
import NavBar from './component/NavBar';



function App() {
  return (
    <div>
      <div>
        <CarritoContainer />

        <Modalcontainer />

      </div>


      <NavBar />


      <Routes>
        <Route path="/" element={<ItemListContainer />}> </Route>
        <Route path="/category/:categoryId" element={<ItemListContainer />}> </Route>
        <Route path="/item/:id" element={<ItemDetailContainer />}> </Route>
      </Routes>
    </div>

  )




}

export default App
