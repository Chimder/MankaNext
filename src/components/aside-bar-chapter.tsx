import Link from "next/link";
import { useParams } from "next/navigation";
import { AnimeDto } from "@/shared/Api/generated";
import { useRouter } from "next/router";
import DropDownN from "./drop-down";
import { Progress } from "./ui/progress";

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
            <DropDownN
              text={router?.query?.chapter!}
              // click={}
              ctgr="chapter"
              clsn="max-w-[30vw] min-w-[20vw] h-full flex rounded-md bg-black/60  backdrop-blur-md z-999 p-4 text-lg overflow-y-auto "
              data={manga}
            ></DropDownN>
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
      <Progress className="fixed transform  rounded-2xl -bottom-5 left-1/2 z-50 flex h-[40px] w-full max-w-[438px] -translate-x-1/2 -translate-y-1/2"  />
    </div>
  );
}

export default AsideBarChapter;
