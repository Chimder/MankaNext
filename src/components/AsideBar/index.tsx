import Link from "next/link";
import React from "react";
import { CiSearch } from "react-icons/ci";
import s from "./asidebar.module.scss";
import clsx from "clsx";
import { useSession } from "next-auth/react";

function AsideBar() {
  const { data: session } = useSession();
  return (
    <div className={s.NavBar_container}>
      <nav className={s.NavBar}>
        <div className={s.Noise}></div>
        <Link className={s.Logo} href='/'>
          ❄️
        </Link>
        <Link className={clsx(s.Word_container)} href='/manka'>
          Manga
        </Link>
        <Link className={s.Search} href='/'>
          <CiSearch />
        </Link>
        <Link className={s.Word_container} href='/ani'>
          Anime
        </Link>
        <Link className={s.UserLogo} href=''>
          {session?.user ? <img src={session?.user?.image} width={24}/> : <div>user</div>}
        </Link>
      </nav>
    </div>
  );
}

export default AsideBar;
