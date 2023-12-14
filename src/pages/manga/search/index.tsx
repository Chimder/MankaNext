import React, { useState } from "react";
import s from "./mangaSearch.module.scss";
import { Button, Separator, Theme } from "@radix-ui/themes";
import TextFieldd from "@/shared/ui/textField";
import { useAppDispatch, useAppSelector } from "@/shared/Store/store";
import {
  resetTag,
  setGenresTag,
  setInputValue,
  setLangTag,
  setSort,
  setStatus,
} from "@/shared/Store/Slices/tagSlice";
import { DropDownMenu } from "@/components/DropMenu";
import { TagsMenu } from "@/components/Tags";
import { MangaList } from "@/components/MangaList/MangaList";
import clsx from "clsx";

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

  return (
    <Theme appearance='dark'>
      <main className={clsx("container")}>
        <section className={s.filter}>
          <h1>Advaced Manga Search</h1>

          <div className={s.first_filter}>
            <div className={s.search_field}>
              <TextFieldd
                value={inputValue}
                change={(e) => dispatch(setInputValue(e.target.value))}
              ></TextFieldd>
            </div>

            <DropDownMenu on={on} />
          </div>

          <div className={s.tags}>
            <div className={s.tag}>
              <TagsMenu handleTag={handleTag} />
            </div>
            <div className={s.reset}>
              <Button
                onClick={() => reset()}
                className='btn_reset'
                variant='soft'
                color='red'
              >
                Reset
              </Button>
            </div>
          </div>
        </section>

        <section className={s.manga_list_container}>
          <MangaList />
        </section>
      </main>
    </Theme>
  );
}

export default mangaSearch;
