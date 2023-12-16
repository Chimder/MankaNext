import Layout from "@/components/layout";
import Head from "next/head";
import { ReactElement } from "react";
// import { Noto_Sans_JP } from "next/font/google";

// const inter = Noto_Sans_JP();

const Home = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <script
          dangerouslySetInnerHTML={{
            __html: `history.scrollRestoration = "manual"`,
          }}
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <div>MAIN</div>
        <div></div>
      </main>
    </>
  );
};

export default Home;
