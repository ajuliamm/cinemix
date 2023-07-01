import styled from "styled-components";


export const Container = styled.div`
    background: rgb(60,17,94);
    background: linear-gradient(0deg, rgba(60,17,94,1) 0%, rgba(37,10,75,1) 25%, rgba(3,3,40,1) 48%, rgba(3,3,40,1) 60%, rgba(34,10,68,1) 84%, rgba(60,17,94,1) 100%);
    width: 100vw;
    min-height: 100vh;
    

    
`;
export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 32px 10px;
    gap: 25px;

`;
export const Title = styled.h4`
    font-family: 'Jura', sans-serif;
    color:#fff;
    font-size: 16px;
    text-align: center;
    @media(min-width:370px){
        font-size: 18px;
    }
    @media(min-width:410px){
        font-size: 20px;
    }
`;
export const ContainerTech = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 23px;
    width: 100vw;
    flex-wrap: wrap;
    margin-top: 30px;

`;
export const DivTech = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 138px;
    height: 45px;
    background-color: #6831A9;
    border-radius: 5px;

`;
export const Span = styled.span`
    color:#fff;
    font-size: 20px;
    font-family: 'Jura', sans-serif;
`;
export const Img = styled.img`
    color:#fff;
    font-size: 20px;
`;