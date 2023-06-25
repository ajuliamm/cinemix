import styled from "styled-components";

export const Title = styled.p`
    color:#FADCDC;
    font-size: 11px;
    margin-bottom: 20px;
    @media(min-width:600px) {
        font-size: 13px;
    }
    &.cardSearch{
        display: none;

    }
    &.cardDetails{
        display: none;

    }
    &.sortCard{
        display: none;        
    }
    
`;
export const CardMovie = styled.div`
    width:80px;
    height: 110px;   
    background-color:rgb(56, 18, 88, 52%) ;
    flex:none;
    cursor: pointer;
    
    
    @media(min-width:360px) {
        width:100px;
        height: 150px;
    }    
    @media(min-width:500px) {
        width:115px;
        height: 160px;
    } 
    @media(min-width:600px) {
        width:140px;
        height: 190px;
    }
    @media(min-width:800px) {
        width:160px;
        height: 220px;
    }
    @media(min-width:1000px) {
        width:180px;
        height: 255px;
    }

    &.cardSearch{
        width: 40%;
        height: auto;
        @media(min-width:600px) {
            width: 30%;
            height: auto;
        }
        @media(min-width:860px) {
            width: 21%;
            height: auto;
        }

    }
    &.cardDetails{
        width: 60%;
        height: auto;
        margin: 0 auto;
        @media(min-width:700px) {
            width: 100%;
            height: auto;
        }
        @media(min-width:800px) {
            width: 60%;
            height: auto;
        }
        @media(min-width:1000px) {
            width: 90%;
            height: auto;
        }
        @media(min-width:1200px) {
            width: 100%;
            height: auto;
        }

    }
    &.sortCard{

    }

`;
export const ImgMovie = styled.img`
    width:100%;
    height: 100%;
    object-fit: cover;
    &:hover{
        box-shadow: 0px 5px 18px #ffffff;
        cursor: pointer;
        opacity: .8;
    }
    
`;
