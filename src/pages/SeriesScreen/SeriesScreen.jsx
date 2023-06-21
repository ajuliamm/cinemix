import React from "react";
import { Container, H2, Text, Main, Div, BtnArea, MovieArea, CardMovie } from "./Styles";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import SelectGenders from "../../components/Select/SelectGender/Select";

const SeriesScreen = () => {
    return(
        <Container>
            <Header/>
            <Main>
                <Div>
                    <BtnArea>
                        <H2>Separamos as séries mais bem avaliados para você.</H2>
                        <Button textBtn="SORTEAR SÉRIE" typeBtn="BtnPink"/>
                        <Text>Ou escolha a categoria da sua série</Text>
                        <SelectGenders/>
                    </BtnArea>  
                    <MovieArea>
                        <CardMovie>
                            <Text className="movie">?</Text>
                        </CardMovie>
                        
                    </MovieArea>                  
                </Div>                
            </Main>
        </Container>

    )
}
export default SeriesScreen;