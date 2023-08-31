import supabase from "@/lib/utils/supabase";
import type { Metadata } from "next";
import NextLink from "next/link";
import type { ReactNode } from "react";

interface Props {
  params: { id: string };
}

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { data } = await supabase
    .from("book")
    .select("title")
    .eq("id", +params.id)
    .limit(1)
    .single();
  return {
    title: {
      default: data?.title ?? "",
      template: `%s｜${data?.title ?? ""}｜文庫ならしな`,
    },
  };
};

interface LayoutProps extends Props {
  children: ReactNode;
}

const BookLayout = async ({ children, params }: LayoutProps) => {
  const { data } = await supabase
    .from("book")
    .select()
    .eq("id", +params.id)
    .limit(1)
    .single();
  return (
    <>
      <header
        className="h-12 border-[#CC9966] border-b px-4 overflow-x-auto flex items-center gap-x-4"
        dir="ltr"
      >
        <NextLink href={"/"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125z"
            />
          </svg>
        </NextLink>
        <h1 className="font-bold whitespace-nowrap">{data?.title}</h1>
      </header>
      {children}
    </>
  );
};

export default BookLayout;
