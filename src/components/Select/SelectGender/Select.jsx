import React from "react";
import { SelectGenderMovies } from "./Styles";

const SelectGenders = () => {
    return(
        <>
            <SelectGenderMovies name='genders' >
                <option value="...">...</option>
                <option value="romance">Romance</option>
                <option value="drama">Drama</option>
                <option value="ficction">Ficção</option>
                <option value="horror">Terror</option>
            </SelectGenderMovies>
        </>

    )
}
export default SelectGenders;