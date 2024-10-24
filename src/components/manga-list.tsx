import { useAppSelector } from "@/shared/Store/store";
import { keepPreviousData, useInfiniteQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";
import { useInView } from "react-intersection-observer";
import { filterAnime } from "@/shared/Api/generatedv2";
import { queryClient } from "@/pages/_app";

type pageParam = {
  pageParam: number;
};

export const MangaList = () => {
  useEffect(() => {
    return () => {
      queryClient.resetQueries({ queryKey: ["mangas"], exact: true });
    };
  }, []);

  const {
    genresTag,
    langTag,
    sortName,
    sortValue,
    statusTag,
    sortTag,
    inputValue,
  } = useAppSelector((store) => store.tagSlice);

  const fetchAnimePages = async ({ pageParam }: pageParam) => {
    const response = await filterAnime({
      name: inputValue,
      genres: genresTag,
      status: statusTag,
      country: langTag,
      orderField: sortName,
      orderSort: sortValue,
      page: pageParam,
      perPage: 30,
    });

    return response;
  };

  const {
    data: mangas,
    fetchNextPage,
    isFetching,
    isFetched,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: [
      "mangas",
      genresTag,
      langTag,
      statusTag,
      sortTag,
      inputValue,
      sortName,
    ],
    queryFn: fetchAnimePages,
    getNextPageParam: (lastPage, pages, lastPageParam) => {
      if (!lastPage || lastPage.length < 28) {
        return undefined;
      }
      return lastPageParam + 1;
    },
    initialPageParam: 1,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    placeholderData: keepPreviousData,
    // staleTime: 30000,
    // retry: 0,
  });

  const { ref, inView } = useInView({ triggerOnce: false, skip: !hasNextPage });
  useEffect(() => {
    if (inView && hasNextPage && isFetched) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetched]);

  return (
    <div className="containerM px-0 pt-8">
      <div className="grid w-full grid-cols-6 gap-5 xl:grid-cols-5 xl:gap-4 lg:grid-cols-4 lg:gap-3 md:grid-cols-3 md:gap-2 md:px-10 sm:px-1">
        {isFetching && !isFetchingNextPage
          ? Array.from({ length: 20 }, (_, index) => (
              <React.Fragment key={`skeleton-${index}`}>
                <div
                  className="relative w-full overflow-hidden rounded-sm"
                  style={{ paddingBottom: "142%" }}
                >
                  <div className="absolute inset-0">
                    <Skeleton className="h-full w-full" />
                  </div>
                </div>
              </React.Fragment>
            ))
          : mangas?.pages?.flat().map(
              (manga) =>
                manga !== null && (
                  <Link
                    className="relative z-50"
                    key={manga?.name}
                    href={`/manka/${manga?.name}`}
                    ref={ref}
                  >
                    <img
                      src={manga?.img}
                      alt=""
                      width={210}
                      height={290}
                      className="h-full w-full rounded"
                    />
                    <div
                      className="absolute bottom-1 z-50 flex w-full px-3 py-0 font-medium text-white sm:hidden "
                      style={{ WebkitTextStroke: "0.2px black" }}
                    >
                      <img
                        src="/img/lang/JP.svg"
                        width={20}
                        height={20}
                        alt=""
                      />
                      <div>{manga?.name}</div>
                    </div>
                  </Link>
                ),
            )}
      </div>
    </div>
  );
};
