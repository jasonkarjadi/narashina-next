import supabase from "@/lib/utils/supabase";
import Renderer from "./Renderer";

export const revalidate = 3600;

interface PageProps {
  params: { id: string; spread: string };
}

const SpreadPage = async ({ params }: PageProps) => {
  const { data } = await supabase
    .from("spread")
    .select("content")
    .eq("book_id", params.id)
    .eq("spread_number", params.spread)
    .limit(1)
    .single();

  if (!data) {
    return <>received no data</>;
  }

  return (
    <div className="relative">
      {Array.isArray(data.content) ? (
        data.content.map(
          (val, idx) =>
            val && (
              <div
                key={idx}
                className={`absolute h-full ${idx ? "right-px" : "left-px"}`}
              >
                <Renderer {...val} />
              </div>
            )
        )
      ) : (
        <div className="absolute h-full right-0 translate-x-1/2">
          <Renderer {...data.content} />
        </div>
      )}
    </div>
  );
};

export default SpreadPage;

// task: design not found page
// side: link to books remember last query filter
