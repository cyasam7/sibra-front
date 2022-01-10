import { useState } from "react";
import TextField from "@mui/material/TextField";
import LocationPicker from "react-location-picker";
import { Card, CardContent, MenuItem, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import ImageUpload from "./ImageUpload";
import DinamicInputs from "./DinamicInputs";
import axios from "axios";
import Swal from "sweetalert2";

const schema = yup.object().shape({
    nombre: yup.string("Texto").required("Campo requerido"),
    direccion: yup.string("Texto").required("Campo requerido"),
    tipo: yup.string("Texto").required("Campo requerido"),
    descripcion: yup.string("Texto").required("Campo requerido"),
});

const defaultPosition = {
    lat: 24.0162707,
    lng: -104.6630566,
};
const tipos = ["Propiedad", "Terreno"];

function FormPropiedades() {
    const navigate = useNavigate();
    const [Location, setLocation] = useState({ lat: 0, lng: 0 });
    const [Cuartos, setCuartos] = useState(["Agrega un nombre"]);
    const [ImagenesSec, setImagenesSec] = useState([]);
    const [ImagenPrim, setImagenPrim] = useState("");

    const handleLocationChange = ({ position }) => setLocation(position);
    const handleSetImagesSec = (data) => setImagenesSec(data);
    const handleSetImagePrim = (data) => setImagenPrim(data);

    const handleAddCuarto = (cuarto) => {
        setCuartos([...Cuartos, cuarto]);
    };

    const handleRemoveCuarto = (i) => {
        const newCuartos = Cuartos.filter((_, index) => index !== i);
        setCuartos(newCuartos);
    };
    const handleChange = (value, j) => {
        const indexObj = Cuartos.findIndex((_, index) => index === j);
        const newCuartos = [...Cuartos];
        newCuartos[indexObj] = value;
        setCuartos(newCuartos);
    };

    const formik = useFormik({
        initialValues: {
            nombre: "",
            direccion: "",
            tipo: "",
            descripcion: "",
        },
        validationSchema: schema,
        onSubmit: async (values) => {
            const data = {
                nombre: values.nombre,
                direccion: values.direccion,
                latitud: Location.lat,
                longitud: Location.lng,
                tipo: values.tipo,
                imgPrincipal: ImagenPrim,
                imgSecundarias: ImagenesSec,
                cuartos: Cuartos,
                descripcion: values.descripcion,
            };
            await axios.post("/propiedad", data);
            await Swal.fire({
                title: "Se guardo correctamente",
                icon: "success",
            });
        },
    });

    return (
        <div className="w-full flex flex-col gap-4">
            <TextField
                label="Nombre"
                value={formik.values.nombre}
                error={formik.errors.nombre > 0}
                helperText={formik.errors.nombre}
                onChange={formik.handleChange("nombre")}
                variant="outlined"
            />
            <TextField
                label="Direccion"
                value={formik.values.direccion}
                error={formik.errors.direccion > 0}
                helperText={formik.errors.direccion}
                onChange={formik.handleChange("direccion")}
                variant="outlined"
            />
            <LocationPicker
                containerElement={<div style={{ height: "100%" }} />}
                mapElement={<div style={{ height: "400px" }} />}
                zoom={14}
                defaultPosition={defaultPosition}
                onChange={handleLocationChange}
            />
            <TextField
                select
                label="Tipo"
                value={formik.values.tipo}
                error={formik.errors.tipo > 0}
                helperText={formik.errors.tipo ? formik.errors.tipo : "Selecciona el tipo"}
                onChange={formik.handleChange("tipo")}
            >
                {tipos.map((option) => (
                    <MenuItem key={option} value={option}>
                        {option.toUpperCase()}
                    </MenuItem>
                ))}
            </TextField>
            <Typography variant="subtitle2" gutterBottom>
                Imagenes
            </Typography>
            <Card>
                <CardContent>
                    <Typography variant="subtitle2" gutterBottom>
                        Selecciona imagen principal
                    </Typography>
                    <ImageUpload change={handleSetImagePrim} />
                </CardContent>
            </Card>
            <Card>
                <CardContent>
                    <Typography variant="subtitle2" gutterBottom>
                        Selecciona imagenes secundarias
                    </Typography>
                    <ImageUpload multiline change={handleSetImagesSec} />
                </CardContent>
            </Card>
            <Typography variant="subtitle2" gutterBottom>
                Lista de cuartos
            </Typography>
            {Cuartos.map((i, index) => (
                <DinamicInputs
                    key={index}
                    index={index}
                    add={handleAddCuarto}
                    remove={handleRemoveCuarto}
                    change={handleChange}
                    value={i}
                />
            ))}
            <TextField
                label="Descripcion"
                multiline
                value={formik.values.descripcion}
                error={formik.errors.descripcion > 0}
                helperText={formik.errors.descripcion}
                onChange={formik.handleChange("descripcion")}
                rows={5}
                variant="outlined"
            />
            <div className="w-full flex justify-end gap-4">
                <button
                    onClick={() => navigate("/admin/propiedades/", { replace: true })}
                    className="text-white px-2 py-3 bg-yellow-600 rounded-sm hover:bg-yellow-800"
                >
                    Volver
                </button>
                <button
                    onClick={formik.handleSubmit}
                    className="text-white px-2 py-3 bg-green-600 rounded-sm hover:bg-green-800"
                >
                    Guardar
                </button>
            </div>
        </div>
    );
}

export default FormPropiedades;
