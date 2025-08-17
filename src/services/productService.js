import axios from "axios";

export const obtenerProductos = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_PRODUCTS_URL}`);
    console.log("Productos obtenidos:", response.data);
    return response.data;
}