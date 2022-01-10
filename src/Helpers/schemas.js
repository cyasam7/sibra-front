import * as Yup from "yup";

export const Productos = Yup.object().shape({
    nombre: Yup.string()
        .min(5, "El nombre es muy corto")
        .max(20, "El nombre es muy largo")
        .required("Campo requerido"),
    cantidad: Yup.number().required("Campo Requerido"),
    precio: Yup.number("Debe ser un numero").required("Campo Requerido"),
    valorUnitario: Yup.string().required("Campo Requerido"),
});
export const usuario = Yup.object().shape({
    nombre: Yup.string()
        .min(5, "El nombre es muy corto")
        .max(50, "El nombre es muy largo")
        .required("Campo requerido"),
    email: Yup.string().email("Correo no valido").required("Campo Requerido"),
    password: Yup.string().min(7, "Contraseña muy corta").required("Campo Requerido"),
    rol: Yup.string().required("Campo Requerido"),
});
export const prestamo = Yup.object().shape({
    nombre: Yup.string()
        .min(5, "El nombre es muy corto")
        .max(50, "El nombre es muy largo")
        .required("Campo requerido"),
    turno: Yup.string().required("Campo Requerido"),
    matricula: Yup.string().required("Campo Requerido"),
    rol: Yup.string().required("Campo Requerido"),
});
export const entrega = Yup.object().shape({
    nombre: Yup.string()
        .min(5, "El nombre es muy corto")
        .max(50, "El nombre es muy largo")
        .required("Campo requerido"),
    turno: Yup.string().required("Campo Requerido"),
    area: Yup.string().required("Campo Requeido"),
    observacion: Yup.string().max(200, "Maximo de caracteres."),
});
export const mensaje = Yup.object().shape({
    nombre: Yup.string()
        .min(5, "El nombre es muy corto")
        .max(50, "El nombre es muy largo")
        .required("Campo requerido"),
    direccion: Yup.string().required("Campo Requerido"),
    tipoTramite: Yup.string().required("Campo Requeido"),
});

export const documentos = Yup.object().shape({
    dependencia: Yup.string()
        .min(5, "El nombre es muy corto")
        .max(50, "El nombre es muy largo")
        .required("Campo requerido"),
    titulo: Yup.string()
        .min(5, "El nombre es muy corto")
        .max(50, "El nombre es muy largo")
        .required("Campo requerido"),
    descripcion: Yup.string()
        .min(5, "El nombre es muy corto")
        .max(245, "El nombre es muy largo")
        .required("Campo requerido"),
    fecha: Yup.string().required("Campo requerido"),
    carpeta: Yup.string().required("Campo requerido"),
});
