import React from "react";
import { Card, Col } from "react-bootstrap";
// import { StarIcon } from "@heroicons/react/solid";
import { Rating } from "react-simple-star-rating";

const Review = ({ review }) => {
  const { name, review_text, img, ratings, rate } = review;
  return (
    <Col>
      <Card className="shadow">
        <div className="row p-3 align-items-center justify-content-start">
          <div className="col-3">
            <Card.Img
              className="rounded-circle"
              variant="top"
              src={img}
            ></Card.Img>
          </div>
          <div className="col-9 text-start">
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text className="d-flex align-items-center">
                <span style={{marginTop:"5px"}}> {ratings} </span>
                <Rating ratingValue={rate} readonly={true} size={20} />
              </Card.Text>
            </Card.Body>
          </div>
          <Card.Text className="text-start" title={review_text}>
            {review_text.slice(0, 80) + "..."}
          </Card.Text>
        </div>
      </Card>
    </Col>
  );
};

export default Review;
