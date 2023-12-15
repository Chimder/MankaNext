import clsx from "clsx";
import React, { ReactElement } from "react";
import s from "./manga-chapter.module.scss";
import {
  animeControllerGetAllAnime,
  animeControllerGetAnimeChapter,
} from "@/shared/Api/generated";
import { GetStaticProps } from "next";
import { NextPageWithLayout } from "@/pages/_app";
import Layout from "@/components/layout";
import LayoutTwo from "@/components/chapterLayout";

type Chapter = {
  animeName: string;
  chapter: number;
  img: string[];
  name: string;
};
type ChapterProps = {
  data?: Chapter;
};

export const getStaticPaths = async () => {
  const data = await animeControllerGetAllAnime();
  const paths = data.flatMap((manga) =>
    (manga?.chapters || []).map((chapter) => ({
      params: {
        manga: manga.name,
        chapter: chapter.chapter.toString(),
      },
    }))
  );
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  console.log("PARAMS", params);
  const chapterNumber = parseInt(params?.chapter as string, 10);
  if (isNaN(chapterNumber)) {
    console.log("not Number");
    return { notFound: true };
  }
  const data = await animeControllerGetAnimeChapter({
    name: params?.manga as string,
    chapter: chapterNumber,
  });
  return { props: { data } };
};
const Chapter: NextPageWithLayout<ChapterProps> = ({ data: chapter }) => {
  console.log(chapter);
  return (
    <main className={clsx("container", s.chapter)}>
      <section>
        <div className={s.all_img}>
          {chapter?.img.map((img) => (
            <img key={img} src={img} alt='' />
          ))}
        </div>
      </section>
    </main>
  );
};

// Chapter.getLayout = (page) => <ChapterLayout>{page}</ChapterLayout>;
Chapter.getLayout = function getLayout(page: ReactElement) {
  return <LayoutTwo>{page}</LayoutTwo>;
};

export default Chapter;
