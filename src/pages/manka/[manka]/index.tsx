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
    <main>
      <section className="relative z-10 flex max-h-[480px] items-center overflow-y-hidden border-[1px] border-red-500">
        <div className=" h-full w-full">
          <img className="h-full w-full" src={manga.imgHeader} alt="" />
          <div className=" absolute inset-x-0 bottom-0 h-full bg-black/30 backdrop-blur-0"></div>
        </div>
      </section>
      <section className="z-50 mx-auto flex h-full w-full border-[1px] border-white 2xl:px-44">
        <div className="z-50 -mt-28 w-1/5">
          <img className="w-full self-end rounded-lg" src={manga.img} alt="" />
        </div>
        <div className="w-4/5 overflow-hidden border-[1px] border-white">
          <div className="flex items-center justify-between overflow-hidden border-[1px] border-emerald-500">
            <h1 className="relative flex px-5 py-0 text-3xl">{manga.name}</h1>
            {/* <div className="p-2">Another iconst icon icon</div> */}
            <RatingStars {...manga}></RatingStars>
          </div>
          <div className="relative my-2.5 ml-5 flex w-full items-center">
            <Button
              onClick={addFavorite}
              className={cn(
                favorite
                  ? "bg-orange-600 hover:bg-orange-600/60"
                  : "bg-teal-600 hover:bg-teal-600/60",
                "text-white",
              )}
            >
              {favorite ? "Favorite" : "Add To Favorite"}
            </Button>
            {manga.genres.map((genres, i) => (
              <Badge
                className="ml-3 cursor-default bg-pink-700 text-white hover:bg-pink-600"
                key={i}
              >
                {genres}
              </Badge>
            ))}
            <DotPublication {...manga} />
          </div>
          <div className="mx-5">{manga.describe}</div>
        </div>
      </section>
      <section className="z-50 mx-auto h-full w-full border-[1px] border-white pt-2.5 2xl:px-44">
        <div className="flex">
          <aside className="w-1/5 border-[1px] border-fuchsia-500">
            <span className="text-xl font-semibold ">This manga has Anime</span>
            <Recomend />
          </aside>
          <div className="w-4/5 border-[1px] border-green-700 px-5">
            <span className="text-xl font-semibold">Chapters</span>
            <div className="pt-3">
              {manga.chapters?.map((chap) => (
                <Link
                  className="flex items-center justify-between border-[1px] border-yellow-600 p-4"
                  key={chap.name}
                  href={`/manka/${manga.name}/${chap.chapter}`}
                >
                  <div className="">
                    Ch. {chap.chapter} - {chap.name}
                  </div>
                  <div className="">{formatCreatedAt(chap.createdAt)}</div>
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
