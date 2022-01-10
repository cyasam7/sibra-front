import React from "react";
import { Card, CardContent } from "@mui/material";
import ceoImage from "../static/ceo.jpeg";
import CardEquipo, { IEquipo } from "./CardEquipo";

import equipo1 from "../static/equipo1.jpeg";
import equipo2 from "../static/equipo2.jpg";

function NuestroEquipo() {
    const equipo = [
        {
            image: equipo1,
            nombre: "Natalia Vargas",
            descripcion:
                "Encargada del area de ventas en terrenos, si lo que quieres es un terreno no dudes en contactarme.",
            puesto: "Gerente General",
        },
        {
            image: equipo2,
            nombre: "Aric Ruiz",
            descripcion: "Diseñador web, encargado del area digital y tecnologica de la empresa.",
            puesto: "Diseñador Web",
        },
    ] as Array<IEquipo>;

    return (
        <div className="container mx-auto mt-10">
            <div className="flex justify-center">
                <Card sx={{ maxWidth: 1000 }}>
                    <CardContent>
                        <div className="flex gap-10 p-10 items-center justify-center">
                            <figure style={{ width: "300px", height: "229px" }}>
                                <img
                                    src={ceoImage}
                                    style={{ borderRadius: "100%", width: "100%", height: "100%" }}
                                    alt=""
                                />
                            </figure>
                            <div className="flex flex-col">
                                <p className="text-4xl mb-1">Claudia Pulgarin </p>
                                <p className="italic  mb-4">CEO</p>
                                <p className="mb-2">
                                    Mi objetivo siempre ha sido hacer las cosas diferente, tratar de
                                    mejorar la vida de las personas brindandoles el mejor servicio!
                                </p>
                                <p className="mb-4">
                                    Para una consulta personal Mi numero es: 618........
                                </p>
                                <button className="bg-green-800 text-white px-6 py-2 rounded-lg hover:bg-green-700">
                                    Contactame
                                </button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
            <p className="text-center text-white mt-10 text-4xl font-bold">
                Conoce a nuestro equipo
            </p>
            <div className="grid grid-cols-2 gap-10 justify-items-center mt-5">
                {equipo.map((i, index) => (
                    <CardEquipo key={index} item={i} />
                ))}
            </div>
        </div>
    );
}

export default NuestroEquipo;
