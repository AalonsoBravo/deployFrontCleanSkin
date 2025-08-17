import { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/authService";
import { showSuccess, showError } from "../utils/alerts";
import "../css/Global.css";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const limpiarDatos = () => {
        setEmail("");
        setPassword("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            alert("Todos los datos son obligatorios.");
            return;
        }

        try {
            const { token, user } = await authService.login(email, password);

            // Guardar datos en localStorage
            localStorage.setItem("token", token);
            localStorage.setItem("nombre", user.nombre);
            localStorage.setItem("activo", "true");

            console.log(`Sesión iniciada como: ${user.nombre}`);
            await showSuccess(`Bienvenido, ${user.nombre}`);
            limpiarDatos();
            navigate("/");
        } catch (error) {
            console.error("Error en login:", error);
            await showError("Verificación fallida");
        }
    };

    return (
        <main>
            <div className="Contact">
                <form onSubmit={handleSubmit}>
                    <div className="ContactForm">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            required
                            pattern="[A-Za-z0-9._%+\-]+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}$"
                            title="Por favor, ingresa un email válido"
                        />
                    </div>
                    <div className="ContactForm">
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            required
                            title="Password"
                        />
                    </div>
                    <button type="submit">Enviar</button>
                    <button type="button" onClick={() => navigate('/Alta')}>
                        Registrar
                    </button>
                </form>
            </div>
        </main>
    );
};

export default LoginForm;
