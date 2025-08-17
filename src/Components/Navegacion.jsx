import logo from "../images/items/logocs.png";
import { Link, useNavigate } from "react-router-dom";

const Navegacion = () => {
    const navigate = useNavigate();
    const nombre = localStorage.getItem("nombre");
    const activo = localStorage.getItem("activo");

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("nombre");
        localStorage.removeItem("activo");
        navigate("/login");
    };

    return (
        <header>
            <div className="logo">
                <img src={logo} alt="CLEAN SKIN" />
            </div>
            <form className="search-form">
                <input type="text" placeholder="Search here..." />
                <button type="submit">Search</button>
            </form>
            <nav className="navbar">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/nosotros">Nosotros</Link></li>
                    <li><Link to="/contacto">Contacto</Link></li>
                    <li><Link to="/carrito">Carrito</Link></li>
                    {activo !== "true" ? (
                        <>
                            <li><Link to="/alta">Registro</Link></li>
                            <li><Link to="/login">Login</Link></li>
                        </>
                    ) : (
                        <>
                            <li><Link to="#">Hola, {nombre}</Link></li>
                            <li>
                                <Link to="#" onClick={handleLogout}>
                                    Cerrar sesión
                                </Link>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default Navegacion;
