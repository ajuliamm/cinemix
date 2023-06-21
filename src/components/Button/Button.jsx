import React from "react";
import { Btn } from "./Styles";

const Button = ({onClick,  typeBtn, textBtn}) => {
    return(
        <>
        <Btn className={typeBtn} onClick={onClick}> {textBtn} </Btn>
        </>

    )
}
export default Button;