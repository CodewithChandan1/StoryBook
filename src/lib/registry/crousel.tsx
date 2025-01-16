import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { ComponentCategory } from "../types";
import { Sliders } from "lucide-react";

export const carouselCategory: ComponentCategory = {
  id: "carousel",
  title: "Carousel",
  icon: Sliders,
  description: "A customizable carousel component with navigation buttons",
  stories: [
    {
      id: "default-carousel",
      title: "Default Carousel",
      description: "A basic carousel with horizontal slides",
      component: (
        <Carousel className="w-full max-w-[600px]">
          <CarouselPrevious />
          <CarouselContent>
            <CarouselItem className="bg-blue-500 text-white text-center p-10">
              Slide 1
            </CarouselItem>
            <CarouselItem className="bg-green-500 text-white text-center p-10">
              Slide 2
            </CarouselItem>
            <CarouselItem className="bg-red-500 text-white text-center p-10">
              Slide 3
            </CarouselItem>
          </CarouselContent>
          <CarouselNext />
        </Carousel>
      ),
      code: `<Carousel className="w-full max-w-[600px]">
  <CarouselPrevious />
  <CarouselContent>
    <CarouselItem className="bg-blue-500 text-white text-center p-10">
      Slide 1
    </CarouselItem>
    <CarouselItem className="bg-green-500 text-white text-center p-10">
      Slide 2
    </CarouselItem>
    <CarouselItem className="bg-red-500 text-white text-center p-10">
      Slide 3
    </CarouselItem>
  </CarouselContent>
  <CarouselNext />
</Carousel>`,
    },
  ],
};
