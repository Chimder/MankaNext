import React from "react";
import s from "./mangaList.module.scss";
import Link from "next/link";
import { AnimeDto } from "@/shared/Api/generated";

export const MangaCard = ({ ...manga }: AnimeDto) => {
  return (
    <>
      <Link className={s.card} key={manga.name} href={`/manga/${manga.name}`}>
        <img src={manga.img} alt='' />
        <div className={s.card_info}>
          <img src='/img/lang/JP.svg ' width={20} height={20} alt='' />
          <div>{manga.name}</div>
        </div>
      </Link>
    </>
  );
};
