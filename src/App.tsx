import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Inicio from "./pages/Inicio";
import Propiedades from "./pages/Propiedades";
import SobreNosotros from "./pages/SobreNosotros";
import Propiedad from "./pages/Propiedad";
import Login from "./pages/Login";
import MenuPropiedades from "./pages/MenuPropiedades";
import AgregarPropiedades from "./pages/AgregarPropiedades";
import EditarPropiedad from "./pages/EditarPropiedad";
import "bootstrap/dist/css/bootstrap.min.css";

export const routerMain = (
    <BrowserRouter>
        <Layout>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/propiedades" element={<Propiedades />} />
                <Route path="/sobre-nosotros" element={<SobreNosotros />} />
                <Route path="/propiedad/:id" element={<Propiedad />} />
                <Route path="/login" element={<Login />} />
                <Route path="/admin/propiedades" element={<MenuPropiedades />} />
                <Route path="/admin/propiedades/agregar" element={<AgregarPropiedades />} />
                <Route path="/admin/propiedades/editar/:id" element={<EditarPropiedad />} />
            </Routes>
        </Layout>
    </BrowserRouter>
);
