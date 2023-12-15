import Link from "next/link";
import React from "react";
import s from "./asidebar.module.scss";
import clsx from "clsx";

import { DropMenu } from "@/shared/ui/dropDownMenu";
import { Theme } from "@radix-ui/themes";
import { useParams, usePathname } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { animeControllerGetAnimeByName } from "@/shared/Api/generated";

function AsideBarChapter() {
  const param = useParams();
  console.log(param, "Params");

  const { data: manga } = useQuery({
    queryKey: ["manga"],
    queryFn: () =>
      animeControllerGetAnimeByName({ name: param?.manga as string }),
    staleTime: 0,
  });

  console.log(manga?.chapters.length);

  const params = Number(param?.chapter);
  const prew = params - 1;
  const next = params + 1;
  return (
    <Theme appearance='dark'>
      <div className={s.NavBar_container}>
        <nav className={s.NavBar}>
          <div className={s.Noise}></div>
          <Link className={s.Logo} href='/'>
            ❄️
          </Link>
          <Link
            href={`/manga/${param?.manga}`}
            className={clsx(s.Word_container)}
          >
            {" "}
            Manga
          </Link>

          <DropMenu
            text={param?.chapter!}
            // click={}
            ctgr='chapter'
            clsn='drop_chapter'
            data={manga}
          ></DropMenu>

          <Link
            href={`/manga/${param?.manga}/${prew}`}
            className={clsx(s.Word_container, params === 1 && s.disabledLink)}
          >
            {" "}
            - Prew
          </Link>
          <Link
            href={`/manga/${param?.manga}/${next}`}
            className={clsx(
              s.Word_container,
              params === manga?.chapters.length && s.disabledLink
            )}
          >
            {" "}
            Next -
          </Link>
        </nav>
      </div>
    </Theme>
  );
}

export default AsideBarChapter;
