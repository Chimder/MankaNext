import { useAppSelector } from "@/shared/Store/store";
import { Cross1Icon } from "@radix-ui/react-icons";
import { Badge, Separator } from "@radix-ui/themes";
import React from "react";

interface TagsMenuProps {
  handleTag: (tag: string, category: string) => void;
}

export const TagsMenu = ({ handleTag }: TagsMenuProps) => {
  const { genresTag, langTag, statusTag, sortTag } = useAppSelector(
    (store) => store.tagSlice
  );
  return (
    <>
      {genresTag?.map((tag) => (
        <Badge
          onClick={() => handleTag(tag, "genres")}
          key={tag}
          className='badge'
          color='purple'
        >
          {tag}
          <Cross1Icon />
        </Badge>
      ))}
      {langTag?.map((tag) => (
        <Badge
          onClick={() => handleTag(tag, "lang")}
          key={tag}
          className='badge'
          color='blue'
        >
          {tag}
          <Cross1Icon />
        </Badge>
      ))}
      {statusTag && (
        <Badge
          onClick={() => handleTag(statusTag, "status")}
          key={statusTag}
          className='badge'
          color='pink'
        >
          {statusTag}
          <Cross1Icon />
        </Badge>
      )}
      {sortTag && (
        <Badge
          onClick={() => handleTag(sortTag, "sort")}
          key={sortTag}
          className='badge'
          color='mint'
        >
          {sortTag}
          <Cross1Icon />
        </Badge>
      )}
    </>
  );
};
