import { animeControllerGetAnimeByGenres } from "@/shared/Api/generated";
import { useAppSelector } from "@/shared/Store/store";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import React, { useEffect, useRef } from "react";
import { useIntersection } from "@mantine/hooks";
import Link from "next/link";

type pageParam = {
  pageParam: number;
};

export const MangaList = () => {
  const { genresTag, langTag, statusTag, sortTag, inputValue } = useAppSelector(
    (store) => store.tagSlice,
  );

  const fetchAnimePages = async ({ pageParam }: pageParam) => {
    const response = await animeControllerGetAnimeByGenres({
      name: inputValue,
      genres: genresTag,
      status: statusTag,
      orderField: sortTag,
      orderDirection: "",
      page: pageParam,
      perPage: 30,
    });

    return response;
  };

  const {
    data: mangas,
    refetch,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["mangas"],
    queryFn: fetchAnimePages,
    getNextPageParam: (lastPage, pages, lastPageParam) => {
      if (lastPage.length === 0) {
        return undefined;
      }
      return lastPageParam + 1;
    },
    initialPageParam: 1,
  });
  console.log("INFIN", mangas);
  useEffect(() => {
    refetch();
  }, [genresTag, langTag, statusTag, sortTag, inputValue, refetch]);

  const lastVideoRef = useRef(null);
  const { ref, entry } = useIntersection({
    root: lastVideoRef.current,
    threshold: 1,
  });

  console.log(hasNextPage);
  useEffect(() => {
    if (entry?.isIntersecting && hasNextPage) {
      fetchNextPage();
    }
  }, [entry]);
  if (!mangas) {
    return <div>Not found</div>;
  }
  return (
    <div className="container border-[1px] border-rose-600">
      <div className="grid w-full grid-cols-6 gap-5">
        {mangas?.pages?.flat().map((manga) => (
          <Link
            className="relative z-50 h-full w-full"
            key={manga?.name}
            href={`/manka/${manga?.name}`}
          >
            <img
              ref={ref}
              src={manga?.img}
              alt=""
              className="block h-full max-w-full rounded"
            />
            <div
              className="absolute bottom-1 z-50 flex w-full px-3 py-0 font-medium text-white "
              style={{ WebkitTextStroke: "0.2px black" }}
            >
              <img src="/img/lang/JP.svg" width={20} height={20} alt="" />
              <div>{manga?.name}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
