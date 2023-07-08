import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col items-center h-screen justify-center bg-slate-950">
      <img src="./app-icon-transparent.png" className="w-64 h-64 text-black" />

      <h1 className="text-5xl text-white tracking-tight max-w-3xl font-semibold mt-10 mb-0">
        Winners List
      </h1>

      <p className="ml-1 text-gray-400 text-2xl max-w-4xl p-10">
        Discover award-winning excellence in Apps, Games, Music, Movies, TV
        shows, Podcasts and more with Winners List. <br />
        <br />
        Immerse yourself in a curated collection of the finest content across
        various categories. Stay up-to-date with yearly award winners and be
        inspired by the best of the best.
      </p>

      <img src="./download-ios.svg" className="w-64 h-64 text-black" />
    </div>
  );
}
