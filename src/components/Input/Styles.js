import styled from "styled-components";

export const InputSearch = styled.input`
    width: 100%;   
    height: 100%;   
    border-radius: 26px;
    background-color: transparent;
    border: none;
    align-self: flex-end;
    color  :#ffffff ;
    padding-left: 15px;
    outline: none;
    &:hover{
        background-color: rgb(14, 25, 31, 40%);
    }
    &:focus{
        background-color: rgb(14, 25, 31, 40%);
        border: 2px solid ;
        border-color:#F601FF;
    }
`;
export const DivForm = styled.form`
    display: none;

    @media(min-width: 570px) {
        display: flex;
        position: relative;
        width: 200px;
        height: 30px;
        border-radius: 26px;     
        color:#ffffff;
        &:hover{
            border: 2px solid ;
            border-color:#F601FF;
            color:#F601FF;
            background-color: rgb(14, 25, 31, 40%);
            

        }

    }
    @media (min-width:650px) {
        width: 248px;
        
    }
    @media (min-width:740) {
        width: 300px;
        
    }
    &.inputMobile{
        display: flex;
        position: relative;
        width: 100%;
        height: 35px;
        border-radius: 26px;     
        border: 2px solid ;
        border-color:#F601FF;
        color:#F601FF;
        background-color: rgb(14, 25, 31, 40%);

        @media(min-width: 715px) {
            display: none;
            
        }
    }
    &.inputMain{
        display: flex;
        position: relative;
        width: 100%;
        height: 35px;
        border-radius: 26px;     
        border: 2px solid ;
        border-color:transparent;
        color:#F601FF;
        margin-bottom: 10px;
        &:hover{
            border: 2px solid ;
            border-color:#F601FF;
            color:#F601FF;
            background-color: rgb(14, 25, 31, 40%);
            

        }

        @media(min-width: 570px) {
            display: none;
            
        }
    }
`;
export const DivIcon = styled.button`
    position:absolute;
    top:3px; right:10px;
    z-index:10;
    border:none;
    background:transparent;
    outline:none;
    font-size: 17px; 
    color:#fff;
`;



