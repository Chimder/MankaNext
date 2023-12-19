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
        clsn="min-w-[18vw] w-36 "
      ></DropDownN>
      <DropDownN
        text="Status"
        click={on}
        ctgr="status"
        clsn="min-w-[20vh] w-36"
      ></DropDownN>
      <DropDownN
        text="Lang"
        click={on}
        ctgr="lang"
        clsn="min-w-[20vh] w-36 "
      ></DropDownN>
      <DropDownN
        text="Sort By"
        click={on}
        ctgr="sort"
        clsn="min-w-[20vh] w-36"
      ></DropDownN>
    </>
  );
};
