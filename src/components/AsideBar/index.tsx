import Link from "next/link";
import React from "react";
import { CiSearch } from "react-icons/ci";
import s from "./asidebar.module.scss";
import clsx from "clsx";

function AsideBar() {
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
          👩🏼‍💻
        </Link>
      </nav>
    </div>
  );
}

export default AsideBar;
