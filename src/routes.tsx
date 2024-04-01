import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Catalog from "./components/pages/catalog/Ctalog";
import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";

export default function MainRoutes() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/catalog" element={<Catalog/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}