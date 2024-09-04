import { AxiosError } from "axios";
import { publicInstance, publicVideoInstance } from "./api/client-api";
import { movieRouter } from "./routers/movie-router";

class MovieService {
  async getMovieByFilename(filename: string) {
    try {
      const res = await publicVideoInstance.get(
        movieRouter.getFilename(filename)
      );
      return res;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(error.response?.data?.message || error.message);
      } else {
        throw new Error("Server error!");
      }
    }
  }
  async getSomeMovies({ skip, count }: { skip: number; count: number }) {
    try {
      const res = await publicInstance.get(
        movieRouter.getSomeMovies({ skip, count })
      );
      return res.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        return Promise.reject(error.response?.data?.message || error.message);
      } else {
        return Promise.reject("Server error!");
      }
    }
  }
  async getMovies({ page, limit }: { page: number; limit: number }) {
    const res = await publicInstance.get(
      movieRouter.getMovies({ page, limit })
    );
    return res.data;
  }
}

export default new MovieService();
