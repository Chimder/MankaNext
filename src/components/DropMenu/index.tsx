import { DropMenu } from "@/shared/ui/dropDownMenu";
import React from "react";

interface DropMenuProps {
  on: (e: React.MouseEvent<HTMLButtonElement>, category: string) => void;
}
export const DropDownMenu = ({ on }: DropMenuProps) => {
  return (
    <>
      <DropMenu
        text='Genres'
        click={on}
        ctgr='genres'
        clsn='drop_genres'
      ></DropMenu>
      <DropMenu
        text='Status'
        click={on}
        ctgr='status'
        clsn='drop_status'
      ></DropMenu>
      <DropMenu text='Lang' click={on} ctgr='lang' clsn='drop_lang'></DropMenu>
      <DropMenu
        text='Sort By'
        click={on}
        ctgr='sort'
        clsn='drop_sort'
      ></DropMenu>
    </>
  );
};
