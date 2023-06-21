import React from "react";
import { Container, LogoNavArea } from "./Styles";
import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";
import Input from "../Input/Input";
import LogoCinemix from "../../Img/CINEMIF_LINEAR-removebg-preview.png"

const Header = () => {
    return(
        <Container>
            <LogoNavArea>
                <Logo src={LogoCinemix}/>
                <Navbar/>
            </LogoNavArea>
            <Input/>                 
        </Container>

    )
}
export default Header;