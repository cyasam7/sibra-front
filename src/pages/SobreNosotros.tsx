import React from "react";
import Carousel, { ICarouselContent } from "../components/Carousel";
import NuestroEquipo from "../components/NuestroEquipo";

import carousel1 from "../static/carousel.jpeg";
import carousel2 from "../static/carousel2.jpeg";

function SobreNosotros() {
    const carouselImages = [
        {
            image: carousel1,
            title: "Asesoriamiento hipotecario",
            subtitle: "¿Problemas con tu hipoteca? no dudes en llamarnos",
        },
        {
            image: carousel2,
            title: "Asesoramiento Juridico",
            subtitle: "Si necesitas un asesor juridico, nosotros somos los mejores.",
        },
    ] as Array<ICarouselContent>;

    return (
        <div className="full-w pb-10" style={{ background: "#00196c" }}>
            <Carousel items={carouselImages} />
            <NuestroEquipo />
        </div>
    );
}

export default SobreNosotros;
