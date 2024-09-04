import { MovieInterface } from "@/interfaces/movie-interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface MovieState {
  loading: boolean;
  error: string | null;
  movies: {
    some_movies: MovieInterface[] | null;
    random_movies: MovieInterface[] | null;
    movies: {
      data: MovieInterface[];
      currentPage: number;
      totalPages: number;
      totalMovies: number;
      moviesPerPage: number;
    } | null;
  };
}

const initialState: MovieState = {
  loading: false,
  error: null,
  movies: {
    some_movies: null,
    random_movies: null,
    movies: null,
  },
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    getSomeMovies: (
      state,
      action: PayloadAction<{
        some_movies?: MovieInterface[];
        random_movies?: MovieInterface[];
        movies?: {
          data: MovieInterface[];
          currentPage: number;
          totalPages: number;
          totalMovies: number;
          moviesPerPage: number;
        };
      }>
    ) => {
      if (action.payload.some_movies) {
        state.movies.some_movies = action.payload.some_movies;
      }
      if (action.payload.random_movies) {
        state.movies.random_movies = action.payload.random_movies;
      }
      if (action.payload.movies) {
        state.movies.movies = action.payload.movies;
      }
      state.loading = false;
    },
    moviesGetStart: (state) => {
      state.loading = true;
    },
  },
});

export const { getSomeMovies } = movieSlice.actions;

export default movieSlice.reducer;
