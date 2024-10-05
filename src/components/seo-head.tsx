import Head from "next/head";
import React from "react";
import { HandlerMangaSwag } from "@/shared/Api/generatedv2";
import { ChapterDto } from "@/pages/manka/[manka]/[chapter]";

type MankaHead = { data: HandlerMangaSwag };
type ChapterHead = {
  data: ChapterDto;
};

export function MankaHead({ data }: MankaHead) {
  return (
    <Head>
      <title>{data?.name}</title>
      <meta
        name="description"
        content={data?.describe || "Manga description"}
      />
      <meta property="og:title" content={data?.name || "Manga Title"} />
      <meta
        property="og:description"
        content={data?.describe || "Description of the manga"}
      />
      <meta property="og:type" content="article" />
      <meta property="og:image" content={data?.img} />
    </Head>
  );
}

export function ChapterHead({ data }: ChapterHead) {
  return (
    <Head>
      <title>{data?.name || "Manga Title"}</title>
      <meta
        name="description"
        content={`Chapter ${data?.chapter} of ${data?.animeName}`}
      />
      <meta property="og:title" content={data?.name || "Manga Title"} />
      <meta
        property="og:description"
        content={`Read Chapter ${data?.chapter} of ${data?.animeName}. Released on ${new Date(data?.createdAt).toLocaleDateString()}.`}
      />
      <meta property="og:type" content="article" />
      <meta property="og:image" content={data?.img[0]} />
      <meta
        property="og:image:alt"
        content={`Image from chapter ${data?.chapter}`}
      />
      <meta
        property="og:url"
        content={typeof window !== "undefined" ? window.location.href : ""}
      />
      <meta property="og:updated_time" content={data?.createdAt} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={data?.name} />
      <meta
        name="twitter:description"
        content={`Read Chapter ${data?.chapter} of ${data?.animeName}`}
      />
      <meta name="twitter:image" content={data?.img[0]} />
    </Head>
  );
}
