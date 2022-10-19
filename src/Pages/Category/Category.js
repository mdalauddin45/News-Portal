import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsSummaryCard from "../Shared/NewsSummaryCard/NewsSummaryCard";

function Category() {
  const allNews = useLoaderData();
  console.log(allNews);
  return (
    <div>
      <h2>this is category {allNews.length} </h2>
      {allNews.map((news) => (
        <NewsSummaryCard key={news._id} news={news}></NewsSummaryCard>
      ))}
    </div>
  );
}

export default Category;
