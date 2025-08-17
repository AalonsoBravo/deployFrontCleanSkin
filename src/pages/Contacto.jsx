import "../css/SContacto.css"
import "../css/Global.css";

const Contacto = () => {
    return (
        <>
            <main className="CMain">
                <div className="Tittle">
                    <h1 className="TittleAnimation">CONTACTANOS</h1>
                </div>

                <div className="Contact">
                    <form>
                        <div className="ContactForm">
                            <input type="text" id="name" name="name" placeholder="Nombre" required pattern="[A-Za-z\s]{3,60}" title="Name must have only letters and spaces, and be between 3 and 60 characters long."/>
                        </div>
                        <div className="ContactForm">
                            <input type="email" id="email" name="email" placeholder="Email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="Please, enter a valid email adress."/>
                        </div>
                        <div className="ContactForm">
                            <input type="tel" id="phone" name="phone" placeholder="Número de teléfono" pattern="[0-9]{10}" title="Please, enter a valid phone number."/>
                        </div>
                        <div className="ContactForm">
                            <textarea id="message" name="message" placeholder="Deja un mensaje" required></textarea>
                        </div>
                        <button type="submit">Enviar</button>
                    </form>
                </div>
            </main>
        </>
    )
};

export default Contacto;
