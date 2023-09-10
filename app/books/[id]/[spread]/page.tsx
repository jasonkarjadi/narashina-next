import supabase from "@/lib/utils/supabase";
import { notFound } from "next/navigation";
import Paper from "./Paper";
import Renderer from "./Renderer";

export const revalidate = 7200;

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
    notFound();
  }

  if (Array.isArray(data.content)) {
    return (
      <>
        {data.content.map(
          (val, idx) =>
            val && (
              <Paper key={idx}>
                <Renderer {...val} />
              </Paper>
            )
        )}
      </>
    );
  }

  return (
    <Paper>
      <Renderer {...data.content} />
    </Paper>
  );
};

export default SpreadPage;

// task: design not found page
// side: link to books remember last query filter
