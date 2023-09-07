const  CartWidget = () => {
  return (
    <div>
        <button className="btn btn-outline position-relative" >
        <i className="bi bi-cart-plus-fill"></i>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    4
    <span className="visually-hidden">unread messages</span>
  </span>
        </button>
    </div>
  )
}

export default CartWidget;
