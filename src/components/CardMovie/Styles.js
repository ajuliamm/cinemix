import styled from "styled-components";

export const Title = styled.p`
    color:#FADCDC;
    font-size: 11px;
    margin-bottom: 20px;
    &.cardSearch{
        display: none;

    }
    
`;
export const CardMovie = styled.div`
    width:80px;
    height: 110px;   
    background-color:pink ;
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
        width:115px;
        height: 160px;
    }

    &.cardSearch{
        width: 21%;
        height: auto;

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
