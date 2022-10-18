import React, { useEffect, useState } from "react";

function LeftSideNav() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/news-categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  console.log(categories);
  return (
    <div>
      <h4>All Category</h4>
    </div>
  );
}

export default LeftSideNav;
