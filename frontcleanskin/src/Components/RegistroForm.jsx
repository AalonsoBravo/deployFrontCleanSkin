import { useState } from 'react';
import { registrarUsuario } from '../services/authService';
import Swal from 'sweetalert2';
import "../css/Global.css";
import { useNavigate} from 'react-router-dom';

const RegistroForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        password: '',
    });

    const [mensaje, setMensaje] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMensaje('');

        // Validación de nombre
        if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{3,}$/.test(formData.nombre)) {
            setMensaje('El nombre debe tener al menos 2 letras y solo caracteres válidos.');
            return;
        }

        // Validación de correo
        if (!/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(formData.email)) {
            setMensaje('Ingresa un correo válido.');
            return;
        }

        // Validación de contraseña
        if (!/^.{6,}$/.test(formData.password)) {
            setMensaje('La contraseña debe tener al menos 6 caracteres.');
            return;
        }

        try {
            const response = await registrarUsuario(formData);
            setMensaje('Registro exitoso 🎉');
            console.log('Respuesta del backend:', response.data);
            Swal.fire({
                icon: 'success',
                title: 'Registro exitoso',
                text: `Registro correcto ${formData.nombre}!!`,
            });
            navigate('/login');
        } catch (error) {
            console.error('Error al registrar:', error);
            setMensaje('Hubo un problema al registrar 😓');
        }
    };

    return (
        <div className="Contact">
            <form onSubmit={handleSubmit}>
                <div className="ContactForm">
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        placeholder='Nombre'
                        required
                    />
                </div>

                <div className="ContactForm">
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder='Email'
                        required
                    />
                </div>

                <div className="ContactForm">
                    <input
                        type="password"
                        id="contraseña"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder='Contraseña'
                        required
                    />
                </div>

                <button type="submit">Registrarse</button>

                {mensaje && <p>{mensaje}</p>}
            </form>
        </div>
    );
};

export default RegistroForm;
