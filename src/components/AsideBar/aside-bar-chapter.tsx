import Link from "next/link";
import React from "react";
import s from "./asidebar.module.scss";
import clsx from "clsx";

import { DropMenu } from "@/shared/ui/dropDownMenu";
import { Theme } from "@radix-ui/themes";

function AsideBarChapter() {
  return (
    <Theme appearance='dark'>
      <div className={s.NavBar_container}>
        <nav className={s.NavBar}>
          <div className={s.Noise}></div>
          <Link className={s.Logo} href='/'>
            ❄️
          </Link>
          <Link href={"#"} className={clsx(s.Word_container)}>
            {" "}
            Manga
          </Link>

          <DropMenu
            text='1'
            // click={}
            ctgr='chapter'
            clsn='drop_chapter'
          ></DropMenu>

          <Link href={"#"} className={clsx(s.Word_container)}>
            {" "}
            - Prew
          </Link>
          <Link href={"#"} className={clsx(s.Word_container)}>
            {" "}
            Next -
          </Link>
        </nav>
      </div>
    </Theme>
  );
}

export default AsideBarChapter;
