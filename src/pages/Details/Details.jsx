import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { API_KEY, API_DETAILS ,API_MOVIES, API_SEARCH, API_IMG } from "../../API/KeyAPI";

//quando preciso acessar o parametro que está intriseco na url

const Details = () => {

    const keyUrl = API_KEY;
    const detailsUrl = API_DETAILS;

    const {id} = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(()=>{
        const detailsFullLink = `${detailsUrl}/${id}?${keyUrl}&language=pt-BR`;

        const getDetailsMovie = async (url) =>{
            const resp = await fetch(url);
            const data = await resp.json();

            setMovie(data);
            console.log(data)
        }
        getDetailsMovie(detailsFullLink);
    }, []);

    return 
        // <Container>
        //     <Header/>
        //     <Main>
        //         <CardMovie typeCard="cardDetails"/>
        //         <Title>{movie.title}</Title>
        //         <Subtitle> </Subtitle>
        //         <H3>Sinopse</H3>
        //         <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae facere nostrum deserunt, vero et explicabo officia autem in accusamus, impedit quas nihil doloremque. Modi minima qui consequatur culpa dolorem illum!</Text>
                
        //     </Main>
        // </Container>
        
}
export default Details;