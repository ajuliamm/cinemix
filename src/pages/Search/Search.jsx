import React, {useState, useEffect} from "react";
import { Container, H3, Main, TextSearch, SectionCards } from "./Styles";
import CardMovie from "../../components/CardMovie/CardMovie";
import { useSearchParams } from "react-router-dom";//permite pegar a query string da url e utiliza-la
import { API_KEY, API_MOVIES, API_SEARCH, API_IMG } from "../../API/KeyAPI";
import Header from "../../components/Header/Header";
const Search = () => {

    const keyUrl = API_KEY;
    const searchUrl = API_SEARCH

    const [searchParams] = useSearchParams();

    const query = searchParams.get("q")
    console.log(query)
    // dessa forma consigo pegar qqr parametro que está na url, exemplo se pegar o parametro "q" vai receber o valor dele. 

    const[movies, setMovies] = useState([]);

    useEffect(()=>{

        const searchFullLink = `${searchUrl}?${keyUrl}&query=${query}&include_adult=false&language=pt-BR&page=1`
        
        const searchMovie = async ( url )=> {
            const resp = await fetch(url);
            const data = await resp.json();
            console.log(data);
            setMovies(data.results);
        }
        searchMovie(searchFullLink);
    },[query])
    return (
        <Container>
            <Header/>
            <Main>
            <H3>Resultados para:<TextSearch>{query}</TextSearch></H3>
            <SectionCards>
            {movies.length === 0 && <p>Carregando...</p>}
            {movies.length>0 && movies.map(movie=> (
                <CardMovie typeCard='cardSearch' movie={movie} key={movie.id} />
                //o flex para colocar um elemento ao lado do outro, ele tenta ocupar o espaço disponível. Para corrigir isso colocar flex:none no filho

            ))} 
            </SectionCards>
            </Main>
        </Container>
    )
}
export default Search;