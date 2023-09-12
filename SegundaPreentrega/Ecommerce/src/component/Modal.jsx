import "./Modal.css"


const Modal = ({ closeModal }) => {


  return (
    <div className="container-cardmodal">
      <h2>HOLA. BIENVENIDO A MERCADO DE VINOS</h2>
        <p>Para acceder a esta página debes ser mayor de 18 años.</p>
        <h3>-Confirma si sos mayor de edad para continuar-</h3>
        <button className="btn-modal" onClick={closeModal}>CONFIRMO QUE SOY MAYOR DE EDAD.</button>

    </div>
  );
};



export default Modal
    

