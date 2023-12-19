import Link from "next/link";
import React from "react";
import { AnimeDto } from "../shared/Api/generated";

interface SelectDropBtnProps {
  type?: string;
  // data?: string[];
  click?: (e: React.MouseEvent<HTMLButtonElement>, category: string) => void;
  data?: AnimeDto;
  setIsMenuOpen?: any;
}
function SelectDropChapter({
  type,
  click,
  data,
  setIsMenuOpen,
}: SelectDropBtnProps) {
  return (
    <div className="flex flex-col w-full">
      {data?.chapters?.map((chap) => (
        <Link
        className="hover:bg-black/20 rounded-sm p-1"
          scroll={true}
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
