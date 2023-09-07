import { Routes, Route } from "react-router-dom";
import Modal from "./component/Modal";
import ItemDetailContainer from "./component/ItemDetailContainer";
import ItemListContainer from "./component/ItemListContainer";
import NavBar from './component/NavBar';



function App() {
  return (
    <div>
      <div>
      <Modal />

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
