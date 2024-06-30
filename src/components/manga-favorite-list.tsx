import { Skeleton } from "@/components/ui/skeleton";
import { getUserListManga } from "@/shared/Api/generatedv2";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import React from "react";
import { useUserSession } from "./query";

const FavoriteList = () => {
  const { data: user } = useUserSession();

  const email = user?.email! as string;
  const { data: mangas, isFetching } = useQuery({
    queryKey: ["user-favorite"],
    queryFn: () => getUserListManga({ email: email }),
    staleTime: 0,
    refetchOnWindowFocus: false,
  });

  return (
    <div className="">
      <div className="grid w-full grid-cols-6 gap-5 xl:grid-cols-5 xl:gap-4 lg:grid-cols-4 lg:gap-3 lg:px-6 md:grid-cols-3 md:gap-4 md:px-12 sm:gap-4 sm:p-0 sm:px-4">
        {isFetching ? (
          Array.from({ length: 18 }, (_, index) => (
            <React.Fragment key={`skeleton-${index}`}>
              <div
                className="relative h-full w-full overflow-hidden rounded-sm"
                style={{ paddingBottom: "142%" }}
              >
                <div className="absolute inset-0">
                  <Skeleton className="h-full w-full" />
                </div>
              </div>
            </React.Fragment>
          ))
        ) : mangas && mangas.length > 0 ? (
          mangas.map((manga) => (
            <Link
              className="relative z-50 flex h-full w-full"
              key={manga?.name}
              href={`/manka/${manga?.name}`}
            >
              <img
                src={manga?.img}
                alt=""
                className="block h-full max-w-full rounded"
              />
              <div
                className="absolute bottom-1 z-50 flex w-full px-3 py-0 font-medium text-white sm:hidden"
                style={{ WebkitTextStroke: "0.2px black" }}
              >
                <img src="/img/lang/JP.svg" width={20} height={20} alt="" />
                <div className="">{manga?.name}</div>
              </div>
            </Link>
          ))
        ) : (
          <div>No favorite manga found</div>
        )}
      </div>
    </div>
  );
};

export default FavoriteList;
