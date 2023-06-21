import React from "react";
import { InputSearch, Div, Icon, DivIcon } from "./Styles";
import 'bootstrap-icons/font/bootstrap-icons.css';



const Input = ({styles}) => {
    return( 
        <Div className={styles}>
            <InputSearch type="text"/>
            <DivIcon>
            <Icon><i className="bi bi-search"></i></Icon>

            </DivIcon>

        </Div>       
            
    )
}
export default Input;