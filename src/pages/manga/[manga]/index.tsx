import {
  AnimeDto,
  animeControllerGetAllAnime,
  animeControllerGetAnimeByName,
  animeControllerGetUserFavorite,
  userControllerAddFavorite,
} from "@/shared/Api/generated";
import { GetStaticProps } from "next";
import { redirect, useParams, usePathname } from "next/navigation";
import { useRouter } from "next/router";
import React, { useState } from "react";
import s from "./manga-page.module.scss";
import clsx from "clsx";
import { Badge, Button } from "@radix-ui/themes";
import Link from "next/link";
import Recomend from "@/components/Recomend/aside";
import { useSession } from "next-auth/react";
import { useMutation, useQuery } from "@tanstack/react-query";

type MangaProps = {
  data: AnimeDto;
};

export const getStaticPaths = async () => {
  const data = await animeControllerGetAllAnime();
  const paths = await data.map((manga) => ({ params: { manga: manga.name } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = await animeControllerGetAnimeByName({
    name: params?.manga as string,
  });
  return { props: { data }, revalidate: 10 };
};

const Manga = ({ data: manga }: MangaProps) => {
  const { data: session } = useSession();
  console.log(session);
  const path = useRouter();
  const mangaParam = path?.query?.manga! as string;
  const pat = usePathname();
  const pat2 = useParams();

  const {
    data: favorite,
    refetch: refetchFavorite,
    isPending: isFavoritePending,
  } = useQuery({
    queryKey: ["isFavorite"],
    queryFn: () =>
      animeControllerGetUserFavorite({
        email: session?.user?.email!,
        name: manga.name,
      }),
    enabled: !!session,
    staleTime: 0,
  });
  console.log("FAVORITEUSER", favorite);
  // const [isFavor, setIsFav] = useState(favorite);

  const { mutate, isPending, isSuccess } = useMutation({
    mutationKey: ["addFavorite"],
    mutationFn: () =>
      userControllerAddFavorite({
        name: manga.name,
        email: session?.user?.email!,
      }),
    onSuccess: () => {
      refetchFavorite();
    },
  });

  const addFavorite = () => {
    if (!session) {
      redirect("/api/auth/signIn");
    } else {
      mutate();
    }
  };

  return (
    <main>
      <section className={clsx(s.manga_header)}>
        <div className={s.header_img}>
          <img src={manga.imgHeader} alt='' />
        </div>
      </section>
      <section className={clsx("container", s.manga_page)}>
        <div className={s.manga_logo}>
          <img src={manga.img} alt='' />
        </div>
        <div className={s.manga_info}>
          <h1>{manga.name}</h1>
          <div className={s.badges}>
            <Button onClick={addFavorite} color={favorite ? "orange" : "teal"}>
              {isFavoritePending
                ? "Loading...."
                : favorite
                ? "Favorite"
                : " Add To Favorite"}
            </Button>
            {manga.genres.map((genres, i) => (
              <Badge key={i} className='badge' color='iris'>
                {genres}
              </Badge>
            ))}
            <div className={s.statistic}>Another iconst icon icon</div>B
          </div>
          <div className={s.description}>{manga.describe}</div>
        </div>
      </section>
      <section className={clsx("container", s.chapters)}>
        <div className={s.chapters_inner}>
          <aside className={s.aside}>
            <span>This manga has Anime</span>
            <Recomend />
          </aside>
          <div className={s.list}>
            <span className={s.chapters_span}>Chapters</span>
            <div className={s.chapters_list}>
              {manga.chapters?.map((chap) => (
                <Link
                  key={chap.name}
                  href={`/manga/${manga.name}/${chap.chapter}`}
                >
                  <div className={s.chapter}>
                    Ch. {chap.chapter} - {chap.name}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Manga;
