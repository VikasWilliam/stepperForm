import React from "react";
import { Button, TextField } from "@mui/material";
import "./FirstStep.css";

const FirstStep=()=>{

    return(
        <div className="parent_div">
            <TextField label="first Name" margin="normal" variant="outlined" color="secondary"/>
            <TextField label="first Name" margin="normal" variant="outlined" color="secondary"/>
            <TextField label="first Name" margin="normal" variant="outlined" color="secondary"/>
            <Button variant="contained" color="primary">Click me</Button>
        </div>
    )
}

export default FirstStep;