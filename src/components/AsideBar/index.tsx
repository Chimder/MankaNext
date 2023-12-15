import Link from "next/link";
import React from "react";
import { CiSearch } from "react-icons/ci";
import s from "./asidebar.module.scss";
import clsx from "clsx";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

function AsideBar() {
  const { data: session } = useSession();

  const pathname = usePathname();

  const isManga = pathname?.includes("manka") ? "manka" : undefined;

  return (
    <div className={s.NavBar_container}>
      <nav className={s.NavBar}>
        <div className={s.Noise}></div>
        <Link className={s.Logo} href='/'>
          ❄️
        </Link>

        <div className={s.activeLink}>
          <Link
            className={clsx(s.Word_containerActive)}
            href={isManga ? "/manka/" : "/anime/"}
          >
            {isManga ? "Manga" : "Anime"}
          </Link>
          <Link
            className={s.Search}
            href={isManga ? "/manka/search" : "/anime/search"}
          >
            <CiSearch />
          </Link>
        </div>

        <Link
          className={s.Word_container}
          href={isManga ? "/anime/" : "/manka/"}
        >
          {isManga ? "Anime" : "Manga"}
        </Link>

        <Link className={s.UserLogo} href=''>
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
