import React from "react";
import { DotFilledIcon } from "@radix-ui/react-icons";
import { AnimeDto } from "@/shared/Api/generated";
import { cn } from "@/shared/lib/utils";
import { Badge } from "./ui/badge";

type Props = {};

const DotPublication = ({ ...manga }: AnimeDto) => {
  return (
    <div className="relative flex items-center justify-center">
      <DotFilledIcon
        className={`ml-3, h-6 w-6 fill-current ${
          manga.status === "Ongoing"
            ? "text-green-600"
            : manga.status === "Finished"
              ? "text-red-600"
              : "text-purple-600"
        }`}
      />
      <span className="text-[12px]">PUBLICATION: {manga.published}</span>
      <Badge
        className={`fill-curent ml-3 text-white ${
          manga.status === "Ongoing"
            ? "bg-green-600 hover:bg-green-800"
            : manga.status === "Finished"
              ? "bg-red-600 hover:bg-red-800"
              : "bg-purple-600 hover:bg-purple-800"
        }`}
      >
        {manga.status}
      </Badge>
    </div>
  );
};

export default DotPublication;
