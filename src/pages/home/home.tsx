import MovieCarousel from "@/components/common/movie-carousel";
import MainCarousel from "./main-carousel"
import VideoPlayer from "@/components/video-player";


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
      <VideoPlayer filename="1e2c7991-a5a4-4731-8afe-8fad0b504be7.mp4" />
    </div>
  );
}