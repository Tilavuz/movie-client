import { RootState } from "@/app/store";
import { getSomeMovies } from "@/features/movie-slice";
import { MovieInterface } from "@/interfaces/movie-interface";
import movieService from "@/services/movie-service";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieCard from "@/components/common/movies/movie-card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useNavigate, useParams } from "react-router-dom";

export default function Movies() {
  const { movies } = useSelector((state: RootState) => state.movie);
  const { page } = useParams()
  const intPage = parseInt(page ?? "1", 10) 
  const limit = 2;
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const hanglePage = (page: number) => {
    navigate(`/movies/page/${page}`)
  }

  useEffect(() => {
    (async function () {
      try {
        const movies:
          | {
              data: MovieInterface[];
              currentPage: number;
              totalPages: number;
              totalMovies: number;
              moviesPerPage: number;
            }
          | string = await movieService.getMovies({ page: intPage, limit });

        if (typeof movies === "string") {
          throw new Error(movies);
        }
        dispatch(getSomeMovies({ movies }));
      } catch (error) {
        console.log(error);
      }
    })();
  }, [dispatch, limit, intPage]);

  return (
    <div>
      <div className="flex flex-wrap items-start gap-4 min-h-screen">
        {movies?.movies &&
          movies?.movies?.data?.map((movie) => {
            return <MovieCard key={movie._id} movie={movie} />;
          })}
      </div>
      <Pagination className="my-8 select-none">
        <PaginationContent>
          <PaginationItem className="cursor-pointer">
            <PaginationPrevious
              onClick={() => {
                if(intPage > 1) {
                  hanglePage(intPage - 1)
                }
              }}
            />
          </PaginationItem>
          {Array.from(
            { length: movies?.movies?.totalPages ?? 0 },
            (_, index) => (
              <PaginationItem
                onClick={() => {
                  hanglePage(index + 1)
                }}
                className="cursor-pointer"
                key={index + 1}
              >
                <PaginationLink isActive={index + 1 === intPage}>
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            )
          )}
          <PaginationItem className="cursor-pointer">
            <PaginationNext
              onClick={() =>
              {
                if(movies?.movies?.totalPages && intPage < movies?.movies?.totalPages) {
                  hanglePage(intPage + 1)
                }
              }
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
