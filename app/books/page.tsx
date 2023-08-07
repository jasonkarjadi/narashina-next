import supabase from "@/lib/utils/supabase";
import NextLink from "next/link";

interface BooksPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

const BooksPage = async ({ searchParams }: BooksPageProps) => {
  const {} = await supabase.from("book").select();
  return (
    <main className="flex-1 flex flex-col">
      <header className="flex h-12 border-[#CC9966] border-b px-4 items-center justify-between">
        <p></p>
        <div className="gap-x-4 flex"></div>
        <p></p>
      </header>
      <div className="flex-1">
        {[].map((val, idx) => (
          <div key={idx}></div>
          // shelves, rows of books
          // {element: div, class: w-4, children: {}}
        ))}
      </div>
      <footer
        className="flex h-12 border-[#CC9966] border-t px-4 gap-x-4 items-center"
        dir="ltr"
      >
        <NextLink href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
              clipRule="evenodd"
            />
          </svg>
        </NextLink>
        <div className="flex-1 h-8 bg-[#55433B] rounded flex">
          <div className="flex-1"></div>
          <button className="px-2" aria-label="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M10 3.75a2 2 0 10-4 0 2 2 0 004 0zM17.25 4.5a.75.75 0 000-1.5h-5.5a.75.75 0 000 1.5h5.5zM5 3.75a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 01.75.75zM4.25 17a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5h1.5zM17.25 17a.75.75 0 000-1.5h-5.5a.75.75 0 000 1.5h5.5zM9 10a.75.75 0 01-.75.75h-5.5a.75.75 0 010-1.5h5.5A.75.75 0 019 10zM17.25 10.75a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5h1.5zM14 10a2 2 0 10-4 0 2 2 0 004 0zM10 16.25a2 2 0 10-4 0 2 2 0 004 0z" />
            </svg>
          </button>
        </div>
        {/* <InfoModule /> */}
        <button>
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
              d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
            />
          </svg>
        </button>
      </footer>
    </main>
  );
};

export default BooksPage;

// homework: check dir
