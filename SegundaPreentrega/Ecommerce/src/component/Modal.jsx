import {useState} from 'react';
import Modalcontainer from "./ModalContainer";

const Modal = () =>{
    const [showModal, setShowModal] = useState(false);

    // Mostrar el modal después de 4 segundos
    setTimeout(() => {
      setShowModal(true);
    }, 4000);

    return ( 
        <div>
 {showModal && <Modalcontainer />}
        </div>
        )
       
}

export default Modal
    

