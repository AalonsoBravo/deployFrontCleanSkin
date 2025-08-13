import Home from "./Componentes/Home";
import Footer from "./Componentes/Footer";
import Navegacion from "./Componentes/Navegacion";
import Nosotros from "./Componentes/Nosotros";
import Contacto from "./Componentes/Contacto";
import Alta from "./Componentes/Alta";
import Login from "./Componentes/Login";
import Productos from "./Componentes/Productos";
import Personajes from "./Componentes/Personajes";
import PadreUno from "./Componentes/PadreUno";
import ChatIA from "./Componentes/ChatIA";
import Error from "./Componentes/Error";
import CrudItems from "./Componentes/CrudItems";
import {Routes, Route} from "react-router-dom";


function App() {
  return (
    <>
    <Navegacion />
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/alta" element={<Alta/>}></Route>
      <Route path="/nosotros" element={<Nosotros/>}></Route>
      <Route path="/contacto" element={<Contacto/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/productos" element={<Productos/>}></Route>
      <Route path="/personaje" element={<Personajes/>}></Route>
      <Route path="/props" element={<PadreUno/>}></Route>
      <Route path="/chatia" element={<ChatIA/>}></Route>
      <Route path="/sql" element={<CrudItems/>}></Route>
      <Route path="*" element={<Error/>}></Route>
    </Routes>
    <Footer />
    </>
  );
}

export default App;
