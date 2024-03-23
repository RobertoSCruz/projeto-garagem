import Footer from "./componentes/Footer";
import Header from "./componentes/Header";
import Serviços from "./paginas/Serviços";
import Home from "./paginas/Home"
import Login from "./paginas/Login"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Orçamento from "./paginas/Orçamento";
import Sign from "./paginas/Sign-up";


const App = () => {
  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/serviços" element={<Serviços />} />
        <Route path="/orçamento" element={<Orçamento />} />
        <Route path="/sign" element={<Sign />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App;