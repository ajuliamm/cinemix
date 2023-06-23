import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {  CardMovie, Title, ImgMovie } from "./Styles";
import 'bootstrap-icons/font/bootstrap-icons.css';

const SectionMovies = ({movie, typeCard}) => {
    const navigate = useNavigate();

    const urlImg = 'https://image.tmdb.org/t/p/w500/';
    const urlDetails = 'https://api.themoviedb.org/3/movie/'

    
    
   

    return(
        <CardMovie className={typeCard} onClick={()=>navigate(`/movie/${movie.id}`)}>
            <ImgMovie src={urlImg + movie.poster_path} alt={movie.title}/>
            <Title className={typeCard}>{movie.title}</Title>
        </CardMovie>
    )
}
export default SectionMovies;