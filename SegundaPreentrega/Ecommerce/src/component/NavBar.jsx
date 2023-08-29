import { Link, NavLink } from "react-router-dom"
import "./NavBar.css"

const NavBar = () => {
  return (
      <nav  className="Container-NavBar" >
        <h1>
        <Link  className="List-NavLink" to="/">Mercado de Vinos</Link>
        </h1>
        <ul className="ListContainer" >
            <li>
                <NavLink className="List-NavLink"  to="/category/vinotinto">Vinos Tintos</NavLink>
            </li>
        </ul>
        <ul className="ListContainer">
            <li >
            <NavLink className="List-NavLink"  to="/category/vinoblanco">Vinos Blancos</NavLink>
            </li>
        </ul>
        <ul className="ListContainer">
            <li>
            <NavLink  className="List-NavLink" to="/category/espumantes">Espumantes</NavLink>
            </li>
        </ul >
        <ul className="ListContainer">
            <li>
            <NavLink className="List-NavLink" to="/category/comocomprar">¿Como comprar?</NavLink>
            </li>
        </ul>
      </nav>
  )
}

export default NavBar
