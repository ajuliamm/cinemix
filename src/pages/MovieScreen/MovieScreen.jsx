import React from "react";
import { Container, H2, Text, Main, Div, BtnArea, MovieArea, CardMovie } from "./Styles";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import SelectGenders from "../../components/Select/SelectGender/Select";
import SectionMovies from "../../components/SectionMovies/SectionMovies";

const MovieScreen = () => {
    return(
        <Container>
            <Header/>
            <Main>
                <Div>
                    <BtnArea>
                        <H2>Separamos os filmes mais bem avaliados para você.</H2>
                        <Button textBtn="SORTEAR FILME" typeBtn="BtnPink"/>
                        <Text>Ou escolha a categoria do seu filme</Text>
                        <SelectGenders/>
                    </BtnArea>  
                    <MovieArea>
                        <CardMovie>
                            <Text className="movie">?</Text>
                        </CardMovie>
                        
                    </MovieArea>                  
                </Div>
                <SectionMovies/>
            </Main>
        </Container>

    )
}
export default MovieScreen;