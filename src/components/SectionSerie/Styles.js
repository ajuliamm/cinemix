import styled from "styled-components";

export const Container = styled.section`
    width:100vw;    
    padding: 0 11px;
    position: relative;

`;
export const H4 = styled.h4`
    color:#FADCDC;
    font-size: 12px;
    margin-bottom: 20px;
    
`;
export const Title = styled.p`
    color:#FADCDC;
    font-size: 11px;
    margin-bottom: 20px;
    @media(min-width:600px) {
        font-size: 13px;
    }
    
`;

export const CardMovie = styled.div`
    width:80px;
    height: 110px;   
    background-color:pink ;
    flex:none;
    
    
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

    &.hover{
        box-shadow: 0px 5px 18px #ffffff;
        cursor: pointer;
    }
`;
export const ImgMovie = styled.img`
    width:100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
    &.hover{
        box-shadow: 0px 5px 18px #ffffff;
        cursor: pointer;
    }
    
`;
export const SectionCards = styled.div`
    width:100vw;
    height: 180px;
    display: flex;
    gap: 12px;
    overflow-x: auto;
    scroll-behavior: smooth;
    overflow-y: none;

    @media(min-width:360px) {
        height: 200px;
    }    
    @media(min-width:500px) {
        height: 210px;
    } 
    @media(min-width:600px) {
        height: 230px;
    }
    @media(min-width:800px) {
        height: 260px;
    }
    @media(min-width:1000px) {
        height: 290px;
    }

    

    &::-webkit-scrollbar{
        display: none;
    }

    
`;
export const DivBtn = styled.div`
    width: 100vw;
    display: flex;
    justify-content: space-between;
    gap: 10px;
    padding: 10px;
    position: absolute;
    top:40%;
`;

export const BtnArrow = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: #ffffff;
    font-size: 40PX;


`;