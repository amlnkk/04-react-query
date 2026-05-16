import type { MoviesResponse } from "../types/movie";
import axios from "axios";

export async function fetchMovies(
  query: string,
  page: number,
): Promise<MoviesResponse> {
  const response = await axios.get<MoviesResponse>(
    "https://api.themoviedb.org/3/search/movie",
    {
      params: { query, page },
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
      },
    },
  );
  return response.data;
}
