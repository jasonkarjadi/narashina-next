import NextLink from "next/link";
import type { ReactNode } from "react";

interface PageFlipProps {
  children: ReactNode;
  ariaLabel: string;
  href: number;
  last?: number | null;
}

const PageFlip = ({ children, ariaLabel, href, last }: PageFlipProps) => {
  const isDisabled =
    typeof last === "undefined"
      ? href < 0
      : typeof last === "number"
      ? href >= last
      : true;
  return (
    <NextLink
      href={`${href}`}
      aria-label={ariaLabel}
      className={`bg-black/70 w-12 flex justify-center items-center ${
        isDisabled && "pointer-events-none opacity-30"
      }`}
    >
      {children}
    </NextLink>
  );
};

export default PageFlip;
