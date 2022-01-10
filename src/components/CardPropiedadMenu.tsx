import { Button, Card, CardActions, CardContent, CardMedia, Chip, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export interface IPropiedad {
    _id: string;
    nombre: string;
    direccion: string;
    latitud: number;
    longitud: number;
    tipo: string;
    imgPrincipal: string;
    imgSecundarias: Array<string>;
    cuartos: Array<string>;
    descripcion: string;
}
interface IProp {
    item: IPropiedad;
    deleteF: Function;
}

function CardPropiedadMenu({ item, deleteF }: IProp) {
    return (
        <Card sx={{ maxWidth: 400 }}>
            <CardMedia
                component="img"
                sx={{ maxHeight: "400px" }}
                image={item.imgPrincipal}
                alt={item.nombre}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {item.nombre}
                </Typography>
                <div className="flex gap-2 mb-2">
                    <Chip label={item.tipo} color="primary" variant="filled" />
                </div>
                <Typography variant="body2" color="text.secondary">
                    {item?.descripcion}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={() => deleteF(item._id)}>
                    Eliminar
                </Button>
                <Link to={`/admin/propiedades/editar/${item._id}`}>
                    <Button size="small">Editar</Button>
                </Link>
            </CardActions>
        </Card>
    );
}

export default CardPropiedadMenu;
