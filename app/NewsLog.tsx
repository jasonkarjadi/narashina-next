// const getData = async () => {
//   const res = await fetch("https://firestore.com/");
//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }
//   return res.json();
// };

const NewsLog = async () => {
  // const data = await getData()
  return (
    <div className="overflow-y-auto">
      {[].map((val, idx) => (
        <div key={idx}></div>
        // last 3 months, latest book newly added label
      ))}
    </div>
  );
};

export default NewsLog;
