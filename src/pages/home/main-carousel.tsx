import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function MainCarousel() {
  return (
    <Carousel className="w-full mb-12">
      <CarouselContent>
        <CarouselItem>
          <div className="border h-[600px]"></div>
        </CarouselItem>
        <CarouselItem>
          <div className="border h-[600px]"></div>
        </CarouselItem>
        <CarouselItem>
          <div className="border h-[600px]"></div>
        </CarouselItem>
        <CarouselItem>
          <div className="border h-[600px]"></div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
