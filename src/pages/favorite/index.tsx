import FavoriteList from "@/components/manga-favorite-list";
import React from "react";

type Props = {};

const Favorite = () => {
  return (
    <section className="containerM overflow-x-hidden">
      <h1 className="py-4 text-3xl">Favorite Manga</h1>
      <FavoriteList></FavoriteList>
    </section>
  );
};

export default Favorite;
