import axios from 'axios';

export const registrarUsuario = async ({ nombre, email, password }) => {
    console.log("Registrando usuario con nombre:", nombre, "email:", email, "password:", password);
    const response = await axios.post(`${process.env.REACT_APP_API_REGISTER_URL}`, {
        nombre,
        email,
        password
    });
    console.log("Respuesta del registro:", response.data);
    return response;
}

const login = async (email, password) => {
    // console.log("Logging in with email:", email, "and password:", password);
    // const response = await axios.post(`${process.env.REACT_APP_API_LOGIN_URL}`, {
    //     email,
    //     password
    // });
    // return response;
    try {
        console.log("Intentando iniciar sesión con email:", email);
        const response = await axios.post(`${process.env.REACT_APP_API_LOGIN_URL}`, {
            email,
            password
        });
        console.log("Respuesta del inicio de sesión:", response.data);
        const { token, user } = response.data;
        console.log("Token recibido:", token);

        return { token, user };
    } catch (error) {
        console.error("Error en login:", error.response?.data || error.message);
        throw error;
    }
}

const authService = {
    login
};

export default authService;