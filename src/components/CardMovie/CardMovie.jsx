import React from "react";
import { useNavigate } from "react-router-dom";
import {  CardMovie, Title, ImgMovie } from "./Styles";
import 'bootstrap-icons/font/bootstrap-icons.css';

const CardMovieDiv = ({movie, typeCard}) => {
    const navigate = useNavigate();

    const urlImg = process.env.REACT_APP_API_IMG;   

    return(
        <CardMovie className={typeCard} onClick={()=>navigate(`/movie/${movie.id}`)}>
            <ImgMovie src={urlImg + movie.poster_path} alt={movie.title}/>
            <Title className={typeCard}>{movie.title}</Title>
        </CardMovie>
    )
}
export default CardMovieDiv;