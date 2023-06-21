import React, { useEffect, useRef, useState } from "react";
import { Container, H4, CardMovie, ImgMovie,DivBtn, SectionCards, BtnArrow } from "./Styles";
import 'bootstrap-icons/font/bootstrap-icons.css';

const SectionMovies = () => {

    const [data, setdata] = useState([]);
    const carousel = useRef(null)

    useEffect(()=>{
        const array = [1,2,3,4,5,6,7,8,9,10];
        setdata(array);

    },[]);

    const handleLeftClick = (e)=>{
        e.preventDefault();
        console.log(carousel.current.offsetWidth);
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    }
    const handleRightClick = (e)=>{
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth;

    }

    if (!data || !data.length) return null;
    //se não haver dados ou esse array estiver vazio retorna null
    return(
        <Container>
            <H4>Mais Populares</H4>
            <SectionCards ref={carousel}>
                {data.map(item=> (
                    <CardMovie></CardMovie>
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