import React from "react";
import { useAppDispatch, useAppSelector } from "@/shared/Store/store";
import {
  resetTag,
  setGenresTag,
  setInputValue,
  setLangTag,
  setSort,
  setStatus,
} from "@/shared/Store/Slices/tagSlice";
import { MangaList } from "@/components/manga-list";
import { Input } from "@/components/ui/input";
import { BadgeList } from "@/components/badge-list";
import { DropDownMenuN } from "@/components/drop-down-menu";
import { Button } from "@/components/ui/button";

function mangaSearch() {
  const { inputValue } = useAppSelector((store) => store.tagSlice);
  const dispatch = useAppDispatch();
  const handleTag = (tag: string, category: string) => {
    if (category === "genres") {
      dispatch(setGenresTag(tag));
    } else if (category === "lang") {
      dispatch(setLangTag(tag));
    } else if (category === "status") {
      dispatch(setStatus(tag));
    } else if (category === "sort") {
      dispatch(setSort(tag));
    }
  };
  const on = (e: React.MouseEvent<HTMLButtonElement>, category: string) => {
    const button = e.target as HTMLButtonElement;
    handleTag(button.innerText, category);
  };

  const reset = () => {
    dispatch(resetTag());
  };

  console.log(inputValue);

  return (
    <main className="mx-auto containerM h-full w-full border-[1px] border-white 2xl:px-44">
      {/* Constiner */}
      <section className="p-8">
      {/* Constiner */}
        <h1 className="pb-2 text-2xl">Advaced Manga Search</h1>

        <div className="flex w-full items-center justify-between pb-4">
          <Input
            className="min-w-60 focus:border-1 w-full  focus:border-orange-600 md:w-1/3 lg:w-2/3"
            value={inputValue}
            onChange={(e) => dispatch(setInputValue(e.target.value))}
          />
          <DropDownMenuN on={on} />
        </div>

        <div className="flex w-full justify-between">
          <div className="">
            <BadgeList handleTag={handleTag} />
          </div>
          <div className="">
            <Button
              onClick={() => reset()}
              className="rounded-lg bg-red-800/80 px-12 py-4 text-red-400 hover:bg-red-800/40 "
            >
              Reset
            </Button>
          </div>
        </div>
      </section>

      <MangaList />
    </main>
  );
}

export default mangaSearch;
