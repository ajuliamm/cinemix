import React from "react";
import { Image } from "./Styles";

const Logo = ({src, style, onClick}) => {
    return(
        <>
            <Image className={style} alt="Logo-cinemix" src={src} onClick={onClick}/>
        </>

    )
}
export default Logo;