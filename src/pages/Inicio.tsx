import { useState } from "react";
import heroImage from "../static/SibraDurango.png";
import example1 from "../static/example1.jpeg";
import example2 from "../static/example2.jpeg";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Inicio() {
    const [Panel, setPanel] = useState<string>("panel0");
    const images = [example1, example2, example1, example2, example1, example2];

    const handleChangePanel = (string: string) => () => {
        setPanel(string);
    };

    const preguntas = [
        {
            question: "¿Que tipo de servicios brindan?",
            answer: "Brindamos un servicio de soluciones inteligentes en bienes raices, nos dedicamos al asesoramiento de venta y compra de terrenos y casas, también brindamos asesoramiento juridico, venta de lotes, asesoria hipotecaria, juicios testamentarios. Para una solución más precisa a tu problema puedes contactarnos en la pestaña de contacto.",
        },
        {
            question: "Como puedo realizar una compra?",
            answer: "Para la realización de una compra es necesario realizar una cita a traves de correo electronico o la pagina oficial de Facebook Sibra, comentarnos cual seria tu lote de interes y proceder a una cita presencial en las oficinas de: Blvd. Domingo Arrieta #1302 Col. Juan de la Barrera ",
        },
    ];

    return (
        <div className="full-w pb-10" style={{ background: "#00196c" }}>
            <img className="gfg" src={heroImage} alt="heroImage" />
            <div className="container mx-auto mt-12">
                <p className="text-white text-6xl text-center">Propiedades Disponables</p>
                <p className="text-white text-xl text-center mt-5">
                    Sibra Durango le brinda una galeria de imagenes disponibles de terrenos para
                    adquisición inmediata.
                </p>
                <div className="grid grid-cols-3 justify-items-center gap-4 mt-8">
                    {images.map((i, index) => (
                        <div className="col-span-1">
                            <img key={index} src={i} alt="i" width="320px" height="222px" />
                        </div>
                    ))}
                </div>
                <div className="mt-10">
                    <p className="text-center text-2xl text-white">Preguntas Frecuentes</p>
                    <p className="text-center text-2xl text-white mb-10">
                        ¿Tienes Dudas? Aquí podemos resolverte algunas de ellas.
                    </p>
                    {preguntas.map((i, index) => (
                        <Accordion
                            expanded={Panel === `panel${index}`}
                            onChange={handleChangePanel(`panel${index}`)}
                        >
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography>{i.question}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>{i.answer}</Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Inicio;
