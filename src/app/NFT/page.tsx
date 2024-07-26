// pages/NFTPage.js
import React from 'react';

const NFTPage = () => {
  const nft = {
    image: '#', 
    title: 'image title',
    hash: '#22650',
    price: '$250',
  };

  return (
    <div style={{ backgroundColor: 'black', color: 'white', minHeight: '100vh', padding: '20px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', backgroundColor: '#333', borderRadius: '8px', padding: '20px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <div style={{ width: '100%', marginBottom: '20px' }}>
            <img src={nft.image} alt={nft.title} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
          </div>
          <div style={{ width: '100%' }}>
            <h1>{nft.title}</h1>
            <p>{nft.hash}</p>
            <h2>{nft.price}</h2>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button style={{ padding: '10px 20px', backgroundColor: 'blue', color: 'white', borderRadius: '5px' }}>Buy now</button>
              <button style={{ padding: '10px 20px', backgroundColor: 'grey', color: 'white', borderRadius: '5px' }}>Make offer</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTPage;
