import { BlobOptions } from "buffer";
import React from "react";

interface Props {
  title: string;
  isActive?: Boolean;
  onClick?: () => void;
}

const NavButton = ({ title, isActive, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`${
        isActive && "bg-[#036756]"
      } hover:bg-[#036756] py-2 px-4 text-sm rounded font-bold`}
    >
      {title}
    </button>
  );
};

export default NavButton;
