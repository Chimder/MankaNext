import Link from "next/link";
import React from "react";
import s from "./asidebar.module.scss";
import clsx from "clsx";
import { DropMenu } from "@/shared/ui/dropDownMenu";
import { useParams } from "next/navigation";
import {
  AnimeDto,
} from "@/shared/Api/generated";
import { useRouter } from "next/router";

interface AsideBarChapterProps {
  data?: AnimeDto;
  isSuccess?: boolean;
}

function AsideBarChapter({ data: manga, isSuccess }: AsideBarChapterProps) {
  const param = useParams();
  const router = useRouter();

  const params = Number(router?.query?.chapter);
  const prew = params - 1;
  const next = params + 1;
  return (
    <div className={s.NavBar_container}>
      <div className={s.NavBar}>
        <div className={s.Noise}></div>
        <Link className={s.Logo} href='/'>
          ❄️
        </Link>
        <Link
          href={`/manka/${router?.query?.manka}`}
          className={clsx(s.Word_container)}
        >
          Manga
        </Link>

        {isSuccess && (
          <div>
            <DropMenu
              text={router?.query?.chapter!}
              // click={}
              ctgr='chapter'
              clsn='drop_chapter'
              data={manga}
            ></DropMenu>
          </div>
        )}

        <Link
          href={`/manka/${router?.query?.manka}/${prew}`}
          className={clsx(s.Word_container, params === 1 && s.disabledLink)}
        >
          - Prew
        </Link>
        <Link
          href={`/manka/${router?.query?.manka}/${next}`}
          className={clsx(
            s.Word_container,
            params === manga?.chapters?.length && s.disabledLink
          )}
        >
          Next -
        </Link>
      </div>
    </div>
  );
}

export default AsideBarChapter;
