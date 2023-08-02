import { useEffect, useState } from "react";
import * as C from "./styles";
import api from "../../services/api";
import Button from "../../components/Button";

export default function Home() {
  const [dados, setDados] = useState();

  useEffect(() => {
    async function movieDate() {
      const {
        data: { results },
      } = await api.get("/movie/popular");

      setDados(results[0]);
      console.log(results[0]);
    }
    movieDate();
  }, []);

  return (
    <>
      {dados && (
        <C.Container img="https://image.tmdb.org/t/p/original/yF1eOkaYvwiORauRCPWznV9xVvi.jpg">
          <C.Content>
            <div className="content-text-paragraph">
              <h1>{dados.title}</h1>
              <p>{dados.overview}</p>
              <div className="button">
                <Button>Assista Agora</Button>
                <Button>Assista o Trailer</Button>
              </div>
            </div>
            <C.DivImg>
              <img
                src="https://image.tmdb.org/t/p/original/itYONYDHpJqTuu8BCXAtHxgpglq.jpg"
                alt=""
              />
            </C.DivImg>
          </C.Content>
        </C.Container>
      )}
    </>
  );
}
