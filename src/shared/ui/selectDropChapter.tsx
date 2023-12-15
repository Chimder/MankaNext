import Link from "next/link";
import React from "react";
import { AnimeDto } from "../Api/generated";

interface SelectDropBtnProps {
  type?: string;
  // data?: string[];
  click?: (e: React.MouseEvent<HTMLButtonElement>, category: string) => void;
  data?: AnimeDto;
  setIsMenuOpen: any;
}
function SelectDropChapter({
  type,
  click,
  data,
  setIsMenuOpen,
}: SelectDropBtnProps) {
  return (
    <div className='Chapters_List'>
      {data?.chapters?.map((chap) => (
        <Link
          key={chap.name}
          href={`/manka/${chap.animeName}/${chap.chapter}`}
          onClick={() => setIsMenuOpen(false)}
        >
          {` Ch. ${chap.chapter} ${chap.name} `}
        </Link>
      ))}
    </div>
  );
}
export default SelectDropChapter;
