import React from "react";
import Link from "next/link";
import { RecomendAnim } from "@/shared/data/PopRecod";

const Recomend = () => {
  return (
    <div className="-ml-2 -mr-2 mt-0.5">
      {RecomendAnim.map((manga) => (
        <Link
          key={manga.name}
          href={`/manka/${manga.name}`}
          className="float-left ml-[0.5px] mt-2 flex w-full flex-col rounded-2xl bg-transparent no-underline "
        >
          <div className="relative mx-2 flex">
            <div className="z-0 m-0 w-16 shrink-0 overflow-hidden rounded-sm">
              <div className="relative box-border">
                <img
                  className="left-0 top-0 h-full w-full"
                  src={manga.img}
                  alt={manga.name}
                />
              </div>
            </div>
            <div className="flex items-center overflow-auto px-3 text-sm">
              <span>{manga.name}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Recomend;