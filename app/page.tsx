import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Product from "@/components/Product"
import { useSupabase } from '@/lib/supabase/hooks/useSupabase';


export default function Home() {
  
  return (
    <div className="w-full overflow-x-hidden bg-white">
      <div className="w-full -z-0 scale-90 lg:scale-100">
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <Image
                priority
                width={2000}
                height={2000}
                className="w-full h-[500px] object-top object-cover lg:object-cover "
                src="https://m.media-amazon.com/images/I/91O7OLaxSTL._SX3000_.jpg"
                alt="Carousel1"
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                priority
                width={2000}
                height={2000}
                className="w-full h-[500px] object-top object-cover "
                src="https://m.media-amazon.com/images/I/81dechxRJEL._SX3000_.jpg"
                alt="Carousel2"
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                priority
                width={2000}
                height={2000}
                className="w-full h-[500px] object-top object-cover lg:object-cover "
                src="https://m.media-amazon.com/images/I/91IVyMohcOL._SX3000_.jpg"
                alt="Carousel3"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
