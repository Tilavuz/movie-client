import MovieCarousel from "@/components/common/movie-carousel";
import MainCarousel from "./main-carousel"


export default function Home() {
  return (
    <div className="min-h-screen">
      <MainCarousel />
      <div className="flex items-start gap-4">
        <div className="border flex-1 h-[600px] p-2">
          <MovieCarousel />
        </div>
        <aside className="border w-full max-w-[350px] h-[700px]">

        </aside>
      </div>
    </div>
  );
}