import styled from "styled-components";

export const Container = styled.div`
    background: rgb(60,17,94);
    background: linear-gradient(0deg, rgba(60,17,94,1) 0%, rgba(37,10,75,1) 25%, rgba(3,3,40,1) 48%, rgba(3,3,40,1) 60%, rgba(34,10,68,1) 84%, rgba(60,17,94,1) 100%);
    width: 100vw;
    min-height: 100vh;    
`;
export const Main = styled.main`
    display: flex ;
    flex-direction: column;
    gap: 30px;
    padding: 10px 30px;
    @media(min-width: 715px) {
        padding: 0 50px;            
    }

`;

export const H3 = styled.h3`
    font-size: 16px;
    color:#FFFFFF;
    @media (min-width: 715px) {
        text-align: left;
        
        font-size: 18px;
        
    }

`;
export const TextSearch = styled.span`
    font-size: 20px;
    color: purple;
    text-align: center;
    margin-left: 8px;
    @media (min-width: 715px) {
        text-align: left;        
        font-size: 22px;        
    }

`;
export const SectionCards = styled.section`
    display: flex;
    flex-wrap: wrap;
    gap: 30px ;
    justify-content: space-evenly;
`;