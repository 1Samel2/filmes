import { useEffect, useState } from "react";
import * as C from "./styles";
import Button from "../../components/Button";
import { getImages } from "../../utils/getimages";
import Slider from "../../components/Slider";
import { useNavigate } from "react-router-dom";
import {
  getMovies,
  movieTop,
  seriesPopular,
  personals,
} from "../../services/getData";

export default function Home() {
  const navigate = useNavigate();

  const [movies, setMovies] = useState();
  const [topMoviesList, setTopMoviesList] = useState();
  const [seriesPopulares, setSeriesPopulares] = useState();
  const [personal, setPersonal] = useState();

  useEffect(() => {
    async function getAllData() {
      Promise.all([getMovies(), movieTop(), seriesPopular(), personals()])
        .then(([movies, topMoviesList, seriesPopulares, personal]) => {
          setMovies(movies);
          setTopMoviesList(topMoviesList);
          setSeriesPopulares(seriesPopulares);
          setPersonal(personal);
        })
        .catch((error) => console.error(error));
    }
    getAllData();
  }, []);


  return (
    <>
      {movies && (
        <C.Container image={getImages(movies.backdrop_path)}>
          <C.Content>
            <div className="content-text-paragraph">
              <h1>{movies.title}</h1>
              <p>{movies.overview}</p>
              <div className="button">
                <Button onClick="">Assista Agora</Button>
                <Button>Assista o Trailer</Button>
              </div>
            </div>
            <C.DivImg>
              <img src={getImages(movies.poster_path)} alt="" />
            </C.DivImg>
          </C.Content>
        </C.Container>
      )}
      {topMoviesList && <Slider info={topMoviesList} title={"Top Filmes"} />}
      {seriesPopulares && (
        <Slider info={seriesPopulares} title={"Top Series"} />
      )}
      {personal && <Slider info={personal} title={"Top Actor"} />}
    </>
  );
}
