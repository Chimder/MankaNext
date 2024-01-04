import React from "react";

type Props = {};

const AnimeRating = ({ anime }: any) => {
  // console.log("RATIng", anime);
  return (
    <div className="flex justify-center items-center">
      <div className="pr-4">Imdb: {anime.imdb_rating}</div>
      <div>shikimori: {anime.shikimori_rating}</div>
    </div>
  );
};

export default AnimeRating;
