import React from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { IconButton, TextField } from "@mui/material";

interface IProps {
    value: string;
    index: number;
    add: Function;
    remove: Function;
    change: Function;
}
function DinamicInputs({ value, index, add, remove, change }: IProps) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        change(e.target.value, index);
    };
    const handleAdd = () => {
        add("");
    };
    const handleRemove = () => {
        remove(index);
    };
    return (
        <div className="flex gap-4">
            <TextField
                label="Cuartos"
                value={value}
                onChange={handleChange}
                variant="outlined"
                fullWidth
            />
            <div className="flex gap-4">
                <IconButton onClick={handleAdd}>
                    <AddIcon />
                </IconButton>
                {index !== 0 && (
                    <IconButton onClick={handleRemove}>
                        <RemoveIcon />
                    </IconButton>
                )}
            </div>
        </div>
    );
}

export default DinamicInputs;
