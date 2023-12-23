import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { mostViewed } from "@/shared/data/ScrollData";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";

export function ScrollMost() {
  const [scrollProgress, setScrollProgress] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({ dragFree: true });

  const onScroll = useCallback((emblaApi: any) => {
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
    setScrollProgress(progress * 100);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onScroll(emblaApi);
    emblaApi.on("reInit", onScroll);
    emblaApi.on("scroll", onScroll);
  }, [emblaApi, onScroll]);

  // const { data: mangas } = useQuery({
  //   queryKey: ["mangas"],
  //   queryFn: ,
  // });

  return (
    <div className="embla pt-10 md:pt-2" ref={emblaRef}>
      <div className="embla__container ">
        {mostViewed.map((card, i) => (
          <div key={card.name} className="embla__slide rounded-xl pr-8 md:pr-2">
            <div className="relative">
              <span className="absolute top-0 h-8 w-10 bg-orange-600 pl-4 pt-1">
                {i + 1}
              </span>
            </div>
            <Link href={`manka/${card.name}`}>
              <img
                className="max-w-[200px] rounded-xl md:max-w-[100px]"
                src={card.img}
                alt=""
              />
            </Link>
          </div>
        ))}
      </div>
      {/* <div className={s.embla__progress}>
        <div
          className={s.embla__progress__bar}
          style={{ transform: `translate3d(${scrollProgress}%,0px,0px)` }}
        />
      </div> */}
    </div>
  );
}
