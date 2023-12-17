import { news } from "@/types";

export const removeDuplicateData = (articles: any) => {
  const randomArticle: news[] | undefined = articles?.articles;

  if (randomArticle) {
    const filterArticles = randomArticle.filter(
      (article) => article?.source?.id !== null
    );
    return filterArticles;
  } else {
    return [];
  }
};
