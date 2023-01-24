import Header from "@/components/Header";
import Head from "next/head";
import { useAddress, useContract, useContractRead } from "@thirdweb-dev/react";
import Login from "@/components/Login";
import { ClimbingBoxLoader } from "react-spinners";
import { useState } from "react";

export default function Home() {
  const [quantity, setQuantity] = useState(1);
  const { contract, isLoading } = useContract(
    process.env.LOTTERY_CONTRACT_ADDRESS
  );
  const { data: remainingTickets } = useContractRead(
    contract,
    "RemainingTickets"
  );
  const address = useAddress();
  console.log(address);
  if (!address) return <Login />;
  if (isLoading) {
    <div className="min-h-screen bg-[#031818] text-white">
      <ClimbingBoxLoader color="#ffffff" size={30} />;
    </div>;
  }
  return (
    <div className="bg-[#091818] min-h-screen flex flex-col text-white">
      <Head>
        <title>Web3 Lottery</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {/* next section */}
      <div className="md:flex md:flex-row m-5 space-y-5 md:space-y-0 md:space-x-5 items-start justify-center">
        <div className="bg-[#091f1c] border-[#004337] p-5 border-2 rounded-lg">
          <h1 className="text-5xl font-semibold text-center">The Next Draw</h1>
          <div className="flex justify-between space-x-2 p-2">
            <div className="w-full border-[#004337] border-2 rounded p-4">
              <h1 className="text-sm">Total Pool</h1>
              <p className="text-xl">0.1 MATIC</p>
            </div>
            <div className="w-full border-[#004337] border-2 rounded p-4">
              <h1 className="text-sm">Tickets Left</h1>
              <p className="text-xl">{remainingTickets?.toNumber()}</p>
            </div>
          </div>
          <div>
            <div className="flex justify-around">
              <div className="flex flex-col justify-center items-center animate-pulse">
                <p className="bg-[#035756] px-9 py-4 rounded text-2xl">0</p>
                <p>HOURS</p>
              </div>
              <div className="flex flex-col justify-center items-center animate-pulse">
                <p className="bg-[#035756] px-9 py-4 rounded text-2xl">0</p>
                <p>MINUTES</p>
              </div>
              <div className="flex flex-col justify-center items-center animate-pulse">
                <p className="bg-[#035756] px-9 py-4 rounded text-2xl">0</p>
                <p>SECONDS</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#091f1c] border-[#004337] p-5 border-2 rounded-lg">
          <div className="flex justify-between p-2 space-x-8">
            <h1 className="text-lg font-semibold">Price per Ticket</h1>
            <h1>0.01 MATIC</h1>
          </div>
          <div className="flex p-2 bg-[#031818]">
            <h1>TICKETS </h1>
            <input
              className="w-full bg-[#031818] text-right"
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
          </div>
          <div className="p-2">
            <div className="flex justify-between">
              <h1>Total cost of tickets</h1>
              <h1>0.03</h1>
            </div>
            <div className="flex justify-between">
              <h1 className="text-sm text-emerald-50">Service fee</h1>
              <h1 className="text-sm text-emerald-50">0.0003 MATIC</h1>
            </div>
            <div className="flex justify-between">
              <h1 className="text-sm text-emerald-50">Network fee</h1>
              <h1 className="text-sm text-emerald-50">TBC</h1>
            </div>
          </div>
          <div className="flex">
            <button className="text-center m-2 p-2 w-full bg-[#035756] rounded">
              Buy Tickets
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
