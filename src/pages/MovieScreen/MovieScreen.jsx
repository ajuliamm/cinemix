import React , { useEffect, useState }from "react";
import { Container, H2, Text, Main, Div, BtnArea, MovieArea, CardMovieStyle } from "./Styles";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import SelectGenders from "../../components/Select/SelectGender/Select";
import SectionMovies from "../../components/SectionMovies/SectionMovies";
import CardMovie from "../../components/CardMovie/CardMovie";

const MovieScreen = () => {

    // const apiKey = process.env.REACT_APP_API_KEY;
    const apiKey = 'api_key=6bebb53b1882bda62ff84352ee9e7d2a'
    // const urlMovies = process.env.REACT_APP_API_MOVIES;
    const urlMovies = 'https://api.themoviedb.org/3/movie'
    // const urlImg = 'https://image.tmdb.org/t/p/w500/';
    console.log(apiKey);
    console.log(urlMovies);
   
    const [moviesTopRated , setMoviesTopRated] = useState([]);
    const [moviesPopular , setMoviesPopular] = useState([]);
    const [movieSort, setMovieSort] = useState("");

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
    const sortMovie = (moviesToSort) =>{
        const sort = Math.floor(Math.random() * (moviesToSort.length+1));
        console.log(sort);
        setMovieSort(moviesToSort[sort])


    }
    const handleChangeSelect = (event) => {
        console.log(event.target.value)
        if(event.target.value === 'popular'){
            sortMovie(moviesPopular);
        }
        else if(event.target.value === 'topRated'){
            sortMovie(moviesTopRated);
        }
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
                        <Button textBtn="SORTEAR FILME" typeBtn="BtnPink" onClick={()=>sortMovie(moviesTopRated)}/>
                        <Text>Ou escolha a categoria do seu filme</Text>
                        <SelectGenders onChange={handleChangeSelect}/>
                    </BtnArea>  
                    <MovieArea>
                        <CardMovieStyle>
                            {movieSort === "" 
                            ? <Text className="movie">?</Text>
                            : <CardMovie movie={movieSort} typeCard="sortCard"/>}
                        </CardMovieStyle>
                        
                    </MovieArea>                  
                </Div>
                <SectionMovies movies={moviesTopRated} title="Mais Bem Avaliados"/>
                <SectionMovies movies={moviesPopular} title="Mais Populares"/>
            </Main>
        </Container>

    )
}
export default MovieScreen;