import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IPropiedad } from "../components/CardPropiedadMenu";
import MapPropiedad from "../components/MapPropiedad";

import example from "../static/example1.jpeg";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
    width: "100%",
    height: "400px",
};

function Propiedad() {
    const { id } = useParams();
    const [Propiedad, setPropiedad] = useState<IPropiedad>({
        _id: "",
        nombre: "",
        direccion: "",
        latitud: 0,
        longitud: 0,
        tipo: "",
        imgPrincipal: "",
        imgSecundarias: [""],
        cuartos: [""],
        descripcion: "",
    });
    const [Finished, setFinished] = useState(false);
    useEffect(() => {
        (async () => {
            const { data } = await axios.get(`/propiedad/${id}`);
            console.log(data);
            setPropiedad(data);
            setFinished(!Finished);
        })();
    }, [id]);

    return (
        <div className="full-w pb-10 min-h-screen" style={{ background: "#00196c" }}>
            <div className="container mx-auto mt-10">
                <p className="text-center text-4xl text-white">{Propiedad.nombre.toUpperCase()}</p>
                <div className="flex gap-10 items-center">
                    <div>
                        <div className="flex justify-center mt-4">
                            <img
                                src={Propiedad.imgPrincipal ? Propiedad.imgPrincipal : example}
                                style={{ textAlign: "center", width: 1000 }}
                                alt=""
                            />
                        </div>
                        <div className="flex justify-center gap-2 mt-1 flex-wrap">
                            {[Propiedad.imgPrincipal, ...Propiedad.imgSecundarias].map(
                                (i, index) => (
                                    <img key={index} src={i} alt="" style={{ width: 75 }} />
                                )
                            )}
                        </div>
                    </div>
                    <div>
                        <div className="p-3 text-white">
                            <ul className="list-disc">
                                {Propiedad.cuartos.map((i, index) => (
                                    <li key={index}>{i}</li>
                                ))}
                            </ul>
                        </div>
                        <p className="text-white">{Propiedad.descripcion}</p>
                    </div>
                </div>
                <p className="text-white text-center text-3xl mt-4">Ubicacion</p>
                <div className="flex justify-center mt-4">
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={{ lat: Propiedad.latitud, lng: Propiedad.longitud }}
                        zoom={12}
                    >
                        <Marker position={{ lat: Propiedad.latitud, lng: Propiedad.longitud }} />
                    </GoogleMap>
                </div>
            </div>
        </div>
    );
}

export default Propiedad;
