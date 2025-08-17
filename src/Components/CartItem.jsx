import React from "react";
import "../css/Global.css"

const CartItem = ({ item, onDelete }) => {
    const handleDelete = () => {
        onDelete(item.id); // delega la lógica al padre
    };

    return (
        <tr className="CartItem">
            <td>
                {item.imagenUrl && (
                    <img
                        src={item.imagenUrl}
                        alt={item.nombre}
                        width="60"
                        height="60"
                        style={{ objectFit: "cover", borderRadius: "6px" }}
                    />
                )}
            </td>
            <td>{item.nombre}</td>
            <td>${item.precio.toFixed(2)}</td>
            <td>{item.cantidad}</td>
            <td>${item.subtotal.toFixed(2)}</td>
            <td className="eliminarDeCarrito">
                <button onClick={handleDelete}>
                    Eliminar
                </button>
            </td>
        </tr>
    );
};

export default CartItem;

