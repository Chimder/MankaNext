import React, { ReactElement } from "react";
import {
  animeControllerGetAllAnime,
  animeControllerGetAnimeChapter,
} from "@/shared/Api/generated";
import { useRouter } from "next/router";
import { GetStaticProps } from "next";
import AsideBarChapter from "@/components/aside-bar-chapter";

export type ChapterDto = {
  animeName: string;
  chapter: number;
  img: string[];
  name: string;
  createdAt: string;
};
type Props = {
  data: ChapterDto;
};
export const getStaticPaths = async () => {
  const data = await animeControllerGetAllAnime();
  console.log("Data from animeControllerGetAllAnime:", data);
  const paths = await data?.flatMap((anime) => {
    return anime?.chapters?.map((chapterNumber) => ({
      params: { manka: anime.name, chapter: chapterNumber.chapter.toString() },
    }));
  });
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  console.log("Data from getstaticProps:", params);
  const data = await animeControllerGetAnimeChapter({
    name: params?.manka as string,
    chapter: params?.chapter as string,
  });
  return { props: { data } };
};

const Chapter = ({ data: chapter }: Props) => {
  const router = useRouter();
  // console.log(chapter);
  return (
    <>
      <div className="container flex items-center justify-center">
        <div className="flex flex-col ">
          {/* {isFetching
            ? Array.from({ length: 1 }, (_, index) => (
                <React.Fragment key={`skelet-${index}`}>
                  <div
                    className=" h-full w-full"
                    // style={{ paddingBottom: "42%" }}
                  >
                    <div className="absolute inset-0">
                      <Skeleton className="h-full w-full" />
                    </div>
                  </div>
                </React.Fragment>
              ))
            : chapters?.img?.map((chap, i) => (
                <img className="pt-5" key={i} src={chap} alt="" />
              ))} */}
          {chapter?.img?.map((chap, i) => (
            <div key={i}>
              <img src={chap} alt="chap" />
            </div>
          ))}
        </div>
        <AsideBarChapter name={chapter.animeName} />
      </div>
      {/* <Progress></Progress> */}
    </>
  );
};

Chapter.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};

export default Chapter;
