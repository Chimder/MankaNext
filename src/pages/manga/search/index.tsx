import React from "react";
import s from "./mangaSearch.module.scss";
import { Badge, Button, Theme } from "@radix-ui/themes";
import { DropMenu } from "@/shared/ui/dropDownMenu";
import TextFieldd from "@/shared/ui/textField";
import { Cross1Icon } from "@radix-ui/react-icons";
import { useAppDispatch, useAppSelector } from "@/shared/Store/store";
import {
  setGenresTag,
  setLangTag,
  setSort,
  setStatus,
} from "@/shared/Store/Slices/tagSlice";

function mangaSearch() {
  const { genresTag, langTag, statusTag, sortTag } = useAppSelector(
    (store) => store.tagSlice
  );
  const dispatch = useAppDispatch();

  const on = (e: React.MouseEvent<HTMLButtonElement>, category: string) => {
    const button = e.target as HTMLButtonElement;
    if (category === "genres") {
      dispatch(setGenresTag(button.innerText));
    } else if (category === "lang") {
      dispatch(setLangTag(button.innerText));
    } else if (category === "status") {
      dispatch(setStatus(button.innerText));
    } else if (category === "sort") {
      dispatch(setSort(button.innerText));
    }
  };

  return (
    <Theme appearance='dark'>
      <main className={s.container}>
        <section className={s.filter}>
          <h1>Advaced Manga Search</h1>

          <div className={s.first_filter}>
            <div className={s.search_field}>
              <TextFieldd></TextFieldd>
            </div>

            <DropMenu
              text='Genres'
              click={on}
              ctgr='genres'
              clsn='drop_genres'
            ></DropMenu>
            <DropMenu
              text='Status'
              click={on}
              ctgr='status'
              clsn='drop_status'
            ></DropMenu>
            <DropMenu
              text='Lang'
              click={on}
              ctgr='lang'
              clsn='drop_lang'
            ></DropMenu>
            <DropMenu
              text='Sort By'
              click={on}
              ctgr='sort'
              clsn='drop_sort'
            ></DropMenu>
          </div>

          <div className={s.tags}>
            {genresTag?.map((tag) => (
              <Badge key={tag} className='badge' color='orange'>
                {tag}
                <Cross1Icon />
              </Badge>
            ))}
            {langTag?.map((tag) => (
              <Badge onClick={() = on(tag, "lang")} key={tag} className='badge' color='orange'>
                {tag}
                <Cross1Icon />
              </Badge>
            ))}
            {statusTag?.map((tag) => (
              <Badge key={tag} className='badge' color='orange'>
                {tag}
                <Cross1Icon />
              </Badge>
            ))}
            {sortTag?.map((tag) => (
              <Badge key={tag} className='badge' color='orange'>
                {tag}
                <Cross1Icon />
              </Badge>
            ))}
          </div>

          <div className={s.buttons}>
            <Button className='btn_reset' variant='soft' color='red'>
              Reset
            </Button>
            <Button className='btn_search' variant='classic' color='orange'>
              Search
            </Button>
          </div>
        </section>

        <section className={s.manga_list}>
          <div className={s.variant_view}></div>
          <ul className={s.main_list}></ul>
        </section>
      </main>
    </Theme>
  );
}

export default mangaSearch;
