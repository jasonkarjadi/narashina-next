import InfoModule from "./InfoModule";
import NextLink from "next/link";
import NewsLog from "./NewsLog";

export const metadata = {
  title: "表｜ならしな",
};

const RootPage = async () => {
  return (
    <main className="flex-1 bg-[#392319] flex w-[calc(200vw-16px)]">
      <section className="flex flex-col bg-[#613F30] flex-1">
        <div className="[writing-mode:vertical-rl] text-center mx-auto flex-1">
          <h1 className="font-bold text-8xl">ならしな</h1>
          <p className="text-xl tracking-widest">日本語電子文庫</p>
        </div>
        <NextLink
          href="/books"
          className="rounded bg-[#392319] w-20 h-16 my-4 mx-auto flex flex-col justify-center items-center font-bold"
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
              d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125z"
            />
          </svg>
          <span>書架</span>
        </NextLink>
      </section>
      <section className="flex-1 flex">
        <h2
          className="font-bold [writing-mode:vertical-rl] text-xl tracking-widest w-14 leading-[56px] pt-4"
          dir="ltr"
        >
          文庫追加履歴
        </h2>
        <NewsLog />
      </section>
      <InfoModule />
    </main>
  );
};

export default RootPage;

// homework: info dialog, fetch newly added books from database
// side: drag instead of free scroll (refer to traversy media touch slider), info module keep track of drag state
// resolution: dir=rtl for scroll start position and elements order
