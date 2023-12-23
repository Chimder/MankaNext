import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { mangaControllerGetAllManga } from "@/shared/Api/generated";
import { useQuery } from "@tanstack/react-query";
import { Scroll } from "@/components/scroll";
import { ScrollMost } from "@/components/scroll-pop";

function MainManga() {
  const { data: session } = useSession();

  const { data: mangas, isSuccess } = useQuery({
    queryKey: ["manga"],
    queryFn: () => mangaControllerGetAllManga(),
  });

  return (
    <main className=" h-full w-full border-[1px] border-pink-600">
      <section className="items-center justify-center ">
        <Scroll></Scroll>
      </section>
      <section className="">
        <h1 className="text-4xl md:text-2xl">The most popular now</h1>
        <ScrollMost></ScrollMost>
      </section>
      <section>
        <h1>Recently Updated</h1>
      </section>
    </main>
  );
}

export default MainManga;
