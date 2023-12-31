import React , { useEffect, useState }from "react";
import { Container, H2, Text, Main, Div, BtnArea, MovieArea, CardMovieStyle, DivLoading, Loading} from "./Styles";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import SelectGenders from "../../components/Select/SelectGender/Select";
import SectionMovies from "../../components/SectionMovies/SectionMovies";
import CardMovie from "../../components/CardMovie/CardMovie";
import Input from "../../components/Input/Input";
import { getMovies } from "../../API/RequisiçãoApi";
import Footer from "../../components/Footer/Footer";

const MovieScreen = () => {

    const apiKey = process.env.REACT_APP_API_KEY;
    const urlMovies = process.env.REACT_APP_API_MOVIES;
    const urlBase = process.env.REACT_APP_API_BASE;
   
    const [moviesTopRated , setMoviesTopRated] = useState([]);
    const [moviesPopular , setMoviesPopular] = useState([]);
    const [moviesKids, setMoviesKids ] = useState([]);
    const [moviesAction, setMoviesAction ] = useState([]);
    const [moviesComedy, setMoviesComedy ] = useState([]);
    const [movieSort, setMovieSort] = useState("");
    const [valueSelect, setValueSelect] = useState("");
    const [loading, setLoading] = useState(false);

    const getMoviesTopRated = async (url) => {
        const data = await getMovies(url)
        setMoviesTopRated(data)
        setValueSelect(data)
    }

    const getMoviesPopular = async (url) => {
        const data = await getMovies(url)
        setMoviesPopular(data)
    }

    const getMoviesKids = async (url) => {
        const data = await getMovies(url)
        setMoviesKids(data)
    }

    const getMoviesAction = async (url) => {
        const data = await getMovies(url)
        setMoviesAction(data)
    }

    const getMoviesComedy = async (url) => {
        const data = await getMovies(url)
        setMoviesComedy(data)
    }

    const sortMovie = (moviesToSort) =>{
        setLoading(true)
        if(moviesToSort.length > 0){
            const sort = Math.floor(Math.random() * (moviesToSort.length));
            setMovieSort(moviesToSort[sort])
            setTimeout(() => {
                setLoading(false)
            }, 3000);
        }
    }
    const handleChangeSelect = (event) => {
        if(event.target.value === 'popular'){
            setValueSelect(moviesPopular);
        }
        else if(event.target.value === 'topRated'){
            setValueSelect(moviesTopRated);
        }
        else if(event.target.value === 'animation'){
            setValueSelect(moviesKids);
        }
        else if(event.target.value === 'action'){
            setValueSelect(moviesAction);
        }
        else if(event.target.value === 'comedy'){
            setValueSelect(moviesComedy);
        }
        else {
            const allMovies = [...moviesAction,...moviesComedy,...moviesKids,...moviesPopular,...moviesTopRated]
            setValueSelect(allMovies);
        }
    }

    useEffect(()=>{
    
        const topRatedUrl = `${urlMovies}/top_rated?${apiKey}&language=pt-BR&page=1`
        const popularUrl = `${urlMovies}/popular?${apiKey}&language=pt-BR&page=1`
        const kids = `${urlBase}/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc&with_genres=16&${apiKey}`
        const action = `${urlBase}/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc&with_genres=28&${apiKey}`
        const comedy = `${urlBase}/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc&with_genres=35&${apiKey}`
        
        getMoviesTopRated(topRatedUrl);
        getMoviesPopular(popularUrl);
        getMoviesKids(kids);
        getMoviesAction(action);
        getMoviesComedy(comedy);


    },[apiKey,urlMovies, urlBase])
   
    return(
        <Container>
            <Header/>
            <Main>
                <Div>
                    {loading ?
                    <DivLoading>
                        <Loading></Loading>
                    </DivLoading>
                    : <>
                    <BtnArea>
                        <H2>Separamos os filmes mais bem avaliados para você.</H2>
                        <Button textBtn="SORTEAR FILME" typeBtn="BtnPink" onClick={()=>sortMovie(valueSelect)}/>
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
                    </>}               
                </Div>
                <Input styles="inputMain"/>
                <SectionMovies movies={moviesTopRated} title="Mais Bem Avaliados"/>
                <SectionMovies movies={moviesPopular} title="Mais Populares"/>
                <SectionMovies movies={moviesKids} title="Animação"/>
                <SectionMovies movies={moviesAction} title="Ação"/>
                <SectionMovies movies={moviesComedy} title="Comédia"/>
            </Main>
            <Footer/>
                        
        </Container>

    )
}
export default MovieScreen;