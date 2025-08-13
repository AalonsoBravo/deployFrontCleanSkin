import "../css/SNosotros.css";
import Tarjetas from "./Tarjetas";
import { useState, useEffect } from "react";

const Personajes = () => {

    const [personaje, setPersonaje] = useState([]);

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character")
        .then(response => response.json())
        .then( response => setPersonaje(response.results))
        .catch(console.error());
    }, [])

    const imprimir = () => {
    console.log(personaje);
    }
    return (
        <>
            <main className="NMain">
                <div className="Tittle">
                    <h1 className="TittleAnimation">Personajes de API de terceros</h1>
                </div>
                <section className="AboutUs">
                    <Tarjetas personajes={personaje}/>
                </section>
                <button type="button" onClick={imprimir}>
                    Imprimir dato
                </button>
            </main>
        </>
    )
};

export default Personajes;