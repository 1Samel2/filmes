import api from "./api";

export async function getMovies() {
  const {
    data: { results },
  } = await api.get("/movie/popular");
  return results[0];
}

export async function movieTop() {
  const {
    data: { results },
  } = await api.get("/movie/popular");

  return results;
}

export async function seriesPopular() {
  const {
    data: { results },
  } = await api.get("/tv/top_rated");

  return results;
}

export async function personals() {
  const {
    data: { results },
  } = await api.get("/person/popular");

  return results;
}
