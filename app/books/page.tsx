// import supabase from "@/lib/utils/supabase";
import ShelfRow from "./ShelfRow";
import StickyButton from "./StickyButton";

interface PageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

const BooksPage = async ({ searchParams }: PageProps) => {
  // const { data } = await supabase.from("book").select("id, side").limit(100);
  return (
    <main className="flex-1 min-w-min grid grid-cols-[48px_1fr_48px] grid-rows-[1fr_48px]">
      <div className="bg-[#2D1B13] border-[#613F30] border-l flex flex-col items-center">
        <button className="flex-1"></button>
      </div>
      <div className="flex flex-col gap-y-0.5">
        <ShelfRow></ShelfRow>
        <ShelfRow></ShelfRow>
      </div>
      <div className="border-[#613F30] border-r">
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
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
      </div>
      <StickyButton text="右端" isRight>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
            clipRule="evenodd"
          />
        </svg>
      </StickyButton>
      <div>
        <p className="flex gap-x-4">
          {Object.values(searchParams).map((val, idx) => (
            <span key={idx} dir="ltr">
              {val}
            </span>
          ))}
        </p>
      </div>
      <StickyButton text="左端">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
            clipRule="evenodd"
          />
        </svg>
      </StickyButton>
    </main>
  );
};

export default BooksPage;
