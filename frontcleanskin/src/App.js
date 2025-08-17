import Home from "./pages/Home";
import Footer from "./Components/Footer";
import Navegacion from "./Components/Navegacion";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
import Carrito from "./pages/Carrito";
import Alta from "./pages/Alta";
import Login from "./pages/Login";
import Error from "./pages/Error";
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
      <Route path="/carrito" element={<Carrito/>}></Route>
      <Route path="*" element={<Error/>}></Route>
    </Routes>
    <Footer />
    </>
  );
}

export default App;
