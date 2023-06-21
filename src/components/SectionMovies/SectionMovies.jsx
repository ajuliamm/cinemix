import React, { useEffect, useState } from "react";
import { Container, H4, CardMovie, ImgMovie, SectionCards } from "./Styles";

const SectionMovies = () => {

    const [data, setdata] = useState([]);

    useEffect(()=>{
        const array = [1,2,3,4,5,6,7,8,9,10];
        setdata(array);

    },[])

    if (!data || !data.length) return null;
    //se não haver dados ou esse array estiver vazio retorna null
    return(
        <Container>
            <H4>Mais Populares</H4>
            <SectionCards>
                {data.map(item=> (
                    <CardMovie></CardMovie>

                ))}                
               
            </SectionCards>
        </Container>

    )
}
export default SectionMovies;