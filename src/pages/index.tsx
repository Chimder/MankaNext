import Head from "next/head";
import React from "react";
import { Scroll } from "@/components/scroll";
import { ScrollMost } from "@/components/scroll-pop";
import { HandlerMangaSwag, getPopularManga } from "@/shared/Api/generatedv2";
import LastViewList from "@/components/lastViewList";
import type { GetServerSideProps } from "next";
type Props = {
  data: HandlerMangaSwag[];
};

export const getServerSideProps: GetServerSideProps<{
  data: HandlerMangaSwag[];
}> = async ({ res }) => {
  const data = await getPopularManga();

  return { props: { data } };
};

function MainManga({ data: manga }: Props) {
  return (
    <>
      <Head>
        <title>Manka</title>
        <meta name="description" content="Read Manka" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" h-full w-full border-[1px] border-pink-600">
        <section className="items-center justify-center ">
          <Scroll></Scroll>
        </section>
        <LastViewList />
        <section className="pl-2">
          <h1 className="text-4xl md:text-2xl">The most popular now</h1>
          <ScrollMost popular={manga}></ScrollMost>
        </section>
      </main>
    </>
  );
}

export default MainManga;
