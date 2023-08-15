import ShelfRow from "./ShelfRow";

const Page = () => {
  return (
    // <div className="flex flex-1">
    //   <div className="flex-1 my-4 flex flex-col justify-center">
    //     <div className="w-24 bg-[#E0E2DC] aspect-[1/1.414] mx-auto"></div>
    //     <h1 className="font-bold mx-4 text-xs">
    //       この素晴らしい世界に祝福を！　あぁ、駄女神さま
    //     </h1>
    //   </div>
    //   <div className="bg-[#613F30] w-56"></div>
    // </div>
    <main className="flex-1 flex min-w-fit" dir="rtl">
      <div
        className="flex-[0_0_48px] bg-[#2D1B13] right-0 border-[#613F30] border-l sticky text-center"
        dir="ltr"
      >
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
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
            />
          </svg>
        </button>
        <p className="[writing-mode:vertical-rl] overflow-y-auto">
          小説　異世界　2019年1月～
        </p>
      </div>
      <div className="flex flex-col flex-1">
        <ShelfRow>
          {new Array(50).fill(undefined).map((val, idx, arr) => (
            <button
              key={idx}
              className="bg-[#E0E2DC] w-8 h-[80%] p-1 text-black text-[8px] border border-black rounded-sm tracking-tighter flex flex-col items-center"
              dir="ltr"
            >
              <span className="">あ - 6</span>
              <div>{idx === 0 ? "A" : idx === arr.length - 1 && "X"}</div>
              <div className="bg-[#E4006E] h-[50%] w-full rounded-sm my-1 [writing-mode:vertical-rl] text-start p-1 leading-none">
                <p className="font-black">この素晴らしい世界に祝福を！</p>
                <p className="font-black">あぁ、駄女神さま</p>
              </div>
              <span className="[writing-mode:vertical-rl]">暁なつめ</span>
            </button>
          ))}
        </ShelfRow>
        <div className="flex h-10 justify-between">
          <button className="sticky right-12 px-2">
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
          </button>
          <button className="sticky left-0 px-2">
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
          </button>
        </div>
        <ShelfRow>
          {new Array(50).fill(undefined).map((val, idx, arr) => (
            <button
              key={idx}
              className="bg-[#E0E2DC] w-8 h-[80%] p-1 text-black text-[8px] border border-black rounded-sm tracking-tighter flex flex-col items-center"
              dir="ltr"
            >
              <span className="">あ - 6</span>
              <div>{idx === 0 ? "A" : idx === arr.length - 1 && "X"}</div>{" "}
              <div className="bg-[#E4006E] h-[50%] w-full rounded-sm my-1 [writing-mode:vertical-rl] text-start p-1 leading-none">
                <p className="font-black">この素晴らしい世界に祝福を！</p>
                <p className="font-black">あぁ、駄女神さま</p>
              </div>
              <span className="[writing-mode:vertical-rl]">暁なつめ</span>
            </button>
          ))}
        </ShelfRow>
      </div>
      <div className="flex-[0_0_48px]"></div>
    </main>
  );
};

export default Page;
