import "../css/SContacto.css"
import axios from 'axios'
import { useState } from 'react'
import Swal from "sweetalert2";
import { useNavigate, Link } from 'react-router-dom';


const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const loginUser = async (e) => {
        let respuesta;
        e.preventDefault();
        
        if (email === "" || password === "") {
            alert("Please, fill in all fields.");
            return;
        }

        try {

            respuesta = await axios.post('http://localhost:8080/api/login', {
                email: email,
                password: password
            });

            console.log(`Respuesta del servidor: ${respuesta.data.message}`);
            console.log("Status del servidor:", respuesta.status);
            console.log("Respuesta completa:", respuesta);

            if (respuesta.status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Login Successful',
                    text: `${respuesta.data.message}`,
                }).then(() => {
                    navigate('/productos'); // Redirige a la página de inicio después del login exitoso
                });
                limpiarDatos();
            }

        } catch (e) {
            Swal.fire({
                icon: 'error',
                title: 'Login Failed',
                text: "Error al iniciar sesión: " + e.message,
                footer: <Link to="/nosotros">¿No tienes cuenta? Regístrate aquí</Link>
            }).then(() => {
                navigate('/login'); // Redirige a la página de login si el login falla
            });

            limpiarDatos();
        }
    }

    const limpiarDatos = () => {
        setEmail("");
        setPassword("");
    }



    return (
        <main className="CMain">
                <div className="Tittle">
                    <h1 className="TittleAnimation">LOGIN</h1>
                </div>

                <div className="Contact">
                    <form onSubmit={loginUser}>
                        <div className="ContactForm">
                            <input 
                            type="email" 
                            id="email" 
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email" 
                            required 
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" 
                            title="Please, enter a valid email adress."/>
                        </div>
                        <div className="ContactForm">
                            <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            value={password}
                            onChange={(e) => {setPassword(e.target.value)}}
                            placeholder="Password" 
                            required
                            title="Password"/>
                        </div>

                        <button type="submit">
                            Send
                        </button>
                        <button type="reset">
                            Reset
                        </button>
                    </form>
                </div>
            </main>
    )
}

export default Login