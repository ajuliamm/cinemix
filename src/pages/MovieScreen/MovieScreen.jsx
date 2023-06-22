import React , { useEffect, useState }from "react";
import { Container, H2, Text, Main, Div, BtnArea, MovieArea, CardMovie } from "./Styles";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import SelectGenders from "../../components/Select/SelectGender/Select";
import SectionMovies from "../../components/SectionMovies/SectionMovies";


const MovieScreen = () => {

    const apiKey = process.env.REACT_APP_API_KEY;
    const urlMovies = process.env.REACT_APP_API_MOVIES;
    // const urlImg = 'https://image.tmdb.org/t/p/w500/';
    console.log(apiKey);
    console.log(urlMovies);
   
    const [moviesTopRated , setMoviesTopRated] = useState([]);
    const [moviesPopular , setMoviesPopular] = useState([]);

    const getMoviesTopRated = async (url) => {
        const resp = await fetch(url);
        const data = await resp.json();
        setMoviesTopRated(data.results)
        console.log(data);
    }
    const getMoviesPopular = async (url) => {
        const resp = await fetch(url);
        const data = await resp.json();
        setMoviesPopular(data.results)
        console.log(data);
    }
    useEffect(()=>{
    
        const topRatedUrl = `${urlMovies}/top_rated?${apiKey}&language=pt-BR&page=1`
        console.log(topRatedUrl)
        const popularUrl = `${urlMovies}/popular?${apiKey}&language=pt-BR&page=1`
        getMoviesTopRated(topRatedUrl);
        getMoviesPopular(popularUrl);


    },[apiKey,urlMovies])
   
    return(
        <Container>
            <Header/>
            <Main>
                <Div>
                    <BtnArea>
                        <H2>Separamos os filmes mais bem avaliados para você.</H2>
                        <Button textBtn="SORTEAR FILME" typeBtn="BtnPink"/>
                        <Text>Ou escolha a categoria do seu filme</Text>
                        <SelectGenders/>
                    </BtnArea>  
                    <MovieArea>
                        <CardMovie>
                            <Text className="movie">?</Text>
                        </CardMovie>
                        
                    </MovieArea>                  
                </Div>
                <SectionMovies movies={moviesTopRated} title="Mais Bem Avaliados"/>
                <SectionMovies movies={moviesPopular} title="Mais Populares"/>
            </Main>
        </Container>

    )
}
export default MovieScreen;