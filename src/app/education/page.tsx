import { getNewsSearch } from "@/api";
import Article from "@/components/Article";
import { removeDuplicateData } from "@/utils";

const Education = async () => {
  const newsWorld = await getNewsSearch("business");
  const filterArticles = removeDuplicateData(newsWorld);

  return (
    // <div className="w-[700px]">
    //   {filterArticles.map((article, idx) => (
    //     <div key={`${article?.title}-${idx}`}>
    //       <Article data={article} />
    //     </div>
    //   ))}
    // </div>
    <>
      <h1>Education</h1>
    </>
  );
};

export default Education;
