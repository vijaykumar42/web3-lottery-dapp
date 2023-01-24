import React from "react";
import { useMetamask } from "@thirdweb-dev/react";

const Login = () => {
  const connect = useMetamask();
  return (
    <div className="flex flex-col items-center justify-center bg-[#031818] min-h-screen text-white">
      <h1 className="text-4xl font-bold">Web3 Lottery Dapp</h1>
      <p className="text-lg">Wooo you need to login</p>
      <button
        className="bg-[#036576] px-4 py-2 text-sm rounded m-2 font-bold"
        onClick={connect}
      >
        Login with Metamask
      </button>
    </div>
  );
};

export default Login;
