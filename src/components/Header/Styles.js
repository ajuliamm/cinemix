import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100px;
    display: flex;
    align-items: center;
    padding: 0 30px;
    justify-content: space-between;
    
    @media(min-width: 715px) {
        padding: 0 50px;            
    }
`;
export const LogoNavArea = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
`;
