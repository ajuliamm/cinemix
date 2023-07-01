import React , { useEffect, useState }from "react";
import { Container, H2, Text, Main, Div, BtnArea, MovieArea, CardMovieStyle } from "./Styles";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import SelectGenders from "../../components/Select/SelectGender/Select";
import CardSerie from "../../components/CardSerie/CardSerie";
import Input from "../../components/Input/Input";
import { getMovies } from "../../API/RequisiçãoApi";
import Footer from "../../components/Footer/Footer";
import SectionSeries from "../../components/SectionSerie/SectionSerie";
const SeriesScreen = () => {

    const apiKey = process.env.REACT_APP_API_KEY;
    const urlBase = process.env.REACT_APP_API_BASE;

    console.log(apiKey);
    console.log(urlBase);
   
    const [seriesTopRated , setSeriesTopRated] = useState([]);
    const [seriesPopular , setSeriesPopular] = useState([]);
    const [seriesKids, setSeriesKids ] = useState([]);
    const [seriesAction, setSeriesAction ] = useState([]);
    const [seriesComedy, setSeriesComedy ] = useState([]);
    const [movieSort, setMovieSort] = useState("");
    const [valueSelect, setValueSelect] = useState("");


    const getSeriesTopRated = async (url) => {
        const data = await getMovies(url);
        setSeriesTopRated(data);
        console.log(data);
        setValueSelect(data)
    }
    const getseriesPopular = async (url) => {
        const data = await getMovies(url)
        setSeriesPopular(data)
        console.log(data);
    }
    const getSeriesKids = async (url) => {
        const data = await getMovies(url)
        setSeriesKids(data)
    }

    const getSeriesAction = async (url) => {
        const data = await getMovies(url)
        setSeriesAction(data)
    }

    const getSeriesComedy = async (url) => {
        const data = await getMovies(url)
        setSeriesComedy(data)
    }
    useEffect(()=>{
    
        const topRatedUrl = `${urlBase}/tv/top_rated?${apiKey}&language=pt-BR&page=1`
        console.log(topRatedUrl)
        const popularUrl = `${urlBase}/tv/popular?${apiKey}&language=pt-BR&page=1`
        getSeriesTopRated(topRatedUrl);
        getseriesPopular(popularUrl);

        const kids = `${urlBase}/discover/tv?include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc&with_genres=16&${apiKey}`
        const action = `${urlBase}/discover/tv?include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc&with_genres=10759&${apiKey}`
        const comedy = `${urlBase}/discover/tv?include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc&with_genres=35&${apiKey}`
        
        getSeriesKids(kids);
        getSeriesAction(action);
        getSeriesComedy(comedy);


    },[apiKey])

    const sortSerie = (serieToSort) =>{
        console.log(serieToSort);
        if(serieToSort.length > 0){
            const sort = Math.floor(Math.random() * (serieToSort.length));
            console.log(sort);
            setMovieSort(serieToSort[sort])
        }
        else{
            console.log('carregando')
        }
    }

    const handleChangeSelect = (event) => {
        console.log(event.target.value)
        if(event.target.value === 'popular'){
            setValueSelect(seriesPopular);
        }
        else if(event.target.value === 'topRated'){
            setValueSelect(seriesTopRated);
        }
        else if(event.target.value === 'animation'){
            setValueSelect(seriesKids);
        }
        else if(event.target.value === 'action'){
            setValueSelect(seriesAction);
        }
        else if(event.target.value === 'comedy'){
            setValueSelect(seriesComedy);
        }
        else {
            const allSeries = [...seriesAction,...seriesComedy,...seriesKids,...seriesPopular,...seriesTopRated]
            setValueSelect(allSeries);
        }
    }

    
    return(
        <Container>
            <Header/>
            <Main>
                <Div>
                    <BtnArea>
                        <H2>Separamos as séries mais bem avaliados para você.</H2>
                        <Button textBtn="SORTEAR SÉRIE" typeBtn="BtnPink" onClick={()=>sortSerie(valueSelect)}/>
                        <Text>Ou escolha a categoria da sua série</Text>
                        <SelectGenders onChange={handleChangeSelect}/>
                    </BtnArea>  
                    <MovieArea>
                        <CardMovieStyle>
                            {movieSort === "" 
                            ? <Text className="movie">?</Text>
                            : <CardSerie serie={movieSort} typeCard="sortCard"/>}
                        </CardMovieStyle>
                        
                    </MovieArea>                  
                </Div>   
                <SectionSeries series={seriesTopRated} title="Mais Bem Avaliados"/>
                <SectionSeries series={seriesPopular} title="Mais Populares"/>
                <SectionSeries series={seriesKids} title="Animação"/>
                <SectionSeries series={seriesAction} title="Ação"/>
                <SectionSeries series={seriesComedy} title="Comédia"/>
            </Main>
            <Footer/>
        </Container>

    )
}
export default SeriesScreen;