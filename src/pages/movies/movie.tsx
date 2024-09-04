import MovieMoreCard from "@/components/common/movies/movie-more-card";
import VideoPlayer from "@/components/video-player";
import { MovieInterface } from "@/interfaces/movie-interface";
import { useLocation } from "react-router-dom";

export default function Movie() {
  const location = useLocation()
  const movie: MovieInterface = location.state

  return (
    <div className="min-h-screen">
      <div className="p-4 border rounded-md mt-4 mb-8 w-full h-[800px]">
        <VideoPlayer filename={movie.video} />
      </div>
      <MovieMoreCard movie={movie} />
    </div>
  )
}