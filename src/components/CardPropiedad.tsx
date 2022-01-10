import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import PatioIcon from "@mui/icons-material/Deck";
import BedroomParentIcon from "@mui/icons-material/BedroomParent";
import BedroomChildIcon from "@mui/icons-material/BedroomChild";
import KitchenIcon from "@mui/icons-material/Countertops";
import BathtubIcon from "@mui/icons-material/Bathtub";
import JardinIcon from "@mui/icons-material/Fence";
import ComedorIcon from "@mui/icons-material/Dining";

import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { IPropiedad } from "./CardPropiedadMenu";
/* import example2 from "../static/example2.jpeg" */

interface IProps {
    item: IPropiedad;
}

function CardPropiedad({ item }: IProps) {
    console.log(item);
    const icons = [
        <PatioIcon />,
        <BedroomParentIcon />,
        <BedroomChildIcon />,
        <KitchenIcon />,
        <BathtubIcon />,
        <JardinIcon />,
        <ComedorIcon />,
    ];

    return (
        <Card sx={{ display: "flex" }}>
            <CardMedia
                component="img"
                sx={{ maxWidth: 500, width: 500 }}
                image={item.imgPrincipal}
                alt="Live from space album cover"
            />
            <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography component="div" variant="h5">
                        {item.nombre}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {item.direccion}
                    </Typography>
                    <div className="p-3">
                        <ul className="list-disc">
                            {item.cuartos.map((i, index) => (
                                <li key={index}>{i}</li>
                            ))}
                        </ul>
                    </div>
                    <p>{item.descripcion}</p>
                </CardContent>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        p: 1,
                        justifyContent: "space-between",
                    }}
                >
                    <div>
                        {icons.map((i, index) => (
                            <IconButton key={index} aria-label="previous">
                                {i}
                            </IconButton>
                        ))}
                    </div>
                    <div className="flex gap-4 ">
                        <Link to={`/propiedad/${item._id}`}>
                            <Button>Ver mas</Button>
                        </Link>
                        <Button>Contactar</Button>
                    </div>
                </Box>
            </Box>
        </Card>
    );
}

export default CardPropiedad;
