"use client";

import { type ReactNode } from "react";

interface StickyButtonProps {
  children: ReactNode;
  text: string;
  isRight?: boolean;
}

const StickyButton = ({ isRight, children, text }: StickyButtonProps) => {
  return (
    <button
      className={`sticky bg-[#613F30] border-[#2D1B13] border ${
        isRight ? "right" : "left"
      }-0`}
      dir="ltr"
      onClick={() => {
        scrollTo({ top: 10, left: 10 });
      }}
    >
      <span className={`flex flex-col w-fit mx-auto ${isRight && "items-end"}`}>
        {children}
        <span className="text-xs">{text}</span>
      </span>
    </button>
  );
};

export default StickyButton;
