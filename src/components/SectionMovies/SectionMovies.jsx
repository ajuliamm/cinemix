import React, { useEffect, useRef, useState } from "react";
import { Container, H4, DivBtn, Title, ImgMovie, SectionCards, BtnArrow } from "./Styles";
import CardMovie from "../CardMovie/CardMovie"
import 'bootstrap-icons/font/bootstrap-icons.css';

const SectionMovies = ({movies, title}) => {

    // const [data, setdata] = useState([]);
    const carousel = useRef(null);

    // useEffect(()=>{
    //     const array = [1,2,3,4,5,6,7,8,9,10,'a','a','a','a','a','a','a','a','a','a','a','a',,'a','a','a','a'];
    //     setdata(array);

    // },[]);
    // const apiKey = process.env.REACT_APP_API_KEY;
    // const urlMovies = process.env.REACT_APP_API_MOVIES;
    // // const urlImg = 'https://image.tmdb.org/t/p/w500/';
    // console.log(apiKey);
    // console.log(urlMovies);
   
    // const [movies , setMovies] = useState([]);

    // const getMovies = async (url) => {
    //     const resp = await fetch(url);
    //     const data = await resp.json();
    //     setMovies(data.results)
    //     console.log(data);
    // }
    // useEffect(()=>{
    
    //     const topRatedUrl = `${urlMovies}/top_rated?${apiKey}&language=pt-BR&page=1`
    //     console.log(topRatedUrl)
    //     getMovies(topRatedUrl)

    // },[apiKey,urlMovies])
 

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