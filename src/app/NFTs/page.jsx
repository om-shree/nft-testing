"use client";
import React, { useState } from "react";
import Link from "next/link";

const NFTs = () => {
  const notableCollections = [
    {
      title: "Orbit by Jiannan Huang",
      collection: "Collection 1",
      img: "url1",
    },
    { title: "Math Art (1980-1995)", collection: "Collection 2", img: "url2" },
    { title: "SERAPH Soul Series", collection: "Collection 3", img: "url3" },
    {
      title: "Construction Token by Artist",
      collection: "Collection 4",
      img: "url4",
    },
    { title: "Matr1x 2061", collection: "Collection 5", img: "url5" },
  ];

  return (
    <>
      <div className="flex flex-col items-center bg-black text-white min-h-screen">
        <h1 className="text-5xl font-bold text-yellow-400 my-8">
          NFT Marketplace
        </h1>
        <div className="w-full max-w-7xl px-4 mb-8 flex gap-4">
          <Link href="/NFT">
            <button className="p-2 mt-4 text-sm bg-gray-500 text-white rounded-sm border-2 hover:bg-gray-400">
              Go to NFT page
            </button>
          </Link>
          <Link href={"/"}>
            <button className="p-2 mt-4 text-sm bg-gray-500 text-white rounded-sm border-2 hover:bg-gray-400">
              Go to Home
            </button>
          </Link>
        </div>
        <div className="w-full max-w-7xl px-4 mb-8">
          <h2 className="text-3xl font-semibold text-yellow-400 mb-4">Owned</h2>
          <div className="grid grid-cols-5 gap-4">
            {notableCollections.map((collection, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-4">
                <img
                  src={collection.img}
                  alt={collection.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-semibold text-yellow-400">
                  {collection.title}
                </h3>
                <h3 className="text-lg font-semibold text-yellow-400">
                  {collection.collection}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="w-full max-w-7xl px-4 mb-8">
          <h2 className="text-3xl font-semibold text-yellow-400 mb-4">Top Collector Buys Today</h2>
          <div className="grid grid-cols-5 gap-4">
            {topCollectorBuys.map((buy, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-4">
                <img src={buy.img} alt={buy.title} className="w-full h-40 object-cover rounded-lg mb-4" />
                <h3 className="text-lg font-semibold text-yellow-400">{buy.title}</h3>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </>
  );
};

export default NFTs;
