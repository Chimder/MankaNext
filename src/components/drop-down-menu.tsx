import React from "react";
import DropDownN from "./drop-down";

interface DropMenuProps {
  on: (e: React.MouseEvent<HTMLButtonElement>, category: string) => void;
}
export const DropDownMenuN = ({ on }: DropMenuProps) => {
  return (
    <>
      <DropDownN
        text="Genres"
        click={on}
        ctgr="genres"
        clsn="min-w-[40vw] w-[480px] "
      ></DropDownN>
      <DropDownN
        text="Status"
        click={on}
        ctgr="status"
        clsn="drop_status"
      ></DropDownN>
      <DropDownN
        text="Lang"
        click={on}
        ctgr="lang"
        clsn="drop_lang"
      ></DropDownN>
      <DropDownN
        text="Sort By"
        click={on}
        ctgr="sort"
        clsn="drop_sort"
      ></DropDownN>
    </>
  );
};
