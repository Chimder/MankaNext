import {
  mangaControllerGetUserFavorite,
  userControllerAddFavorite,
} from "@/shared/Api/generated";
import { useRouter } from "next/router";
import React from "react";
import { signIn, useSession } from "next-auth/react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { cn } from "@/shared/lib/utils";
import axios from "axios";
import { GetServerSidePropsContext } from "next";
import { Badge } from "@/components/ui/badge";
import AnimeRating from "@/components/anime-rating";
import AnimeRecomend from "@/components/a-recomend";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const id = context?.params?.id as string;
  const config = {
    params: {
      token: process.env.KODIC_ACCESS_TOKEN,
      id: id as string,
      with_material_data: true,
    },
  };

  const response = await axios.get("https://kodikapi.com/search", config);
  const data = response.data.results[0];

  return { props: { data } };
}

const Anime = ({ data: anime }: any) => {
  console.log("MAINANIM", anime);
  const { data: session } = useSession();
  const router = useRouter();

  const { data: favorite, refetch: refetchFavorite } = useQuery({
    queryKey: ["isFavorite"],
    queryFn: () =>
      mangaControllerGetUserFavorite({
        email: session?.user?.email as string,
        name: anime.name,
      }),
    enabled: !!session,
    staleTime: 0,
  });

  const { mutate } = useMutation({
    mutationKey: ["addFavorite"],
    mutationFn: () =>
      userControllerAddFavorite({
        name: anime.name,
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

  return (
    <main className="overflow-x-hidden ">
      {/* <section className="relative flex max-h-[480px] items-center  lg:absolute  lg:-z-10 "> */}
      <div
        className="absolute left-0 top-0 z-[-2] h-[640px] w-full "
        style={{
          background: `url(${anime.material_data.poster_url}) no-repeat top 38% center / 100%`,
        }}
      >
        <div className="absolute inset-x-0 bottom-0 h-full bg-black/10 backdrop-blur-[1px] lg:z-40 md:bg-gradient-dark"></div>
      </div>
      {/* </section> */}
      <section className="z-100 flex h-full w-full pt-[36vh] lg:pt-[30vh] md:pt-40 ">
        <div className="containerM z-100 flex w-full bg-background md:bg-transparent md:p-4">
          <div className="z-90 -mt-28 w-1/5 lg:mt-0 lg:backdrop-blur-md md:backdrop-blur-none">
            <img
              className="md: z-100 w-full self-end rounded-lg lg:rounded-none"
              src={anime?.material_data?.poster_url}
              alt=""
            />
          </div>
          <div className="z-100 w-4/5 lg:backdrop-blur-md md:backdrop-blur-none">
            <div className="flex items-center justify-between ">
              <h1 className="relative flex px-5 py-0 text-3xl lg:text-2xl md:px-2 md:text-lg">
                {anime?.title_orig}
              </h1>
              <AnimeRating anime={anime.material_data} />
            </div>
            <div className="relative my-2.5 ml-5 flex w-full flex-wrap items-center lg:ml-2 md:ml-1">
              <Button
                onClick={addFavorite}
                className={cn(
                  favorite
                    ? "bg-primary hover:bg-primary-foreground"
                    : "bg-teal-600 hover:bg-teal-600/60",
                  "text-white md:py-0 sm:mr-3 sm:w-full",
                )}
              >
                {favorite ? "Favorite" : "Add To Favorite"}
              </Button>
              {anime?.material_data?.genres?.map((genres: any, i: number) => (
                <Badge
                  className="lg:-py-0 ml-3 cursor-default bg-button text-white hover:bg-slate-600 lg:rounded-md lg:px-1 md:mt-2 sm:mt-1"
                  key={i}
                >
                  {genres}
                </Badge>
              ))}
              {/* <DotPublication {...manga} /> */}
            </div>
            <div className="mx-5 text-lg xl:text-[16px] lg:text-sm md:hidden">
              {anime?.material_data.description}
            </div>
          </div>
        </div>
      </section>
      <section className="containerM mx-auto h-full w-full bg-background pb-40 pt-2.5">
        <div className="flex md:flex-col">
          <aside className="w-1/5 md:flex md:w-full md:flex-col md:items-center md:pt-4">
            <span className="text-xl font-semibold lg:text-sm">
              This Anime has Manga
            </span>
            <AnimeRecomend name={anime?.material_data?.title_en} />
          </aside>
          <div className="w-4/5 px-5 md:w-full md:px-0">
            <span className="lg:text-md text-xl font-semibold md:px-4">
              Episode
            </span>
            <div className="pt-3 md:px-4 md:pb-14">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src={anime.link}
                  className="h-[60vh]  w-full"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Anime;
