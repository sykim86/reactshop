import React from "react";
import { BrowserRouter } from "react-router-dom";
import Title from "./Title";

const Root=()=>{
    return (
        <BrowserRouter>
            <Title />
        </BrowserRouter>
    )
}
export default Root;