import clsx from "clsx";
import React, { ReactElement } from "react";
import s from "./manga-chapter.module.scss";
import {
  animeControllerGetAllAnime,
  animeControllerGetAnimeByName,
  animeControllerGetAnimeChapter,
} from "@/shared/Api/generated";
import { GetStaticProps } from "next";
import { NextPageWithLayout } from "@/pages/_app";
import AsideBarChapter from "@/components/AsideBar/aside-bar-chapter";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

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
        manka: manga.name,
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
  // console.log("PARAMS", params);
  const chapterNumber = parseInt(params?.chapter as string, 10);
  if (isNaN(chapterNumber)) {
    // console.log("not Number");
    return { notFound: true };
  }
  const data = await animeControllerGetAnimeChapter({
    name: params?.manka as string,
    chapter: chapterNumber,
  });
  return { props: { data } };
};
const Chapter: NextPageWithLayout<ChapterProps> = ({ data: chapter }) => {
  // console.log(chapter);
  const param = useParams();

  return (
    <div className={clsx("container", s.chapter)}>
      <div className={s.all_img}>
        {chapter?.img?.map((img,i) => (
          <img key={i} src={img} alt='' />
        ))}
      </div>
      <AsideBarChapter  />
    </div>
  );
};

// Chapter.getLayout = (page) => <ChapterLayout>{page}</ChapterLayout>;
Chapter.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};

export default Chapter;
