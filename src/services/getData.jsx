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
  } = await api.get("/movie/top_rated");

return results
}
 
