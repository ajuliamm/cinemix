import React from "react";
import {  CardMovie, Title, ImgMovie } from "./Styles";
import 'bootstrap-icons/font/bootstrap-icons.css';

const SectionMovies = ({movie}) => {

    const urlImg = 'https://image.tmdb.org/t/p/w500/';

    return(
        <CardMovie>
            <ImgMovie src={urlImg + movie.poster_path} alt={movie.title}/>
            <Title>{movie.title}</Title>
        </CardMovie>
    )
}
export default SectionMovies;