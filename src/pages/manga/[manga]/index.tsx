import {
  AnimeDto,
  animeControllerGetAllAnime,
  animeControllerGetAnimeByName,
} from "@/shared/Api/generated";
import { GetStaticProps } from "next";
import { useParams, usePathname } from "next/navigation";
import { useRouter } from "next/router";
import React from "react";
import s from "./manga-page.module.scss";
import clsx from "clsx";
import { Badge, Button } from "@radix-ui/themes";
import Link from "next/link";
import Recomend from "@/components/Recomend/aside";

type MangaProps = {
  data: AnimeDto;
};

// export const getStaticPaths = async () => {
//   const data = await animeControllerGetAllAnime();
//   const paths = await data.map((manga) => ({ params: { manga: manga.name } }));
//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const data = await animeControllerGetAnimeByName({
//     name: params?.manga as string,
//   });
//   return { props: { data } };
// };

const Manga = ({ data: manga }: MangaProps) => {
  const path = useRouter();
  const mangaParam = path?.query?.manga! as string;
  const pat = usePathname();
  const pat2 = useParams();

  console.log(manga);
  return (
    <main>
      <section className={clsx(s.manga_header)}>
        <div className={s.header_img}>
          {/* <img src='/img/HeaderImg/jujutsu-Kaisen.webp' alt='' /> */}
          <img src='/img/HeaderImg/MURCIÉLAGO.webp' alt='' />

          {/* <img src='/img/HeaderImg/IsItWrong.webp' alt='' /> */}
        </div>
      </section>
      <section className={clsx("container", s.manga_page)}>
        <div className={s.manga_logo}>
          <img src='/img/Logo/MURCIÉLAGO.webp' alt='' />
        </div>
        <div className={s.manga_info}>
          <h1>Houseki-no-Kuni</h1>
          <div className={s.badges}>
            <Button color='teal'>Add to favorite</Button>
            <Badge className='badge' color='iris'>
              Action
            </Badge>
            <Badge className='badge' color='iris'>
              Action
            </Badge>
            <Badge className='badge' color='iris'>
              Action
            </Badge>
            <Badge className='badge' color='iris'>
              Action
            </Badge>
            <div className={s.statistic}>Another iconst icon icon</div>B
          </div>
          <div className={s.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa fugit
            reprehenderit, quasi sequi ipsum nostrum perspiciatis blanditiis
            voluptatem nesciunt asperiores iusto veritatis reiciendis recusandae
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
            officiis dicta, non reprehenderit, totam corporis in voluptas velit
            numquam labore provident dolore quidem eaque nisi? Odit nesciunt lor
          </div>
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
              <Link href='/manga/one/10'>
                <div className={s.chapter}>Chapter : 10 claymoreKL</div>
              </Link>
              <div className={s.chapter}>Chapter : 9 claymore</div>
              <div className={s.chapter}>Chapter : 8 claymore</div>
              <div className={s.chapter}>Chapter : 7 claymore</div>
              <div className={s.chapter}>Chapter : 6 claymore</div>
              <div className={s.chapter}>Chapter : 5 claymore</div>
              <div className={s.chapter}>Chapter : 4 claymore</div>
              <div className={s.chapter}>Chapter : 3 claymore</div>
              <div className={s.chapter}>Chapter : 2 claymore</div>
              <div className={s.chapter}>Chapter : 1 claymore</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Manga;
