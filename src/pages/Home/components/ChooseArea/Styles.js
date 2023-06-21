import styled from "styled-components";


export const Container = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
`;export const Div = styled.div`
    
    display: flex;
    gap: 32px;
`;
export const H3 = styled.h3`
    font-size:23px;
    color: #F601FF;
    text-align: center;

    @media(min-width:395px) {   
        font-size: 30px;      
    }
    
    @media(min-width:530px) {
        font-size: 40px;
        
        
    }
    
`;