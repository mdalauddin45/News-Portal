import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import {
  FaBookmark,
  FaShareAlt,
  FaStar,
  FaStarHalfAlt,
  FaEye,
} from "react-icons/fa";

const NewsSummaryCard = ({ news }) => {
  //   console.log(news);
  const { title, details, image_url, total_view, _id, author, rating } = news;
  return (
    <Card className="mb-5">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <div className="d-flex">
          <Image
            className="me-2"
            roundedCircle
            style={{ height: "60px" }}
            src={author.img}
          ></Image>
          <div>
            <p className="m-0">{author?.name}</p>
            <p>{author?.published_date}</p>
          </div>
        </div>
        <div>
          <FaBookmark className="me-2"></FaBookmark>
          <FaShareAlt></FaShareAlt>
        </div>
      </Card.Header>
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
      <Card.Footer className="d-flex align-items-center justify-content-between ">
        <div className="text-warning d-flex align-items-center">
          <FaStar></FaStar>
          <FaStar></FaStar>
          <FaStar></FaStar>
          <FaStarHalfAlt className="me-2"></FaStarHalfAlt>
          <span>{rating.number}</span>
        </div>
        <div className="d-flex align-items-center">
          <FaEye className="me-2"></FaEye>
          <span>{total_view}</span>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsSummaryCard;
