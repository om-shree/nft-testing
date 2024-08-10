"use client";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";
import Link from "next/link";
const Page = () => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  useEffect(() => {
    if (isWalletConnected) {
      redirect("/NFTs");
    }
  }, [isWalletConnected]);

  //Add functionality that will run when button is clicked
  const handleClick = () => {
    // setIsWalletConnected(true);
  };

  return (
    <div className=" items-center text-center mt-10 flex flex-col space-y-10">
      <div>
        <h1 className="text-2xl font-semibold ">Welcome to NFT testing page</h1>
      </div>
      <div>
        <h1 className="">Please connect your wallet here:</h1>
        <button
          className="p-4 mt-4 text-sm bg-gray-500 text-white rounded-sm border-2 hover:bg-gray-400"
          onClick={handleClick}
        >
          Connect Wallet
        </button>
      </div>
      <div>
        <Link href={"/NFTs"}>
          <button className="p-2 mt-4 text-sm bg-gray-500 text-white rounded-sm border-2 hover:bg-gray-400">
            Go to Marketplace
          </button>
        </Link>
        <Link href={"/NFT"}>
          <button className="p-2 mt-4 text-sm bg-gray-500 text-white rounded-sm border-2 hover:bg-gray-400">
            Go to Single NFT page
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Page;
