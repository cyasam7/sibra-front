import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import CardPropiedadMenu, { IPropiedad } from "../components/CardPropiedadMenu";

function MenuPropiedades() {
    const [Items, setItems] = useState<Array<IPropiedad>>([]);

    useEffect(() => {
        (async () => {
            const { data } = await axios.get("/propiedad");
            setItems(data);
        })();
    }, []);

    const handleDelete = (id: string) => {
        Swal.fire({
            title: "¿Seguro que desea eliminar?",
            text: "Se va eliminar la propiedad",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Si, borrar.",
            cancelButtonText: "No, cancelar.",
            reverseButtons: true,
        }).then(async (result) => {
            if (result.isConfirmed) {
                await axios.delete(`/propiedad/${id}`);
                const newAreas = Items.filter((item) => item._id !== id);
                setItems(newAreas);
                Swal.fire("Borrado!", "Se ha borrado correctamente", "success");
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire("Cancelado", "No se borro", "error");
            }
        });
    };

    return (
        <div className="w-full ">
            <div className="w-full flex justify-end mb-2">
                <Link
                    to="agregar"
                    className="text-white px-2 py-3 bg-green-600 rounded-sm hover:bg-green-800"
                >
                    Agregar
                </Link>
            </div>

            <div className="w-full grid grid-cols-3 gap-4 ">
                {Items.map((i, index) => (
                    <CardPropiedadMenu key={index} item={i} deleteF={handleDelete} />
                ))}
            </div>
        </div>
    );
}

export default MenuPropiedades;
