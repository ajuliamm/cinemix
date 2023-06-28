import React, {useState, useEffect} from "react";
import { Container, Main, Title, Subtitle,SectionMovie, H3, Text, DivSection} from "./Styles"
import { useParams } from "react-router-dom";
//quando preciso acessar o parametro que está intriseco na url
import Header from "../../components/Header/Header";
import CardMovie from "../../components/CardMovie/CardMovie";
import Footer from "../../components/Footer/Footer";


const Details = () => {

    const apiKey = process.env.REACT_APP_API_KEY;   
    const urlDetails = process.env.REACT_APP_API_DETAILS;

    const {id} = useParams();
    const [movie, setMovie] = useState(null);

    const getDetailsMovie = async (url) =>{
        
        const resp = await fetch(url);
        const data = await resp.json();

        setMovie(data);
        console.log(data)
    }

    const formatDate = (dateString) => {
        const [year, month, day] = dateString.split("-");
        return `${day}/${month}/${year}`;
    };


    useEffect(()=>{
        const detailsFullLink = `${urlDetails}/${id}?${apiKey}&language=pt-BR`;
        getDetailsMovie(detailsFullLink);
    }, []);

    return (
        <Container>
            <Header/>
            { movie !== null ?
                <Main>
                    <SectionMovie>
                
                
                                
                <DivSection className="img">
                    <CardMovie movie={movie} typeCard="cardDetails"/>
                </DivSection>
                <DivSection className="title">
                    <Title>{movie.title}</Title>
                    <Text className="dateTime">{formatDate(movie.release_date)} • {movie.runtime}min</Text>
                </DivSection>
                <DivSection className="star">
                    <Subtitle>⭐{movie.vote_average.toFixed(1)}</Subtitle>
                </DivSection>
                <DivSection className="gender">
                <H3>Gênero</H3>
                <Text className="gender">{movie.genres.map(genre=>(genre.name)).join(" | ")} </Text>
                </DivSection>
                <DivSection className="sinopse">
                    <H3>Sinopse</H3>
                    <Text className="textSinopse">{movie.overview}</Text>
                </DivSection>                      
                
            </SectionMovie>
            </Main>
            :<p>Carregando...</p>}
            <Footer/>
        </Container>
    )
        
}
export default Details;