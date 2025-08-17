import "../css/Global.css";
import "../css/Cart.css";
import { useEffect, useState } from "react";
import axios from "axios";
import CartItem from "../Components/CartItem";
import Swal from "sweetalert2";

const CarritoPage = () => {
    const [carrito, setCarrito] = useState([]);
    const [loading, setLoading] = useState(true);
    const [carritoId, setCarritoId] = useState(null);

    const fetchItems = async () => {
        try {
            const response = await axios.get(process.env.REACT_APP_API_CART_SHOW_URL);
            const productos = response.data?.carrito?.productos ?? [];
            setCarrito(productos);
            setCarritoId(response.data?.carrito?.id || null);
        } catch (error) {
            console.error("Error al obtener el carrito:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchItems();
    }, []);

    const handleDeleteItem = async (productoId) => {
        try {
            console.log(`Eliminando producto con ID: ${productoId}`);
            await axios.delete(`${process.env.REACT_APP_API_CART_DELETE_URL}/${productoId}`);
            Swal.fire({
                icon: "success",
                title: "Producto eliminado",
                text: "El producto ha sido eliminado del carrito.",
                timer: 1500,
                showConfirmButton: false,
            });
            await fetchItems(); // refresca desde backend
        } catch (error) {
            console.error("Error al eliminar producto del carrito:", error);
        }
    };

    const handleVaciarCarrito = async (carritoId) => {
        console.log(`Vaciar carrito con ID: ${carritoId}`);

        try {
            console.log(`Vaciando carrito con ID: ${carritoId}`);
            await axios.put(`${process.env.REACT_APP_API_CART_EMPTY_URL}`, { carritoId });
            await fetchItems();
        } catch (error) {
            console.error("Error al vaciar el carrito:", error);
            Swal.fire({
                icon: "error",
                title: "Error al vaciar el carrito",
                text: "No se pudo vaciar el carrito. Inténtalo de nuevo más tarde.",
            });
        }
    };

    const calcularTotal = () => {
        return carrito.reduce((acc, item) => acc + item.subtotal, 0);
    };

    return (
        <main className="IMain">
            <div className="CarritoPage">
                <div className="Tittle">
                    <h1 className="TittleAnimation">Tu carrito 🛒</h1>
                </div>
                {loading ? (
                    <p>Cargando carrito...</p>
                ) : carrito.length === 0 ? (
                    <p>El carrito está vacío.</p>
                ) : (
                    <>
                        <div className="CartTableContainer">
                            <table className="CartTable">
                                <thead>
                                    <tr>
                                        <th>Imagen</th>
                                        <th>Producto</th>
                                        <th>Precio</th>
                                        <th>Cantidad</th>
                                        <th>Subtotal</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {carrito.map((item) => (
                                        <CartItem key={item.id} item={item} onDelete={handleDeleteItem} />
                                    ))}
                                </tbody>
                            </table>
                            <div className="cartButtons">
                                <h3 className="CartTotal">Total: ${calcularTotal().toFixed(2)}</h3>
                                <button className="CartEliminar" onClick={() => {
                                    handleVaciarCarrito(carritoId);
                                    Swal.fire({
                                        icon: "success",
                                        title: "Carrito vaciado",
                                        text: "Todos los productos han sido eliminados del carrito.",
                                        timer: 1500,
                                        showConfirmButton: false,
                                    });
                                }}>
                                    Vaciar carrito
                                </button>
                                <button className="CartComprar" onClick={() => {
                                    Swal.fire({
                                        icon: 'success',
                                        title: 'Compra Exitosa',
                                        text: 'Gracias por tu compra!',
                                    });
                                    handleVaciarCarrito(carritoId);
                                }}>
                                    Comprar
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </main>
    );
};

export default CarritoPage;
