import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { InputSearch, DivForm, Icon, DivIcon } from "./Styles";
import 'bootstrap-icons/font/bootstrap-icons.css';

const Input = ({styles}) => {

    const [search, setSearch] = useState("");

    const navigate= useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(search)
        if(!search) return;
        navigate(`/search?q=${search}`);
        setSearch('');
    }     

    return( 
        <DivForm className={styles} onSubmit={handleSubmit}>
            <InputSearch type="text" onChange={(e)=>setSearch(e.target.value)} value={search}/>{/* colocar o estado no value do input permite manipular o valor do campo pelo state */}
            <DivIcon ><i className="bi bi-search"></i> </DivIcon>
        </DivForm>       
            
    )
}
export default Input;