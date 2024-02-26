"use client";
import React, { ReactNode } from "react";

interface Props {
  height?: string;
  text: string;
  children: ReactNode;
  className: string;
}
const OutlineBox = ({ height, children, text, className }: Props) => {
  return (
    <div
      className={`flex p-4 lg:p-6 flex-col items-start gap-2 rounded-lg border-[1px] border-solid border-[#E3BFDE] ${
        height ? "lg:h-[14rem] bg-dark-green" : "lg:h-[12.5rem] bg-white"
      }`}
    >
      <div className="flex flex-col gap-4 items-start">
        {children}
        <p
          className={`text-black text-base font-normal leading-[1.5rem] ${
            height ? "text-white" : ""
          } ${className}`}
        >
          {text}
        </p>
      </div>
    </div>
  );
};

export default OutlineBox;
