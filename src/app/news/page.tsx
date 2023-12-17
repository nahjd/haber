import { getNewsSearch } from "@/api";
import Article from "@/components/Article";
import { removeDuplicateData } from "@/utils";

const News = async () => {
  const newsWorld = await getNewsSearch("world");
  const filterArticles = removeDuplicateData(newsWorld);

  return (
    // <div className="w-[700px]">
    //   {filterArticles.map((article, idx) => (
    //     <div key={`${article?.title}-${idx}`}>
    //       <Article data={article} />
    //     </div>
    //   ))}
    // </div>
    <h1>News</h1>
  );
};

export default News;
