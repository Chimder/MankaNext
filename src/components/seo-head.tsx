import Head from "next/head";
import React from "react";
import { HandlerMangaSwag } from "@/shared/Api/generatedv2";
import { ChapterDto } from "@/pages/manka/[manka]/[chapter]";

const URL = process.env.NEXT_PUBLIC_NEXTAUTH_URL_ADDRESS;

type MankaHead = { data: HandlerMangaSwag };
type ChapterHead = {
  data: ChapterDto;
};

export function MainHead() {
  return (
    <Head>
      <title>Manka</title>
      <meta name="description" content="Read Manka" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />

      <meta property="og:title" content="Manka - The Most Popular Manga" />
      <meta
        property="og:description"
        content="Read the most popular manga online. Discover new chapters, popular titles, and more."
      />
      <meta property="og:image" content={`${URL}/favicon.ico`} />
      <meta property="og:url" content={URL} />
      <meta property="og:type" content="website" />

      <meta name="twitter:title" content="Manka - The Most Popular Manga" />
      <meta
        name="twitter:description"
        content="Discover and read the latest popular manga titles online. Stay updated with new releases!"
      />
      <meta name="twitter:image" content={`${URL}/favicon.ico`} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
}

export function MankaHead({ data }: MankaHead) {
  const imageUrl = data?.img ? `${URL}${data.img}` : `${URL}/favicon.ico`;

  return (
    <Head>
      <title>{data?.name || "Manga Title"}</title>
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
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={`${URL}/manka/${data?.id}`} />

      <meta name="twitter:title" content={data?.name || "Manga Title"} />
      <meta
        name="twitter:description"
        content={data?.describe || "Manga description"}
      />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
}

export function ChapterHead({ data }: ChapterHead) {
  const imageUrl = data?.img[0] ? `${URL}${data.img[0]}` : `${URL}/favicon.ico`;

  return (
    <Head>
      <title>{`${data?.animeName} : ${data.chapter}` || "Manga Title"}</title>
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
      <meta property="og:image" content={imageUrl} />
      <meta
        property="og:image:alt"
        content={`Image from chapter ${data?.chapter}`}
      />
      <meta
        property="og:url"
        content={`${URL}/manka/${data?.name}/${data.chapter}`}
      />
      <meta property="og:updated_time" content={data?.createdAt} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={data?.name} />
      <meta
        name="twitter:description"
        content={`Read Chapter ${data?.chapter} of ${data?.animeName}`}
      />
      <meta name="twitter:image" content={imageUrl} />
    </Head>
  );
}
