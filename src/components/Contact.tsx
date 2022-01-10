import { useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";
import Swal from "sweetalert2";
import { TextField } from "@mui/material";

const schema = yup.object().shape({
    nombre: yup.string().required("Campo requerido"),
    email: yup.string().email("Debe ser un email valido").required("Campo requerido"),
    mensaje: yup.string().required("Campo requerido"),
});

function Contact() {
    const handleSendMail = async (values: any) => {
        await axios.post("/email", values);
        formik.values.email = "";
        formik.values.nombre = "";
        formik.values.mensaje = "";
        await Swal.fire({
            icon: "success",
            title: "Se ha mandado el correo satisfactoriamente",
        });
    };
    const formik = useFormik({
        validationSchema: schema,
        initialValues: {
            nombre: "",
            email: "",
            mensaje: "",
        },
        onSubmit: handleSendMail,
    });

    return (
        <div
            className="bg-gradient-to-r from-gray-500 to-gray-600 shadow-md"
            style={{ background: "whitesmoke" }}
        >
            <form
                onSubmit={formik.handleSubmit}
                className="container mx-auto flex flex-col items-center gap-5 pb-16 "
            >
                <p className="text-4xl pt-16">Contactanos</p>
                <div className="flex w-full flex-col items-center gap-10 pt-10">
                    <TextField
                        onChange={formik.handleChange("nombre")}
                        value={formik.values.nombre}
                        error={!!formik.errors.nombre}
                        helperText={formik.errors.nombre && formik.errors.nombre}
                        className="w-1/3 bg-transparent border-b-2 border-b-black rounded-sm"
                        placeholder="Nombre"
                        label="Nombre"
                    />
                    <TextField
                        onChange={formik.handleChange("email")}
                        value={formik.values.email}
                        error={!!formik.errors.email}
                        helperText={formik.errors.email && formik.errors.email}
                        className="w-1/3 bg-transparent border-b-2 border-b-black rounded-sm"
                        placeholder="Correo Electronico"
                        label="Correo Electronico"
                    />
                    <TextField
                        onChange={formik.handleChange("mensaje")}
                        value={formik.values.mensaje}
                        error={!!formik.errors.mensaje}
                        helperText={formik.errors.mensaje && formik.errors.mensaje}
                        className="w-1/3 bg-transparent border-b-2 border-b-black rounded-sm"
                        placeholder="Mensaje"
                        label="Mensaje"
                    />
                </div>
                <button
                    type="submit"
                    className="px-10 py-3 mt-6 bg-green-700 rounded-sm hover:bg-green-800 text-white"
                >
                    Enviar
                </button>
            </form>
        </div>
    );
}

export default Contact;
