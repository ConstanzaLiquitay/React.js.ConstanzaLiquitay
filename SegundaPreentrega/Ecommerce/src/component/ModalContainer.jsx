import React, { useState, useEffect } from 'react';
import Modal from "./Modal"



const Modalcontainer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);


const onClick = () => {
  setShowModal(false);
}


  return (
    <div >
        {isVisible && <Modal/> }
      <div >
        <h2>HOLA. BIENVENIDO A MERCADO DE VINOS</h2>
        <p>Para acceder a esta pagina debes ser mayo de 18 años.</p>
        <h3>-Confirma si sos mayo de edad para continuar-</h3>
        <button onClick={ onClick }>CONFIRMO QUE SOY MAYOR DE EDAD.</button>
      </div>
    </div>
  );
};



export default Modalcontainer;