import { RootState } from "@/app/store";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getSomeMovies } from "@/features/movie-slice";
import { serverUrl } from "@/helpers/shared";
import { MovieInterface } from "@/interfaces/movie-interface";
import movieService from "@/services/movie-service";
import { Clapperboard, Play } from "lucide-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function MainCarousel() {
  const { movies } = useSelector((state: RootState) => state.movie);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    (async function () {
      try {
        const movies: MovieInterface[] | string =
          await movieService.getSomeMovies({ skip: 0, count: 6 });
          
        if (typeof movies === "string") {
          throw new Error(movies);
        }
        dispatch(getSomeMovies({ some_movies: movies }));
      } catch (error) {
        console.log(error);
      }
    })();
  }, [dispatch]);

  return (
    <div className="h-[600px] mb-12">
      <Carousel className="w-full select-none relative">
        <CarouselContent className="h-full">
          {movies &&
            movies?.some_movies?.map((movie) => {
              return (
                <CarouselItem key={movie._id} className="h-[600px]">
                  <div className="border h-full cursor-pointer relative">
                    {movie?.big_photo === "movie-default-image.png" ? (
                      <div className="h-full flex items-center justify-center opacity-60">
                        <Clapperboard size={84} />
                      </div>
                    ) : (
                      <div className="w-full h-full">
                        <img
                          className="w-full h-full object-cover"
                          src={`${serverUrl}/uploads/${movie?.big_photo}`}
                          alt="movie photo"
                        />
                      </div>
                    )}
                    {
                      movie?.title && <div className="absolute bottom-0 left-0 w-full h-[80px] bg-black/50 flex items-center justify-center text-2xl line-clamp-2">
                        <p>{movie.title}</p>
                      </div>
                    }
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center" onClick={() => navigate(`/movies/${movie.video}`, { state: movie })}>
                      <div className="p-6 rounded-full hover:scale-150 transition bg-black/20">
                        <Play size={54}  />
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
        </CarouselContent>
        <CarouselPrevious className="rounded-none absolute top-0 bottom-0 left-0 m-auto h-16 w-12 bg-black/20" />
        <CarouselNext className="rounded-none absolute top-0 bottom-0 right-0 m-auto h-16 w-12 bg-black/20" />
      </Carousel>
    </div>
  );
}
