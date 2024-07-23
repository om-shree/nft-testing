// pages/NFTMarketplace.js
'use client';
import React, { useState, useEffect } from 'react';

const NFTMarketplace = () => {

  const notableCollections = [
    { title: 'Orbit by Jiannan Huang', img: 'url1' },
    { title: 'Math Art (1980-1995)', img: 'url2' },
    { title: 'SERAPH Soul Series', img: 'url3' },
    { title: 'Construction Token by Artist', img: 'url4' },
    { title: 'Matr1x 2061', img: 'url5' }
  ];

  const topCollectorBuys = [
    { title: 'Collection A', img: 'url6' },
    { title: 'Collection B', img: 'url7' },
    { title: 'Collection C', img: 'url8' },
    { title: 'Collection D', img: 'url9' },
    { title: 'Collection E', img: 'url10' }
  ];

  const [selectedSection, setSelectedSection] = useState('Trending');

  return (
    <>
      <div className="flex flex-col items-center bg-black text-white min-h-screen">
        <h1 className="text-5xl font-bold text-yellow-400 my-8">NFT Marketplace</h1>

        <div className="w-full max-w-7xl px-4 mb-8">
          <h2 className="text-3xl font-semibold text-yellow-400 mb-4">Notable Collections</h2>
          <div className="grid grid-cols-5 gap-4">
            {notableCollections.map((collection, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-4">
                <img src={collection.img} alt={collection.title} className="w-full h-40 object-cover rounded-lg mb-4" />
                <h3 className="text-lg font-semibold text-yellow-400">{collection.title}</h3>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full max-w-7xl px-4 mb-8">
          <h2 className="text-3xl font-semibold text-yellow-400 mb-4">Top Collector Buys Today</h2>
          <div className="grid grid-cols-5 gap-4">
            {topCollectorBuys.map((buy, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-4">
                <img src={buy.img} alt={buy.title} className="w-full h-40 object-cover rounded-lg mb-4" />
                <h3 className="text-lg font-semibold text-yellow-400">{buy.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NFTMarketplace;
