import Link from "next/link";
import React from "react";
import { DropMenu } from "@/shared/ui/dropDownMenu";
import { useParams } from "next/navigation";
import { AnimeDto } from "@/shared/Api/generated";
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
    <div className="nav_bar_container ">
      <div className="z-100 flex w-full justify-evenly">
        <div
          className="noisee"
          style={{ backgroundImage: "url(/noise.webp)" }}
        ></div>
        <Link className="nav_icon" href="/">
          ❄️
        </Link>
        <Link href={`/manka/${router?.query?.manka}`} className="nav_btn">
          Manga
        </Link>

        {isSuccess && (
          <div>
            <DropMenu
              text={router?.query?.chapter!}
              // click={}
              ctgr="chapter"
              clsn="drop_chapter"
              data={manga}
            ></DropMenu>
          </div>
        )}

        {/* <Link
          href={`/manka/${router?.query?.manka}/${prew}`}
          className={clsx(s.Word_container, params === 1 && s.disabledLink)}
        >
          - Prew
        </Link> */}
        <Link
          href={`/manka/${router?.query?.manka}/${prew}`}
          className="nav_btn"
        >
          - Prew
        </Link>
        <Link
          href={`/manka/${router?.query?.manka}/${next}`}
          className="nav_btn"
        >
          Next -
        </Link>
      </div>
    </div>
  );
}

export default AsideBarChapter;
