import { useAppSelector } from "@/shared/Store/store";
import { Cross1Icon } from "@radix-ui/react-icons";
import React from "react";
import { Badge } from "./ui/badge";

interface Props {
  handleTag: (tag: string, category: string) => void;
}

export const BadgeList = ({ handleTag }: Props) => {
  const { genresTag, langTag, statusTag, sortTag } = useAppSelector(
    (store) => store.tagSlice,
  );
  return (
    <>
      {genresTag?.map((tag) => (
        <Badge
          onClick={() => handleTag(tag, "genres")}
          key={tag}
          className="relative ml-3 cursor-pointer text-emerald-500  hover:opacity-60"
        >
          {tag}
          <Cross1Icon className="ml-1 h-3 w-3 overflow-visible text-base hover:block" />
        </Badge>
      ))}
      {langTag?.map((tag) => (
        <Badge
          onClick={() => handleTag(tag, "lang")}
          key={tag}
          className="relative ml-3  cursor-pointer text-pink-600  hover:opacity-60"
        >
          {tag}
          <Cross1Icon className="ml-1 h-3 w-3 overflow-visible text-base hover:block" />
        </Badge>
      ))}
      {statusTag && (
        <Badge
          onClick={() => handleTag(statusTag, "status")}
          key={statusTag}
          className="relative ml-3 cursor-pointer text-blue-600  hover:opacity-60"
        >
          {statusTag}
          <Cross1Icon className="ml-1 h-3 w-3 overflow-visible text-base hover:block" />
        </Badge>
      )}
      {sortTag && (
        <Badge
          onClick={() => handleTag(sortTag, "sort")}
          key={sortTag}
          className="relative ml-3 cursor-pointer text-fuchsia-600  hover:opacity-60"
        >
          {sortTag}
          <Cross1Icon className="ml-1 h-3 w-3 overflow-visible text-base hover:block" />
        </Badge>
      )}
    </>
  );
};
