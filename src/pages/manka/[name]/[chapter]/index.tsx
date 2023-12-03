import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import React from "react";

function AnimeChapter() {
  const path = useRouter();

  return <div>Chapter {path.query.chapter}</div>;
}

export default AnimeChapter;
