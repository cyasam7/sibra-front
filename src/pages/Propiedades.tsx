import {
    Card,
    CardContent,
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import CardPropiedad from "../components/CardPropiedad";
import { IPropiedad } from "../components/CardPropiedadMenu";

function Propiedades() {
    const [Items, setItems] = useState<IPropiedad[]>([]);
    useEffect(() => {
        (async () => {
            const { data } = await axios.get(`/propiedad`);
            setItems(data);
        })();
    }, []);
    return (
        <div className="full-w pb-10" style={{ background: "#00196c" }}>
            <div className="container mx-auto mt-10">
                <Card>
                    <CardContent>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Categorias</FormLabel>
                            <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
                                <FormControlLabel
                                    value="male"
                                    control={<Radio />}
                                    label="Terrenos"
                                />
                                <FormControlLabel value="other" control={<Radio />} label="Casas" />
                            </RadioGroup>
                        </FormControl>
                    </CardContent>
                </Card>
                <div className="grid grid-cols-1 gap-4 mt-10">
                    {Items.map((i: any, index: number) => (
                        <CardPropiedad key={index} item={i} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Propiedades;
