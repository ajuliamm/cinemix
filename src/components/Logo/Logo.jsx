import React from "react";
import { Image } from "./Styles";

const Logo = ({src, style}) => {
    return(
        <>
            <Image className={style} alt="Logo-cinemix" src={src}/>
        </>

    )
}
export default Logo;