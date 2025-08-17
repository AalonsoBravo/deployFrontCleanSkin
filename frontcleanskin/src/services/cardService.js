import axios from 'axios';

export const agregarAlCarrito = async (producto) => {
    console.log('Agregando al carrito:', producto._id);
    const response = await axios.post(`${process.env.REACT_APP_API_CART_URL}/${producto._id}`);
    return response.data;
}