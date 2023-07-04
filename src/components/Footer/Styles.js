import styled from "styled-components";

export const Container = styled.footer`
    display: flex;
    width: 100vw;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
    background-color: #17083A;
    padding: 20px 0 35px 0;
    opacity: .5;
    margin-top: 80px;
    

    &.absolute{
        position: absolute;
        bottom: 0;
    }
    

`;

export const Text = styled.p`
    color: #fff;
    font-size: 12px;
    text-align: center;
    opacity: .9;

`; 

export const DivIcon = styled.div`
    
    &.icon{
        background-color: #D9D9D9;
        color:#1A093D;
        font-size: 26px;
        border-radius: 50%;
        padding: 3px;
        border: 3px solid #D9D9D9;
        opacity: .8;
        &:hover{
        opacity: 1.2;
        cursor: pointer;
        }
    }
    

    &.container{
        border: none;
        background-color: transparent;
        display: flex;
        justify-content: center;
        gap: 42px;
    }

`;