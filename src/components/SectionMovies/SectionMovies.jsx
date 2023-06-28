import React, { useEffect, useRef, useState } from "react";
import { Container, H4, DivBtn, SectionCards, BtnArrow } from "./Styles";
import CardMovie from "../CardMovie/CardMovie"
import 'bootstrap-icons/font/bootstrap-icons.css';

const SectionMovies = ({movies, title}) => {

    const carousel = useRef(null); 

    const handleLeftClick = (e)=>{
        e.preventDefault();
        console.log(carousel.current.offsetWidth);
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    }
    const handleRightClick = (e)=>{
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth;

    }

    // if (!movies || !movies.length) return null;
    //se não haver dados ou esse array estiver vazio retorna null
    return(
        <Container>
            <H4>{title}</H4>
            <SectionCards ref={carousel}>
              {movies.length === 0 && <p>Carregando...</p>}
                {movies.length>0 && movies.map(movie=> (
                    <CardMovie movie={movie} key={movie.id} />
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
export default SectionMovies;