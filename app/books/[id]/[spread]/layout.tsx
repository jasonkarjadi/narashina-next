import supabase from "@/lib/utils/supabase";
import type { Metadata } from "next";
import NextLink from "next/link";
import type { ReactNode } from "react";
import PageFlip from "./PageFlip";

interface Props {
  params: { id: string; spread: string };
}

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  return {
    title: `見開き${params.spread}`,
  };
};

interface LayoutProps extends Props {
  children: ReactNode;
}

const SpreadLayout = async ({ params, children }: LayoutProps) => {
  const { count } = await supabase
    .from("spread")
    .select("*", { count: "exact", head: true })
    .eq("book_id", params.id);

  const { data } = await supabase
    .from("book")
    .select("paper_width, paper_height")
    .eq("id", params.id)
    .limit(1)
    .single();

  return (
    <>
      <main className="flex-1 flex" dir="rtl">
        <PageFlip href={+params.spread - 1} ariaLabel="本書の前頁へ">
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
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </PageFlip>
        <div className="flex-1 flex justify-center">
          <div
            className={`relative w-0 text-[#171923] aspect-[${data?.paper_width}/${data?.paper_height}]`}
          >
            {children}
          </div>
        </div>
        <PageFlip
          href={+params.spread + 1}
          ariaLabel="本書の後頁へ"
          last={count}
        >
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
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </PageFlip>
      </main>
      <footer className="flex h-12 items-center px-4 justify-between">
        <NextLink href="/books">
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
        <div className="flex gap-x-4">
          <button aria-label="言葉検索">
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
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
          <button aria-label="本書概要">
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
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
              />
            </svg>
          </button>
          <button aria-label="高速移動">
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
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
              />
            </svg>
          </button>
        </div>
      </footer>
    </>
  );
};

export default SpreadLayout;
