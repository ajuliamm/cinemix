import React from "react";
import { useNavigate } from "react-router-dom";
import { H3, Div, Container } from "./Styles";
import Button from "../../../../components/Button/Button";

const ChooseArea = ({src}) => {
    const navigate = useNavigate();
    return(        
        <Container>
            <H3>O que você quer ver hoje?</H3>
                <Div>
                    <Button textBtn="Séries" typeBtn="seriesBtn" onClick={()=>navigate('/Series')}/>
                    <Button textBtn="Filmes" typeBtn="moviesBtn" onClick={()=>navigate('/Filmes')} />
                </Div>
        </Container>
        
    )
}
export default ChooseArea;