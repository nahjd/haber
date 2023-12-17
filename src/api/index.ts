export const getNewsTopHeadlines = async () => {
  const newsData = await fetch(
    `http://localhost:3000/meals=${process.env.API_TOKEN_NEWS}`,
    { cache: "no-store" }
  );

  return newsData.json();
};

export const getNewsSearch = async (keyword: string) => {
  const newsData = await fetch(
    `http://localhost:3000/meals=${process.env.API_TOKEN_NEWS}&q=${keyword}&pageSize=10`,
    { cache: "no-store" }
  );
  return newsData.json();
};
