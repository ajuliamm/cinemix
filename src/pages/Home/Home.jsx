import React from "react";
import { Container, H1, H4, Main, Div} from "./Styles";
import Header from "../../components/Header/Header";
import Input from "../../components/Input/Input";
import ChooseArea from "./components/ChooseArea/ChooseArea";

const Home = () => {
    return(
        <Container>
            <Header/>
            <Main>
                <Div>
                    <H1>Bem vindo(a).</H1>
                    <H4>Escolhemos o que você vai assistir hoje. Milhões de série e filmes para você explorar.</H4>
                    <Input styles="inputMobile" />
                </Div>
                <ChooseArea/>
            </Main>
        </Container>

    )
}
export default Home;