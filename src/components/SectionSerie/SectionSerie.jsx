import React, { useRef } from "react";
import { Container, H4, DivBtn, SectionCards, BtnArrow } from "./Styles";
import CardSerie from "../CardSerie/CardSerie"
import 'bootstrap-icons/font/bootstrap-icons.css';

const SectionSeries = ({series, title}) => {

    const carousel = useRef(null); 

    const handleLeftClick = (e)=>{
        e.preventDefault();
        // console.log(carousel.current.offsetWidth);
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    }
    const handleRightClick = (e)=>{
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth;

    }

    // if (!series || !series.length) return null;
    //se não haver dados ou esse array estiver vazio retorna null
    return(
        <Container>
            <H4>{title}</H4>
            <SectionCards ref={carousel}>
              {series.length === 0 && <p>Carregando...</p>}
                {series.length>0 && series.map(serie=> (
                    <CardSerie serie={serie} key={serie.id} />
                    //o flex para colocar um elemento ao lado do outro, ele tenta ocupar o espaço disponível. Para corrigir isso colocar flex:none no filho
                ))}            
            </SectionCards>
            <DivBtn>
                <BtnArrow onClick={handleLeftClick}><i className="bi bi-arrow-left-circle"></i></BtnArrow>
                <BtnArrow onClick={handleRightClick}><i className="bi bi-arrow-right-circle"></i></BtnArrow>
            </DivBtn>
            
        </Container>

    )
}
export default SectionSeries;