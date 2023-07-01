import React from "react";
import { Container, Main, Title, ContainerTech, DivTech, Span, Img} from "./Styles"
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import DevImg from "../../Img/ImgDev.svg"



const Dev = () => {
    return(
        <Container>
            <Header/>
            <Main>
                <Img src={DevImg}/>
                <Title>Meu nome é Angelina Julia Melo</Title>
                <Title>Sou Desenvolvedora Web | Front-end</Title>
                <ContainerTech>
                    <DivTech><Span>JavaScript</Span></DivTech>
                    <DivTech><Span>React</Span></DivTech> 
                    <DivTech><Span>HTML</Span></DivTech>
                    <DivTech><Span>CSS</Span></DivTech>
                </ContainerTech>

            </Main>
            <Footer/>
            
        </Container>
    )

}
export default Dev;