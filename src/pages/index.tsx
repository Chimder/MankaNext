import Head from "next/head";
import { Noto_Sans_JP } from "next/font/google";

const inter = Noto_Sans_JP();

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />

        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={inter.className}>
        <div>MAIN</div>
        <div></div>
      </main>
    </>
  );
}
