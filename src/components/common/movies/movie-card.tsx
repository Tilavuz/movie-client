import { serverUrl } from "@/helpers/shared";
import { MovieInterface } from "@/interfaces/movie-interface";
import { Clapperboard } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function MovieCard({ movie }: { movie: MovieInterface }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/movies/${movie.video}`, { state: movie })}
      className="max-w-[300px] border w-full select-none cursor-pointer relative"
    >
      <div className="w-full h-[300px]">
        {movie.photo === "movie-default-image.png" ? (
          <div className="h-full flex items-center justify-center opacity-60">
            <Clapperboard size={84} />
          </div>
        ) : (
          <img
            className="w-full h-full object-cover object-top"
            src={`${serverUrl}/uploads/${movie?.photo}`}
            alt="movie profile"
          />
        )}
      </div>
      <div className="bg-slate-800 h-[100px] flex items-center justify-center px-8 w-full">
        <p className="line-clamp-2 text-center text-white">
          {movie?.title ??
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, fuga!"}
        </p>
      </div>
      <div className="absolute top-0 left-0 h-full w-full hover:bg-black/20 transition-all"></div>
    </div>
  );
}
