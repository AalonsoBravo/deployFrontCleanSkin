import "../css/SAlta.css";

import HijoUno from "./HijoUno"

const PadreUno = (props) => {

    const saludar = "Paso de parametros llamados props en react";

    return (
        <HijoUno saludar={saludar} />
    )
}

export default PadreUno