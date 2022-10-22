import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function LeftSideNav() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`https://server-pied-gamma.vercel.app/news-categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  // console.log(categories);
  return (
    <div>
      <h4>All Category: {categories.length}</h4>
      <div>
        {categories.map((category) => (
          <p key={category.id}>
            <Link to={`/category/${category.id}`}>{category.name}</Link>
          </p>
        ))}
      </div>
    </div>
  );
}

export default LeftSideNav;
