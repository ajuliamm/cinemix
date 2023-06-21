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
export const CardMovie = styled.div`
    width:78px;
    height: 98px;   
    background-color:pink ;
    flex:none;

    
`;
export const ImgMovie = styled.img`
    width:100%;
    height: 100%;
    object-fit: cover;
    
`;
export const SectionCards = styled.div`
    width:100vw;
    height: 110px;
    display: flex;
    gap: 12px;
    overflow-x: auto;
    scroll-behavior: smooth;

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
    top:50px;
`;

export const BtnArrow = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: #ffffff;
    font-size: 40PX;


`;