import React from "react";
import { Card, Col } from "react-bootstrap";
import { StarIcon } from "@heroicons/react/solid";

const Review = ({ review }) => {
  const { name, review_text, img, ratings } = review;
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={img}></Card.Img>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            Ratings:
            <StarIcon style={{ width: "18px", color: "orange" }}></StarIcon>
            {ratings}
          </Card.Text>
          <Card.Text title={review_text}>{review_text.slice (0, 100)+"..."}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Review;
