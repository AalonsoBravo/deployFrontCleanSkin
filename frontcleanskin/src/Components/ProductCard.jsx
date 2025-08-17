import Swal from "sweetalert2";

const ProductCard = ({ producto, agregarAlCarrito }) => {
    const { nombre, precio, imagenUrl, cantidad, categoria } = producto;

    const handleAddToCart = async () => {
        const result = await agregarAlCarrito(producto);
        if (result) {
            Swal.fire({
                icon: "success",
                title: "Producto agregado",
                text: `${nombre} ha sido agregado al carrito.`,
            });
        } else {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "No se pudo agregar el producto al carrito.",
            });
        }
    };

    return (
        <div className="Card">
            <figure className="Card-image">
                <img src={imagenUrl} alt={nombre} />
            </figure>

            <div className="CardCont">
                <h2>{nombre}</h2>
                <p>${precio}</p>
                <p className="categoria">{categoria}</p>
                {cantidad > 0 ? (
                    <button className="btn" onClick={handleAddToCart}>
                        Add to cart
                    </button>
                ) : (
                    <button className="btn disabled" disabled>
                        Out of stock
                    </button>
                )}
            </div>
        </div>
    );
};

export default ProductCard;
