import { Button, DropdownMenu } from "@radix-ui/themes";
import React from "react";
import { genres, status, lang, sort, Lang } from "../anotherdata";
import { useAppSelector } from "../Store/store";

type Data = {
  text: string;
  img?: string;
  gap?: string;
  value?: string;
  color?: string;
  size?: string;
};
interface SelectDropBtnProps {
  type: string;
  click: (e: React.MouseEvent<HTMLButtonElement>, category: string) => void;
}
function SelectDropBtn({ type, click }: SelectDropBtnProps) {
  const data: Data[] =
    type == "genres"
      ? genres
      : type == "status"
      ? status
      : type == "lang"
      ? lang
      : sort;

  const { genresTag, langTag, statusTag, sortTag } = useAppSelector(
    (store) => store.tagSlice
  );

  const allTags = [...genresTag, ...langTag, ...statusTag, ...sortTag];
  return (
    <div>
      {data.map((g) => (
        <Button
          key={g.text}
          onClick={(e) => click(e, type)}
          className={`btn_select_${type}`}
          color={allTags.includes(g.text) ? "green" : "orange"}
          variant='ghost'
        >
          {type == "lang" && <img src={g.img} width={22} height={22} />}
          {g.text}
        </Button>
      ))}
    </div>
  );
}
export default SelectDropBtn;
