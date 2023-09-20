import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import "./NavBar.css";

const NavBar = () => {
    return (
        <div className="Container-NavBar">

            <nav className="link-NavBar">
                <h1>
                    <Link className="List-NavLink" to="/">Mercado de Vinos</Link>
                </h1>


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
                <CartWidget></CartWidget>
            </nav>
        </div>


    );
};


export default NavBar;
