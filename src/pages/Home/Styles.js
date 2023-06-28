import styled from "styled-components";

export const Container = styled.div`
background: rgb(60,17,94);
background: linear-gradient(0deg, rgba(60,17,94,1) 0%, rgba(37,10,75,1) 25%, rgba(3,3,40,1) 48%, rgba(3,3,40,1) 60%, rgba(34,10,68,1) 84%, rgba(60,17,94,1) 100%);
    width: 100vw;
    min-height: 100vh;
position: relative;
    
`;
export const H1 = styled.h1`
    font-size: 38px;
    color:#FFFFFF;
    text-align: center;
    @media (min-width: 715px) {
        text-align: left;
        font-size: 48px;
        
    }

    

`;
export const H4 = styled.h3`
    font-size: 16px;
    color:#FFFFFF;
    text-align: center;
    @media (min-width: 715px) {
        text-align: left;
        
        font-size: 18px;
        
    }

`;

export const Main = styled.main`
display: flex;
    flex-direction: column;
    gap:85px;


`;
export const Div = styled.div`
width: 100vw;
height: 300px;
background-color: rgb(121, 96, 143, 38%);
padding: 50px;
display: flex;
flex-direction: column;
justify-content: end;
gap:15px


`;

