import {
  AnimeDto,
  animeControllerGetAllAnime,
  animeControllerGetAnimeByName,
  animeControllerGetUserFavorite,
  userControllerAddFavorite,
} from "@/shared/Api/generated";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import React from "react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Recomend from "@/components/recomend";
import { signIn, useSession } from "next-auth/react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { cn } from "@/shared/lib/utils";
import DotPublication from "@/components/dot-publication";
import RatingStars from "@/components/rating-stars";
import { formatCreatedAt } from "@/shared/lib/data-format";

type MangaProps = {
  data: AnimeDto;
};
export const getStaticPaths = async () => {
  const data = await animeControllerGetAllAnime();
  const paths = await data.map((manga) => ({ params: { manka: manga.name } }));
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = await animeControllerGetAnimeByName({
    name: params?.manka as string,
  });
  return { props: { data }, revalidate: 10 };
};

const Manga = ({ data: manga }: MangaProps) => {
  const { data: session } = useSession();
  const router = useRouter();

  const { data: favorite, refetch: refetchFavorite } = useQuery({
    queryKey: ["isFavorite"],
    queryFn: () =>
      animeControllerGetUserFavorite({
        email: session?.user?.email as string,
        name: manga.name,
      }),
    enabled: !!session,
    staleTime: 0,
  });
  console.log("favorite", favorite);

  const { mutate } = useMutation({
    mutationKey: ["addFavorite"],
    mutationFn: () =>
      userControllerAddFavorite({
        name: manga.name,
        email: session?.user?.email!,
      }),
    onSuccess: () => {
      refetchFavorite();
    },
  });

  const addFavorite = () => {
    if (!session?.user?.email) {
      signIn();
    } else {
      mutate();
    }
  };

  console.log(manga);

  return (
    <main className="overflow-x-hidden ">
      <section className="relative z-40 flex max-h-[480px]   items-center overflow-y-hidden  lg:absolute lg:-z-10">
        <div className="w-full  lg:fixed lg:top-0 lg:-z-40 lg:h-[48vh] md:h-[36vh] ">
          <img className="z-0 h-full w-full " src={manga.imgHeader} alt="" />
          <div className=" absolute inset-x-0 bottom-0 h-full bg-black/30  lg:z-40 lg:backdrop-blur-[1px]"></div>
        </div>
      </section>
      <section className="containerM z-100 mx-auto flex h-full  w-full  lg:pt-[30vh] md:pt-[22vh] ">
        <div className="z-100 -mt-28 w-1/5 lg:mt-0 lg:bg-black/80 lg:backdrop-blur-md">
          <img
            className="z-100 w-full self-end rounded-lg lg:rounded-none"
            src={manga.img}
            alt=""
          />
        </div>
        <div className="z-100 w-4/5 overflow-hidden  lg:bg-black/80 lg:backdrop-blur-md">
          <div className="flex items-center justify-between overflow-hidden  ">
            <h1 className="relative flex px-5 py-0 text-3xl lg:text-2xl md:px-2 md:text-lg">
              {manga.name}
            </h1>
            {/* <div className="p-2">Another iconst icon icon</div> */}
            <RatingStars {...manga}></RatingStars>
          </div>
          <div className="relative my-2.5 ml-5  flex w-full flex-wrap items-center lg:ml-2 md:ml-1">
            <Button
              onClick={addFavorite}
              className={cn(
                favorite
                  ? "bg-orange-600 hover:bg-orange-600/60"
                  : "bg-teal-600 hover:bg-teal-600/60",
                "text-white md:py-0 sm:mr-3 sm:w-full",
              )}
            >
              {favorite ? "Favorite" : "Add To Favorite"}
            </Button>
            {manga.genres.map((genres, i) => (
              <Badge
                className="lg:-py-0 ml-3 cursor-default bg-slate-900 text-white hover:bg-slate-600 lg:rounded-md lg:px-1 md:mt-2 sm:mt-1"
                key={i}
              >
                {genres}
              </Badge>
            ))}
            <DotPublication {...manga} />
          </div>
          <div className="mx-5 text-lg xl:text-[16px] lg:text-sm md:hidden">
            {manga.describe}
          </div>
        </div>
      </section>
      <section className="containerM z-100 mx-auto h-full w-full bg-black  pt-2.5 ">
        <div className="flex md:flex-col">
          <aside className="w-1/5  md:flex  md:w-full  md:flex-col md:items-center md:pt-4">
            <span className="text-xl font-semibold lg:text-sm  ">
              This manga has Anime
            </span>
            <Recomend />
          </aside>
          <div className="w-4/5 px-5 md:w-full md:px-0">
            <span className="lg:text-md text-xl font-semibold md:px-4">
              Chapters
            </span>
            <div className="pt-3 md:px-4 md:pb-14">
              {manga.chapters?.map((chap) => (
                <Link
                  className="my-2 flex items-center justify-between rounded-sm  bg-slate-900 p-4   md:my-1 md:py-3"
                  key={chap.name}
                  href={`/manka/${manga.name}/${chap.chapter}`}
                >
                  <div className="lg:text-sm">
                    Ch. {chap.chapter} - {chap.name}
                  </div>
                  <div className="lg:text-sm">
                    {formatCreatedAt(chap.createdAt)}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Manga;
