import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const NewsSummaryCard = ({ news }) => {
  console.log(news);
  const { title, details, image_url, total_view, _id, author } = news;
  return (
    <Card className="">
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details.length > 200 ? (
            <p>
              {details.slice(0, 250) + "..."}
              <Link to={`/news/${_id}`}>Read More..</Link>
            </p>
          ) : (
            <p>{details} </p>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  );
};

export default NewsSummaryCard;
