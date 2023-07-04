import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, LogoNavArea } from "./Styles";
import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";
import Input from "../Input/Input";
import LogoCinemix from "../../Img/CINEMIF_LINEAR-removebg-preview.png"

const Header = () => {
    const navigate = useNavigate();
    return(
        <Container>
            <LogoNavArea>
                <Logo src={LogoCinemix} onClick={()=>navigate("/")}/>
                <Navbar/>
            </LogoNavArea>
            <Input/>                 
        </Container>

    )
}
export default Header;