import Link from "next/link";
import React from "react";
import { HandlerMangaSwag } from "@/shared/Api/generatedv2";

interface SelectDropBtnProps {
  type?: string;
  // data?: string[];
  click?: (e: React.MouseEvent<HTMLButtonElement>, category: string) => void;
  data?: HandlerMangaSwag;
  closeMenu?: any;
}
function SelectDropChapter({
  type,
  click,
  data,
  closeMenu,
}: SelectDropBtnProps) {
  return (
    <div className="flex w-full flex-col">
      {data?.chapters?.map((chap) => (
        <Link
          className="flex items-center justify-center rounded-sm p-1 hover:bg-black/20"
          scroll={true}
          key={chap.name}
          href={`/manka/${chap.animeName}/${chap.chapter}`}
        >
          {` Chapter ${chap.chapter}`}
        </Link>
      ))}
    </div>
  );
}
export default SelectDropChapter;
