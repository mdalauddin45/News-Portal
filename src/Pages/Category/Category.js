import React from "react";
import { useLoaderData } from "react-router-dom";

function Category() {
  const news = useLoaderData();
  console.log(news);
  return (
    <div>
      <h2>this is category {news.length} </h2>
    </div>
  );
}

export default Category;
