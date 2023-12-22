import FavoriteList from "@/components/manga-favorite-list";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";

type Props = {};

const Favorite = () => {
  const path = useRouter();
  const { data: session } = useSession();

  return (
    <section className="">
      <FavoriteList></FavoriteList>
    </section>
  );
};

export default Favorite;
