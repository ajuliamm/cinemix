import React from "react";
import {Container, Text, DivIcon} from "./Styles"
import Logo from "../Logo/Logo"
import LogoCinemix from "../../Img/CINEMIF_LINEAR-removebg-preview.png"

const Footer = ({style}) => {
    return(
        <Container className={style}>
            <Logo style="footer" src={LogoCinemix}/>
            <Text>® 2023, Angelina Melo. All rights reserved</Text>
            <DivIcon className="container">
                <DivIcon className="icon"><a href=""><i className="bi bi-person-workspace"></i></a></DivIcon>
                <DivIcon className="icon"><a href="https://github.com/ajuliamm" target="_blank"><i className="bi bi-github"></i></a></DivIcon>
                <DivIcon className="icon"><a href="https://www.linkedin.com/in/angelinamelo/" target="_blank"><i className="bi bi-linkedin"></i></a></DivIcon>
            </DivIcon>
        </Container>
    )
}
export default Footer;