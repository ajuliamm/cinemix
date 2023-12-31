import styled from "styled-components";

export const Container = styled.div`
    background: rgb(60,17,94);
    background: linear-gradient(0deg, rgba(60,17,94,1) 0%, rgba(37,10,75,1) 25%, rgba(3,3,40,1) 48%, rgba(3,3,40,1) 60%, rgba(34,10,68,1) 84%, rgba(60,17,94,1) 100%);
    width: 100vw;
    min-height: 100vh;
    overflow-x: hidden;
    
`;
export const H2 = styled.h2`
    font-size: 22px;
    color:#FFFFFF;
    text-align: center;
    @media (min-width: 560px) {        
       font-size: 30px;
    }
    @media (min-width: 860px) {
        font-size: 36px;        
    }   
    @media (min-width: 1230px) {
        font-size: 50px;        
    } 
    @media (min-width: 1700px) {
        font-size: 60px;        
    }    

`;
export const Text = styled.p`
    font-size: 12px;
    color:#FFFFFF;
    text-align: center;
    @media (min-width: 560px) {        
        font-size: 14px; 
    }
    @media (min-width: 860px) {        
        font-size: 16px;        
    }
    

    &.movie{
        font-size:74px;
        color: rgb(181, 53, 246, 40%);
        font-weight: 700;

        @media (min-width: 560px) {        
        font-size:128px ;
    }
    }
`;

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    gap:20px;

`;
export const Div = styled.div`
    width: 100vw;
    min-height: 290px;
    background-color: rgb(121, 96, 143, 38%);
    padding: 30px 70px ;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column ;
    gap:30px;
    @media (min-width: 560px) {    
        flex-direction: row ;
        padding: 30px 50px;
    }
    @media (min-width: 1230px) {
        padding:30px 70px ;
    } 
    @media (min-width: 1700px) {
        padding: 30px 150px ;
    }
`;
export const BtnArea = styled.div`
    width: 80vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:15px;
    @media (min-width: 560px) {            
        width: 65vw;
    }
`;
export const MovieArea = styled.div`
    width: 80vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (min-width: 560px) {        
        
        width: 35vw;
    }
`;
export const CardMovieStyle = styled.div`
    width: 105px;
    height: 130px;
    background-color: rgb(56, 18, 88, 52%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (min-width: 560px) {        
        width: 188px;
        height: 231px;
    }
`;
export const DivLoading = styled.div`
    width: 100vw;
    height: 100%;
    background-color:transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    
`;
export const Loading = styled.div`
    width: 70px;
    height: 70px;
    background-color: transparent;
    border: 17px solid #B535F6;
    border-top: 17px solid transparent;
    border-radius: 50%;

    animation: loading 1s linear infinite;

    @keyframes loading {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
      
    }

`;

