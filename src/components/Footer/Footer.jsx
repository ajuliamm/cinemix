import React from "react";
import {Container, Text, DivIcon} from "./Styles"
import { useNavigate } from "react-router-dom";
import Logo from "../Logo/Logo"
import LogoCinemix from "../../Img/CINEMIF_LINEAR-removebg-preview.png"

const Footer = ({style}) => {
    const navigate = useNavigate();
    return(
        <Container className={style}>
            <Logo style="footer" src={LogoCinemix}/>
            <Text>® 2023, Angelina Melo. All rights reserved</Text>
            <DivIcon className="container">
                <DivIcon onClick={()=>navigate("/Dev")} className="icon"><i className="bi bi-person-workspace"></i></DivIcon>
                <DivIcon className="icon"><a href="https://github.com/ajuliamm" target="_blank" rel="noreferrer"><i className="bi bi-github"></i></a></DivIcon>
                <DivIcon className="icon"><a href="https://www.linkedin.com/in/angelinamelo/" target="_blank" rel="noreferrer"><i className="bi bi-linkedin"></i></a></DivIcon>
            </DivIcon>
        </Container>
    )
}
export default Footer;