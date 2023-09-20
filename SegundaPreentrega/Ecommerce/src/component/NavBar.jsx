import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import "./NavBar.css";

const NavBar = () => {
    return (
        <div className="Container-NavBar">

            <nav className="link-NavBar">
                    <Link className="List-NavLink" to="/"> <img className="logo-img" src="./Imagenes/logotipo/logo.proyectoMercadodeVinos.png" alt="" /></Link>


                <ul className="ListContainer" >
                    <li>
                        <NavLink className="List-NavLink" to="/category/vinotinto">Vinos Tintos</NavLink>
                    </li>
                </ul>
                <ul className="ListContainer">
                    <li >
                        <NavLink className="List-NavLink" to="/category/vinoblanco">Vinos Blancos</NavLink>
                    </li>
                </ul>
                <ul  className="ListContainer">
                    <li>
                        <NavLink  className="List-NavLink"  to="/bodegas">Bodegas</NavLink>
                    </li>
                </ul>
                <CartWidget></CartWidget>
            </nav>
        </div>


    );
};


export default NavBar;
