import Link from "next/link";
import React from "react";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

function AsideBar() {
  const { data: session } = useSession();

  const pathname = usePathname();

  const isManga = pathname?.includes("manka") ? "manka" : undefined;

  return (
    <div className="nav_bar_container">
      <nav className="z-100 flex w-full justify-evenly">
        {/* <div className={s.Noise}></div> */}
        <Link className="nav_icon" href="/">
          ❄️
        </Link>

        <div className="flex justify-between rounded-xl bg-black/10 py-1 pl-0 pr-3 backdrop-blur-sm  ">
          <Link className="nav_btn" href={isManga ? "/manka/" : "/anime/"}>
            {isManga ? "Manga" : "Anime"}
          </Link>
          <Link
            className="flex  items-center justify-end rounded-xl bg-black/20 px-3.5 py-1"
            href={isManga ? "/manka/search" : "/anime/search"}
          >
            <MagnifyingGlassIcon className="h-6 w-6 fill-white" />
          </Link>
        </div>

        <Link className="nav_btn" href={isManga ? "/anime/" : "/manka/"}>
          {isManga ? "Anime" : "Manga"}
        </Link>

        <Link className="nav_icon" href="">
          {session?.user ? (
            <img src={session?.user?.image!} width={24} />
          ) : (
            <div>user</div>
          )}
        </Link>
      </nav>
    </div>
  );
}

export default AsideBar;
