import React, { ReactElement } from "react";
import AsideBarChapter from "@/components/aside-bar-chapter";
import { getChapter } from "@/shared/Api/generatedv2";
import { ChapterHead } from "@/components/seo-head";

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

export const getServerSideProps = async (ctx: any) => {
  const manka = ctx.query.manka;
  const chapter = ctx.query.chapter;

  const data = await getChapter({ chapter: chapter, name: manka });
  return { props: { data } };
};

const Chapter = ({ data: chapter }: Props) => {
  return (
    <>
      <ChapterHead data={chapter} />
      <div className="flex items-center justify-center">
        <div className="flex flex-col ">
          {chapter.img?.map((chap, i) => (
            <div key={i}>
              <img src={chap} alt="chap" />
            </div>
          ))}
        </div>
        <AsideBarChapter name={chapter.animeName} />
      </div>
    </>
  );
};

Chapter.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};

export default Chapter;
