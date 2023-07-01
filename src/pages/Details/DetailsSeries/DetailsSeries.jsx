import React, { useState, useEffect } from "react";
import { Container, Main, Title, Subtitle, SectionSerie, H3, Text, DivSection } from "./Styles"
import { useParams } from "react-router-dom";
//quando preciso acessar o parametro que está intriseco na url
import Header from "../../../components/Header/Header";
import CardSerie from "../../../components/CardSerie/CardSerie";
import Footer from "../../../components/Footer/Footer";


const Details = () => {

    const apiKey = process.env.REACT_APP_API_KEY;
    const urlDetails = process.env.REACT_APP_API_BASE;

    const { id } = useParams();
    const [serie, setSerie] = useState(null);

    const getDetailsSerie = async (url) => {

        const resp = await fetch(url);
        const data = await resp.json();

        setSerie(data);
        console.log(data)
    }

    const formatDate = (dateString) => {
        const [year, month, day] = dateString.split("-");
        return `${day}/${month}/${year}`;
    };


    useEffect(() => {
        const detailsFullLink = `${urlDetails}/tv/${id}?${apiKey}&language=pt-BR`;
        getDetailsSerie(detailsFullLink);
    }, []);

    return (
        <Container>
            <Header />
            {serie !== null ?
                <Main>
                    <SectionSerie>
                        <DivSection className="img">
                            <CardSerie serie={serie} typeCard="cardDetails" />
                        </DivSection>
                        <DivSection className="title">
                            <Title>{serie.name}</Title>
                            <Text className="dateTime">{formatDate(serie.first_air_date)} • {formatDate(serie.last_air_date)}</Text>
                        </DivSection>
                        <DivSection className="star">
                            <Subtitle>⭐{serie.vote_average.toFixed(1)}</Subtitle>
                        </DivSection>
                        <DivSection className="gender">
                            <H3>Gênero</H3>
                            <Text className="gender">{serie.genres.map(genre => (genre.name)).join(" | ")} </Text>
                        </DivSection>
                        <DivSection className="sinopse">
                            <H3>Sinopse</H3>
                            <Text className="textSinopse">{serie.overview}</Text>
                        </DivSection>

                    </SectionSerie>
                </Main>
                : <p>Carregando...</p>}
            <Footer />
        </Container>
    )

}
export default Details;