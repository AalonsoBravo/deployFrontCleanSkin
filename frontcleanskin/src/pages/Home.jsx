import { useEffect, useState } from 'react';
import ProductCard from '../Components/ProductCard';
import { obtenerProductos } from '../services/productService';
import { agregarAlCarrito } from '../services/cardService';
import "../css/Sindex.css";
import "../css/Global.css";

const Home = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        obtenerProductos()
            .then((data) => setProductos(data.productos))
            .catch((err) => console.error('Error al cargar productos:', err));
    }, []);

    return (
        <main className="IMain">
            <div className="Tittle">
                <h1 className="TittleAnimation">Welcome to CLEAN SKIN</h1>
            </div>

            <section className="Cards">
                {productos.map((producto) => (
                    <ProductCard
                        key={producto._id}
                        producto={producto}
                        agregarAlCarrito={agregarAlCarrito}
                    />
                ))}
            </section>
        </main>
    );
};

export default Home;
