import { getNewsSearch } from "@/api";
import Article from "@/components/Article";
import { removeDuplicateData } from "@/utils";

const Money = async () => {
  const newsWorld = await getNewsSearch("science");
  const filterArticles = removeDuplicateData(newsWorld);

  return (
    // <div className="w-[700px]">
    //   {filterArticles.map((article, idx) => (
    //     <div key={`${article?.title}-${idx}`}>
    //       <Article data={article} />
    //     </div>
    //   ))}
    // </div>
    <h1>Money</h1>
  );
};

export default Money;
