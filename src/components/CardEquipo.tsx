import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Chip } from "@mui/material";

export interface IEquipo {
    image: string;
    nombre: string;
    descripcion: string;
    puesto: string;
}

interface Props {
    item: IEquipo;
}

const CardEquipo: React.FC<Props> = ({ item }) => {
    return (
        <Card sx={{ maxWidth: 400 }}>
            <CardMedia
                component="img"
                sx={{ maxHeight: "400px" }}
                image={item.image}
                alt={item.nombre}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {item.nombre}
                </Typography>
                <div className="flex gap-2 mb-2">
                    <Chip label={item.puesto} color="primary" variant="filled" />
                </div>
                <Typography variant="body2" color="text.secondary">
                    {item?.descripcion}
                </Typography>
            </CardContent>
        </Card>
    );
};
export default CardEquipo;
