import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../Hook/useTitle";
import NewsSummaryCard from "../Shared/NewsSummaryCard/NewsSummaryCard";

function Home() {
  useTitle("Home");
  const allNews = useLoaderData();
  return (
    <div>
      <h1>BGC News home {allNews.length}</h1>
      {allNews.map((news) => (
        <NewsSummaryCard key={news._id} news={news}></NewsSummaryCard>
      ))}
    </div>
  );
}

export default Home;
