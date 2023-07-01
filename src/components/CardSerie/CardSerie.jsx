import React from "react";
import { useNavigate } from "react-router-dom";
import {  CardSerie, Title, ImgMovie } from "./Styles";
import 'bootstrap-icons/font/bootstrap-icons.css';

const CardSerieDiv = ({serie, typeCard}) => {
    const navigate = useNavigate();

    const urlImg = process.env.REACT_APP_API_IMG;
   

    return(
        <CardSerie className={typeCard} onClick={()=>navigate(`/serie/${serie.id}`)}>
            <ImgMovie src={urlImg + serie.poster_path} alt={serie.title}/>
            <Title className={typeCard}>{serie.name}</Title>
        </CardSerie>
    )
}
export default CardSerieDiv;