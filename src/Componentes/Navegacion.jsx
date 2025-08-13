import logo from "../images/items/logocs.png";
import { Link } from "react-router-dom";

const Navegacion = () => {
    return (
            <header>
        <div className="logo">
            <img src={logo} alt="CLEAN SKIN"/>
        </div>
        <form className="search-form">
            <input type="text" placeholder="Search here..."/>
            <button type="submit">Search</button>
        </form> 
        <nav className="navbar">
            <ul>
                <li>
                    <Link to="/">   
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/productos">
                        Products
                    </Link>
                </li>
                <li>
                    <Link to="/nosotros">
                        About Us
                    </Link>
                </li>
                <li>
                    <Link to="/contacto">
                        Contact
                    </Link>
                </li>
                <li>
                    <Link to="/alta">
                        Alta
                    </Link>
                </li>
                <li>
                    <Link to="/login">
                        Login
                    </Link>
                </li>
                <li>
                    <Link to="/personaje">
                        Personajes
                    </Link>
                </li>
                <li>
                    <Link to="/props">
                        Props
                    </Link>
                </li>
                <li>
                    <Link to="/chatia">
                        Chat AI
                    </Link>
                </li>
                <li>
                    <Link to="/sql">
                        CRUD SQL
                    </Link>
                </li>

            </ul>
        </nav>
    </header>
    )
}

export default Navegacion;