import styled from "styled-components";

export const SelectGenderMovies = styled.select`
    width:208px;
    height: 30px;
    background-color: rgb(181, 53, 246, 49%);
    color:#FADCDC;
    outline: none;
    border: none;
    padding: 0 10px;

    option{
        background-color: #361155;
        color: #fff;
        
    }
    
    
    @media (min-width: 560px) {        
        width:245px;
    }
    @media (min-width: 860px) {        
        width:277px;      
    }
`;