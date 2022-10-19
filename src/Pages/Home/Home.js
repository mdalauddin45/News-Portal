import React from "react";
import { useLoaderData } from "react-router-dom";

function Home() {
  const news = useLoaderData();
  return (
    <div>
      <h1>BGC News home {news.length}</h1>
    </div>
  );
}

export default Home;
