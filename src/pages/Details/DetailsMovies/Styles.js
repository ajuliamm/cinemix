import styled from "styled-components";

export const Container = styled.div`
    background: rgb(60,17,94);
    background: linear-gradient(0deg, rgba(60,17,94,1) 0%, rgba(37,10,75,1) 25%, rgba(3,3,40,1) 48%, rgba(3,3,40,1) 60%, rgba(34,10,68,1) 84%, rgba(60,17,94,1) 100%);
    width: 100vw;
    min-height: 100vh;
    
`;


export const Main = styled.main`
    

`;
export const Title = styled.h4`
    color: white;
    font-size: 18px;
    @media(min-width:700px) {
        font-size: 22px;
    }
    @media(min-width:1000px) {
        font-size: 26px;
    }
    @media(min-width:1200px) {
        font-size: 32px;
    }
    @media(min-width:1450px) {
        font-size: 34px;
    }
    
    
`;
export const Subtitle = styled.p`
    color: white;
`;
export const H3 = styled.h3`
    color: white;
    font-size: 16px;
    @media(min-width:700px) {
        font-size: 18px;
    }
    @media(min-width:1000px) {
        font-size: 20px;
    }
    @media(min-width:1400px) {
        font-size: 24px;
    }
    
`;
export const Text = styled.span`
    color: white;
    font-size: 12px;

    @media(min-width:700px) {
        font-size: 14px;
    }
    @media(min-width:1000px) {
        font-size: 15px;
    }
    @media(min-width:1200px) {
        font-size: 17px;
    }
    
    
    
    /* &.dateTime{
        font-size: 12px;
    }
    &.textSinopse{
        font-size: 12px;
    }
    &.gender{
        font-size: 12px;
    } */
`;
export const SectionMovie = styled.section`
    border-top: 1px solid rgb(121, 96, 143);
    border-bottom: 1px solid rgb(121, 96, 143);
    padding: 20px 20px;
    display: grid;
    gap: 5px;
    overflow-x: hidden;
    grid-template-areas: "img img"
                        "title title"
                        "gender star"
                        "sinopse sinopse";
    @media(min-width:700px) {
        grid-template-columns: 40% 25% 25% ;
        grid-template-areas: "img . ."
                        "img title title"
                        "img gender star"
                        "sinopse sinopse sinopse";
        gap: 10px;
    }
    @media(min-width:1000px) {
        grid-template-columns: 40% 30% 25%;
        grid-template-areas: "img title star"
                        "img sinopse sinopse"
                        "img gender ."
                        "img . .";
        padding: 20px 100px;
    }
    @media(min-width:1200px) {
        grid-template-columns: 25% 35% 30%;
        gap:15px
    }
    @media(min-width:1300px) {
        grid-template-columns: 22% 35% 30%;
        gap:20px
    }
    

`;
export const DivSection = styled.div`
    &.img{
        grid-area: img;
       

    }
    &.title{
        grid-area: title;
        
    }
    &.star{
        grid-area: star;
    }
    &.sinopse{
        grid-area: sinopse;

    }
    &.gender{
        grid-area: gender;

    }
    
`;