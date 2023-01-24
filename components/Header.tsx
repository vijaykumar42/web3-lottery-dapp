import React from "react";
import NavButton from "./NavButton";
import { useAddress, useDisconnect } from "@thirdweb-dev/react";

const Header = () => {
  const address = useAddress();
  const disconnect = useDisconnect();
  return (
    <header className="grid grid-cols-2 md:grid-cols-5 items-center justify-between p-5">
      <div className="flex items-center space-x-2">
        <img
          className="rounded-full h-20 w-20"
          src="https://compile.blog/wp-content/uploads/2021/11/Web3-Icon-2.png"
        />
        <div>
          <h2 className="text-lg font-bold">Web3 Lottery</h2>
          <p className="text-sm text-emerald-100 truncate">
            Address: {address?.substring(0, 5)}...
            {address?.substring(address.length - 4, address.length)}
          </p>
        </div>
      </div>
      <div className="hidden md:flex md:col-span-3 justify-center items-center">
        <NavButton isActive={true} title="Buy Tickets" />
      </div>
      <div className="flex flex-col ml-auto">
        <NavButton onClick={disconnect} title="Logout" />
      </div>
    </header>
  );
};

export default Header;
