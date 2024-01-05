import React from "react";
import {
  MangaDto,
  mangaControllerGetMankaPopular,
} from "@/shared/Api/generated";
import { Scroll } from "@/components/scroll";
import { ScrollMost } from "@/components/scroll-pop";
type Props = {
  data: MangaDto[];
};

export async function getServerSideProps() {
  const data = await mangaControllerGetMankaPopular();
  return { props: { data } };
}
function MainManga({ data: manga }: Props) {
  return (
    <main className=" h-full w-full border-[1px] border-pink-600">
      <section className="items-center justify-center ">
        <Scroll></Scroll>
      </section>
      <section className="">
        <h1 className="text-4xl md:text-2xl">The most popular now</h1>
        <ScrollMost popular={manga}></ScrollMost>
      </section>
      {/* <section>
        <h1>Recently Updated</h1>
      </section> */}
    </main>
  );
}

export default MainManga;
