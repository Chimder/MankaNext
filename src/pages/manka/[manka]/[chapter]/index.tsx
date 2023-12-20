import React, { ReactElement } from "react";
import { animeControllerGetAnimeByName } from "@/shared/Api/generated";
import { NextPageWithLayout } from "@/pages/_app";
import AsideBarChapter from "@/components/aside-bar-chapter";
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

  const { data: manga, isSuccess } = useQuery({
    queryKey: ["manga"],
    queryFn: () =>
      animeControllerGetAnimeByName({ name: router?.query?.manka as string }),
    staleTime: 0,
    enabled: !!router?.query?.manka,
  });

  const chapters = manga?.chapters?.find(
    (chap) => chap.chapter == Number(router?.query?.chapter),
  );

  return (
    <>
      <div className="container flex items-center justify-center">
        <div className="flex flex-col ">
          {chapters?.img?.map((chap, i) => (
            <img className="pt-5" key={i} src={chap} alt="" />
          ))}
        </div>
        <AsideBarChapter data={manga} isSuccess={isSuccess} />
      </div>
      {/* <Progress></Progress> */}
    </>
  );
};

Chapter.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};

export default Chapter;
