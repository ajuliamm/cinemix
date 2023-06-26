import React from "react";
import { SelectGenderMovies } from "./Styles";

const SelectGenders = ({onChange}) => {
    return(
        <>
            <SelectGenderMovies name='genders' onChange={onChange}>
                <option value="...">...</option>
                <option value="topRated">Mais bem avaliados</option>
                <option value="popular">Mais populares</option>
                <option value="animation">Animação</option>
                <option value="action">Ação</option>
                <option value="comedy">Comédia</option>
                <option value="allMovies">Todos</option>
            </SelectGenderMovies>
        </>

    )
}
export default SelectGenders;