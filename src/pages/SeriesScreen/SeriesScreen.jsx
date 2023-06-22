import React, {useState, useEffect} from "react";
import { Container, H2, Text, Main, Div, BtnArea, MovieArea, CardMovie } from "./Styles";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import SelectGenders from "../../components/Select/SelectGender/Select";
import SectionMovies from "../../components/CardMovie/CardMovie";
const SeriesScreen = () => {
    // const apiKey = process.env.REACT_APP_API_KEY;
    // const urlSeries = 'https://api.themoviedb.org/3/tv';
 
    // console.log(apiKey);
    // console.log(urlSeries);
   
    // const [seriesTopRated , setseriesTopRated] = useState([]);
    // const [seriesPopular , setSeriesPopular] = useState([]);

    // const getSeriesTopRated = async (url) => {
    //     const resp = await fetch(url);
    //     const data = await resp.json();
    //     setseriesTopRated(data.results)
    //     console.log(data);
    // }
    // const getseriesPopular = async (url) => {
    //     const resp = await fetch(url);
    //     const data = await resp.json();
    //     setSeriesPopular(data.results)
    //     console.log(data);
    // }
    // useEffect(()=>{
    
    //     const topRatedUrl = `${urlSeries}/top_rated?${apiKey}&language=pt-BR&page=1`
    //     console.log(topRatedUrl)
    //     const popularUrl = `${urlSeries}/popular?${apiKey}&language=pt-BR&page=1`
    //     getSeriesTopRated(topRatedUrl);
    //     getseriesPopular(popularUrl);


    // },[apiKey,urlSeries])

    
    return(
        <Container>
            <Header/>
            <Main>
                <Div>
                    <BtnArea>
                        <H2>Separamos as séries mais bem avaliados para você.</H2>
                        <Button textBtn="SORTEAR SÉRIE" typeBtn="BtnPink"/>
                        <Text>Ou escolha a categoria da sua série</Text>
                        <SelectGenders/>
                    </BtnArea>  
                    <MovieArea>
                        <CardMovie>
                            <Text className="movie">?</Text>
                        </CardMovie>
                        
                    </MovieArea>                  
                </Div>   
                {/* <SectionMovies series={seriesTopRated} title="Mais Bem Avaliados"/>
                <SectionMovies series={seriesPopular} title="Mais Populares"/> */}
            </Main>
        </Container>

    )
}
export default SeriesScreen;