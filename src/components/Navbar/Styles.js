import styled from "styled-components";
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
    color: #FFFFFF;
    font-size: 16px;
    font-weight: 500;
    list-style: none;
    @media(min-width:361px) {
        font-size: 20px;    
    }
    

`;


export const Nav = styled.nav`
    

`;

export const Ul = styled.ul`
display: flex;
gap: 0px;


`;
export const Li = styled.li`
list-style: none;
background-color: transparent;
    border-radius: 30px;
    border: 3px solid transparent;
    padding: 2px 6px;
&:hover{
    background-color: #F601FF;
    border-radius: 30px;
    border: 3px solid #F601FF;
    padding: 2px 6px;
}



`;

