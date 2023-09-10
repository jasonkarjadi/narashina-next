import supabase from "@/lib/utils/supabase";
import NextLink from "next/link";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  params: { id: string; spread: string };
  isPrevious?: boolean;
}

const PageFlip = async ({ children, params, isPrevious }: Props) => {
  const { count } = await supabase
    .from("spread")
    .select("*", { count: "exact", head: true })
    .eq("book_id", params.id);

  const spread = +params.spread;
  const href = spread + (isPrevious ? -1 : 1);

  return (
    <NextLink
      href={`${href}`}
      aria-label={`${isPrevious ? "前" : "次"}の見開きへ`}
      aria-disabled={
        !count ||
        (isPrevious ? href < 0 || spread >= count : href >= count || spread < 0)
      }
      className="bg-black/70 w-12 flex-shrink-0 flex justify-center items-center aria-disabled:pointer-events-none aria-disabled:opacity-30"
    >
      {children}
    </NextLink>
  );
};

export default PageFlip;
