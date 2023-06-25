import React from "react";
import { SelectGenderMovies } from "./Styles";

const SelectGenders = ({onChange}) => {
    return(
        <>
            <SelectGenderMovies name='genders' onChange={onChange}>
                <option value="...">...</option>
                <option value="topRated">Mais bem avaliados</option>
                <option value="popular">Mais populares</option>
            </SelectGenderMovies>
        </>

    )
}
export default SelectGenders;