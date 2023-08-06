import { useEffect, useState } from "react";
import * as C from "./styles";
import Button from "../../components/Button";
import { getImages } from "../../utils/getimages";
import Slider from "../../components/Slider";
import { getMovies, movieTop } from "../../services/getData";

export default function Home() {
  const [movies, setMovies] = useState();
  const [topMoviesList, setTopMoviesList] = useState();

  useEffect(() => {
    Promise.all([getMovies(), movieTop(),])
      .then(([movies, topMoviesList]) => {
        setMovies(movies);
        setTopMoviesList(topMoviesList);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      {movies && (
        <C.Container img={getImages(movies.backdrop_path)}>
          <C.Content>
            <div className="content-text-paragraph">
              <h1>{movies.title}</h1>
              <p>{movies.overview}</p>
              <div className="button">
                <Button>Assista Agora</Button>
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
    </>
  );
}
