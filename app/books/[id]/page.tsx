import supabase from "@/lib/utils/supabase";

interface BookPageProps {
  params: { id: string };
}

const BookPage = async ({ params }: BookPageProps) => {
  const { data } = await supabase.from("book").select().eq("id", params.id);
  return <></>;
};

export default BookPage;

// task: design not found page
