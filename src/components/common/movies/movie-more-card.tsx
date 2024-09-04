import { serverUrl } from "@/helpers/shared";
import { MovieInterface } from "@/interfaces/movie-interface";
import { Clapperboard } from "lucide-react";

export default function MovieMoreCard({ movie }: { movie: MovieInterface }) {
  return (
    <div className="w-full border p-2 flex items-start gap-4">
      <div className="w-[300px] h-[400px] border rounded-sm">
        {movie?.photo === "movie-default-image.png" ? (
          <div className="h-full flex items-center justify-center opacity-60">
            <Clapperboard size={54} />
          </div>
        ) : (
          <div className="w-full h-full">
            <img className="object-cover w-full h-full" src={`${serverUrl}/uploads/${movie.photo}`} alt="profile image" />
          </div>
        )}
      </div>
      <ul className="flex-1">
        <li className="">
          {
            movie?.title
          }
        </li>
      </ul>
    </div>
  );
}
