import Link from "next/link";
import React from "react";
import { MangaDto } from "../shared/Api/generated";

interface SelectDropBtnProps {
  type?: string;
  // data?: string[];
  click?: (e: React.MouseEvent<HTMLButtonElement>, category: string) => void;
  data?: MangaDto;
  setIsMenuOpen?: any;
}
function SelectDropChapter({
  type,
  click,
  data,
  setIsMenuOpen,
}: SelectDropBtnProps) {
  return (
    <div className="flex w-full flex-col">
      {data?.chapters?.map((chap) => (
        <Link
          className="flex items-center justify-center rounded-sm p-1 hover:bg-black/20"
          scroll={true}
          key={chap.name}
          href={`/manka/${chap.animeName}/${chap.chapter}`}
          onClick={() => setIsMenuOpen(false)}
        >
          {` Chapter ${chap.chapter}`}
        </Link>
      ))}
    </div>
  );
}
export default SelectDropChapter;
