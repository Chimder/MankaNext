import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { animeControllerGetAllAnime } from "@/shared/Api/generated";
import { useQuery } from "@tanstack/react-query";
import { Scroll } from "@/components/scroll";
import { ScrollMost } from "@/components/scroll-pop";

function MainManga() {
  const { data: session } = useSession();

  const { data: mangas, isSuccess } = useQuery({
    queryKey: ["manga"],
    queryFn: () => animeControllerGetAllAnime(),
  });

  return (
    <main className=" h-full w-full border-[1px] border-pink-600">
      <section className="items-center justify-center ">
        <Scroll></Scroll>
      </section>
      <section className="">
        <h1 className="text-4xl">The most trending now</h1>
        <ScrollMost></ScrollMost>
      </section>
    </main>
  );
}

export default MainManga;
