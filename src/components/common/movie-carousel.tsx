import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

export default function MovieCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent className="w-full">
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1 border">
            <div>
              <div className="flex aspect-square items-center justify-center p-6"></div>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1 border">
            <div>
              <div className="flex aspect-square items-center justify-center p-6"></div>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1 border">
            <div>
              <div className="flex aspect-square items-center justify-center p-6"></div>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1 border">
            <div>
              <div className="flex aspect-square items-center justify-center p-6"></div>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1 border">
            <div>
              <div className="flex aspect-square items-center justify-center p-6"></div>
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="left-[5px]" />
      <CarouselNext className="right-[25px]" />
    </Carousel>
  );
}
