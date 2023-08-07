// import { Noto_Serif_JP } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

// const noto_serif = Noto_Serif_JP({
//   weight: ["400", "700"],
//   preload: false,
// });

export const metadata = {
  title: "文庫ならしな",
};

export interface LayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: LayoutProps) => {
  return (
    <html lang="jp" className="overflow-y-hidden">
      <body
        className="text-[#E0E2DC] overflow-y-hidden bg-[#2D1B13] min-h-[100svh] flex flex-col"
        dir="rtl"
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
