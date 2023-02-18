import Head from "next/head";

// import { Inter } from "@next/font/google";
import Movies from "./Movies";
export default function Home() {
  return (
    <>
      <Head>
        <title>Movies App</title>
        <meta
          name="description"
          content="A website for looking up movie details"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <div className="">
          <Movies />
        </div>
      </main>
    </>
  );
}
