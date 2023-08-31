import supabase from "@/lib/utils/supabase";
// import NextImage from "next/image";
import NextLink from "next/link";

export const revalidate = 3600;

interface PageProps {
  params: { id: string };
}

const BookPage = async ({ params }: PageProps) => {
  const { data } = await supabase
    .from("book")
    .select()
    .eq("id", params.id)
    .limit(1)
    .single();
  return (
    <>
      <main className="flex-1">
        {/* <NextImage src={""} alt="書籍の表紙" /> */}
        <div className="flex mt-6">
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
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
              />
            </svg>
            <span>詳細</span>
          </button>
        </div>
      </main>
      <footer className="h-12 border-[#CC9966] border-t flex">
        <NextLink
          href={`${params.id}/0`}
          className="flex-1 flex justify-center items-center gap-x-2 font-bold"
          dir="ltr"
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
              d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
            />
          </svg>
          <span>書卓</span>
        </NextLink>
      </footer>
    </>
  );
};

export default BookPage;

// task: design not found page
