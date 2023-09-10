import NextLink from "next/link";

const NotFound = () => {
  return (
    <div dir="ltr" className="self-center">
      <p className="text-[#E0E2DC]">見開きが見付かりませんでした</p>
      <NextLink
        href="0"
        className="bg-[#E0E2DC] p-2 rounded block w-fit mx-auto mt-2"
      >
        冒頭へ
      </NextLink>
    </div>
  );
};

export default NotFound;
