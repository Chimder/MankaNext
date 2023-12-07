import React from "react";
import s from "./mangaSearch.module.scss";
import { IoSearch, IoClose, IoCode } from "react-icons/io5";

function mangaSearch() {
  return (
    <main className={s.container}>
      <section className={s.filter}>
        <h1>Advaced Manga Search</h1>
        <div className={s.first_filter}>
          <div className={s.search}>
            <div className={s.input_form}>
              <input className={s.input} type='Search' />
              <div className={s.svg1}>
                <IoSearch />
              </div>
              <div className={s.svg2}>
                <IoClose />
              </div>
            </div>
          </div>

          <div className={s.select}>
            <span>Genres</span>
            <button className={s.btn_select}>
              Any
              <IoCode />
            </button>
          </div>
          <div className={s.select}>
            <span>Status</span>
            <button className={s.btn_select}>
              Any
              <IoCode />
            </button>
          </div>
          <div className={s.select}>
            <span>Type</span>
            <button className={s.btn_select}>
              Any
              <IoCode />
            </button>
          </div>
          <div className={s.select}>
            <span>Year</span>
            <button className={s.btn_select}>
              Any
              <IoCode />
            </button>
          </div>
        </div>

        <div className={s.buttons}>
          <div className={s.btn_reset}>Reset</div>
          <div className={s.btn_search}>Search</div>
        </div>
      </section>

      <section className={s.manga_list}>
        <div className={s.variant_view}></div>
        <ul className={s.main_list}></ul>
      </section>
    </main>
  );
}

export default mangaSearch;
