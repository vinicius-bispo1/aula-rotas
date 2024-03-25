import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Sobre from "./page/Sobre";
import Contato from "./page/Contato";
import Header from "./components/Header";

export default function RoutesApp() {
  return (
    <>
    <BrowserRouter>
     <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="Sobre" element={<Sobre/>} />
      <Route path="Contato" element={<Contato/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}
