import styled from "styled-components";
import seriesImg from "../../Img/seriesBtn.png"
import moviesImg from "../../Img/moviesBtn.png"


export const Btn = styled.button`
    &.seriesBtn{
        width:120px;
        height: 75px;
        background-image: url(${seriesImg});
        background-size: 100% 100%;
        border-radius: 6px;
        border: none;
        outline: none;
        color:#ffffff;
        font-size: 27px;
        font-weight: 700;
        cursor: pointer;
        @media(min-width:395px) {
            width:165px;
            height: 100px;
            font-size: 36px;      
        }
        @media(min-width:530px) {
            width:213px;
            height: 133px;
            font-size: 48px;      
        }

        &:hover{
            width:220px;
            height: 140px;
        }
    }
    &.moviesBtn{
        width:120px;
        height: 75px;
        background-image: url(${moviesImg});
        background-size: cover;
        border-radius: 6px;
        border: none;
        outline: none;
        color:#ffffff;
        font-size: 27px;
        font-weight: 700;
        cursor: pointer;

        &:hover{
            width:220px;
            height: 140px;
        }
       
        @media(min-width:395px) {
            width:165px;
            height: 100px;
            font-size: 36px;      
        }
        @media(min-width:530px) {
            width:213px;
            height: 133px;
            font-size: 48px;      
        }
    }
    &.BtnPink{
        background-color: #B535F6;
        border-radius: 50px;
        width:180px;
        height: 49px;
        color: #ffffff;
        font-size: 18px;
        font-weight: 700;
        border: none;
        &:hover{
            border: 2px solid #B535F6;
            background-color: transparent;
            color: #ffffff;
            transition: background-color .3s linear, border .3s;
            
        }
            
        &:active{
            background-color: #ffffff;
            color: #1C1C3D;
        }  
        @media (min-width: 560px) {        
            width:240px;
            height: 66px;
            font-size: 24px;
        }
        
        @media(min-width:860px) {
            width: 320px;
            height: 88px;
            font-size: 32px;      
        }  
    }       
    
    
`;