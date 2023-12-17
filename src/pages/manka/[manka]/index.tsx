import {
  AnimeDto,
  animeControllerGetAllAnime,
  animeControllerGetAnimeByName,
  animeControllerGetUserFavorite,
  userControllerAddFavorite,
} from "@/shared/Api/generated";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import React from "react";
import s from "./manga-page.module.scss";
import clsx from "clsx";
import { Badge, Button } from "@radix-ui/themes";
import Link from "next/link";
import Recomend from "@/components/Recomend/aside";
import { signIn, useSession } from "next-auth/react";
import { useMutation, useQuery } from "@tanstack/react-query";

type MangaProps = {
  data: AnimeDto;
};
export const getStaticPaths = async () => {
  const data = await animeControllerGetAllAnime();
  const paths = await data.map((manga) => ({ params: { manka: manga.name } }));
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = await animeControllerGetAnimeByName({
    name: params?.manka as string,
  });
  return { props: { data }, revalidate: 10 };
};

const Manga = ({ data: manga }: MangaProps) => {
  const { data: session } = useSession();
  const router = useRouter();

  const { data: favorite, refetch: refetchFavorite } = useQuery({
    queryKey: ["isFavorite"],
    queryFn: () =>
      animeControllerGetUserFavorite({
        email: session?.user?.email as string,
        name: manga.name,
      }),
    enabled: !!session,
    staleTime: 0,
  });

  const { mutate } = useMutation({
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
      signIn();
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
          <div className={s.manga_info_2}>
            <h1>{manga.name}</h1>
            <div className={s.statistic}>Another iconst icon icon</div>
          </div>
          <div className={s.badges}>
            <Button onClick={addFavorite} color={favorite ? "orange" : "teal"}>
              {favorite ? "Favorite" : "Add To Favorite"}
            </Button>
            {manga.genres.map((genres, i) => (
              <Badge key={i} className='badge_manga' color='iris'>
                {genres}
              </Badge>
            ))}
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
              {manga.chapters?.toReversed().map((chap) => (
                <Link
                  key={chap.name}
                  href={`/manka/${manga.name}/${chap.chapter}`}
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
