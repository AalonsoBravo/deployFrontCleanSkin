import { useState } from "react";
import logo from "../images/items/logocs.png";
import { Link, useNavigate } from "react-router-dom";

const Navegacion = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const nombre = localStorage.getItem("nombre");
    const activo = localStorage.getItem("activo");

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("nombre");
        localStorage.removeItem("activo");
        navigate("/login");
    };

    // Cierra el menú al navegar
    const handleLinkClick = () => setMenuOpen(false);

    return (
        <header>
            <div className="logo">
                <img src={logo} alt="CLEAN SKIN" />
            </div>
            <button
                className="menu-toggle"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Abrir menú"
            >
                &#9776;
            </button>
            <nav className={`navbar ${menuOpen ? "open" : ""}`}>
                <ul>
                    <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
                    <li><Link to="/nosotros" onClick={handleLinkClick}>Nosotros</Link></li>
                    <li><Link to="/contacto" onClick={handleLinkClick}>Contacto</Link></li>
                    <li><Link to="/carrito" onClick={handleLinkClick}>Carrito</Link></li>
                    {activo !== "true" ? (
                        <>
                            <li><Link to="/alta" onClick={handleLinkClick}>Registro</Link></li>
                            <li><Link to="/login" onClick={handleLinkClick}>Login</Link></li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link to="#" onClick={e => e.preventDefault()} className="nav-link">
                                    Hola, {nombre}
                                </Link>
                            </li>
                            <li>
                                <Link to="#" onClick={() => { handleLogout(); handleLinkClick(); }}>
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
