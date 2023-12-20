import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { BsChevronDoubleLeft } from "react-icons/bs";
import { pages } from "@/shared/data/ScrollData";
import Link from "next/link";
import {
  DoubleArrowRightIcon,
  DoubleArrowLeftIcon,
} from "@radix-ui/react-icons";

export function Scroll() {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="relative z-10 box-content flex w-full">
        {pages.map((card) => (
          <div
            key={card.name}
            className="embla__slide h-[80vh] w-full"
            style={{ backgroundImage: `url(${card.img})` }}
          >
            <div className="z-100 box-border flex w-full items-end justify-between ">
              <div className="flex text-white ">
                <div className="z-999 mr-5 w-72 flex-shrink-0 overflow-hidden rounded-sm p-8">
                  <Link href={`/manka/${card.name}`}>
                    <img
                      className="z-999 flex items-center"
                      src={card.img2}
                      alt=""
                    />
                  </Link>
                </div>
                <div
                  className="absolute bottom-0 z-20 box-border block h-1/2 w-full"
                  style={{
                    backgroundImage:
                      "linear-gradient(0deg, #1b1f35f2, #1b1f35cc 50%, #1b1f3500)",
                  }}
                />
                <div className="z-999 flex items-center">
                  <Link
                    href={`/manka/${card.name}`}
                    className=" flex-shrink-0 text-5xl "
                  >
                    {card.name}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="embla__prev" onClick={scrollPrev}>
        <DoubleArrowLeftIcon className="z-999 h-14 w-14 fill-current text-red-600 hover:text-red-950 " />
      </div>
      <div className="embla__next" onClick={scrollNext}>
        <DoubleArrowRightIcon className="z-999 h-14 w-14 fill-current text-blue-600 hover:text-blue-950" />
      </div>
    </div>
  );
}
