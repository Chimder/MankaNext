import { animeControllerGetAnimeByGenres } from "@/shared/Api/generated";
import { useAppSelector } from "@/shared/Store/store";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import s from "./mangaList.module.scss";
import { MangaCard } from "./MangaCard";
import clsx from "clsx";

export const MangaList = () => {
  const { genresTag, langTag, statusTag, sortTag, inputValue } = useAppSelector(
    (store) => store.tagSlice
  );
  const { data: mangas, refetch } = useQuery({
    queryKey: ["mangas"],
    queryFn: () =>
      animeControllerGetAnimeByGenres({
        name: inputValue,
        genres: genresTag,
        status: statusTag,
        orderField: sortTag,
        orderDirection: "",
      }),
  });

  useEffect(() => {
    refetch();
  }, [genresTag, langTag, statusTag, sortTag, inputValue, refetch]);
  return (
    <div className={clsx("container")}>
      <div className={s.manga_list}>
        {mangas!?.map((manga) => (
          <MangaCard key={manga.name} {...manga} />
        ))}
      </div>
    </div>
  );
};
