import React from "react";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Winners List app - Discover top Apps, Games, Music, Movies, Podcasts
        </title>
        <meta name="description" content="Winners List" />
        <link rel="icon" href="/app-icon.svg" />
        add meta tags here
        <meta property="og:title" content="Winners List" />
        <meta
          property="og:description"
          content="Discover top award-winning excellence in Apps, Games, Music, Movies, TV
          shows, Podcasts, Books and more with Winners List."
        />
      </Head>
      <div className="flex flex-col items-center justify-center bg-slate-950">
        <img
          src="./app-icon-transparent.png"
          className="w-64 h-64 text-black"
        />
        <section className="flex flex-col items-center justify-center">
          <h1 className="text-5xl text-white tracking-tight max-w-3xl font-semibold mt-10 mb-0">
            Winners List
          </h1>

          <p className="ml-1 text-gray-400 text-2xl max-w-4xl p-10">
            Discover award-winning excellence in Apps, Games, Music, Movies, TV
            shows, Podcasts, Books and more with Winners List. <br />
            {/* <br />
            Immerse yourself in a curated collection of the finest content
            across various categories. Stay up-to-date with yearly award winners
            and be inspired by the best of the best. */}
          </p>
        </section>

        <img src="./download-ios.svg" className="w-64 h-64 text-black" />

        <section className="flex flex-col items-center justify-center">
          <h1 className="text-3xl text-white tracking-tight max-w-3xl font-semibold mt-10 mb-2">
            Reach out
          </h1>

          <div className="ml-1 text-gray-400 text-xl flex flex-col items-center justify-center">
            You can DM or E-mail for support
            <div className="grid gap-4 grid-cols-2 m-5">
              <a
                href="https://twitter.com/hey_amiitt"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="./twitter.webp" className="w-16 h-16 inline-block" />
              </a>
              <a
                href="mailto:hey.amit@icloud.com?subject=Reaching%20out%20regarding%20the%20Winners%20List%20App"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="./mail.svg" className="w-16 h-16 inline-block" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
