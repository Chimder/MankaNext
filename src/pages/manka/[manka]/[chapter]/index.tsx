import clsx from "clsx";
import React, { ReactElement } from "react";
import s from "./manga-chapter.module.scss";
import { animeControllerGetAnimeByName } from "@/shared/Api/generated";
import { NextPageWithLayout } from "@/pages/_app";
import AsideBarChapter from "@/components/AsideBar/aside-bar-chapter";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

type Chapter = {
  animeName: string;
  chapter: number;
  img: string[];
  name: string;
};
const Chapter: NextPageWithLayout = () => {
  const router = useRouter();

  const {
    data: manga,
    isSuccess,
    isFetchedAfterMount,
  } = useQuery({
    queryKey: ["manga"],
    queryFn: () =>
      animeControllerGetAnimeByName({ name: router?.query?.manka as string }),
    staleTime: 0,
    enabled: !!router?.query?.manka,
  });

  const chapters = manga?.chapters.find(
    (chap) => chap.chapter == Number(router?.query?.chapter)
  );

  if (!isFetchedAfterMount) {
    return <div>pending</div>;
  }

  return (
    <div className={clsx("container", s.chapter)}>
      <div className={s.all_img}>
        {chapters?.img?.map((chap, i) => (
          <img key={i} src={chap} alt='' />
        ))}
      </div>
      <AsideBarChapter data={manga} isSuccess={isSuccess} />
    </div>
  );
};

Chapter.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};

export default Chapter;
