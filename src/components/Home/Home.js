import React from "react";
import { Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useReview from "../../Hooks/useReview";
import Review from "../Review/Review";

const Home = () => {
  const [reviews] = useReview();
  return (
    <div className="container">
      <div className="row hero-section align-items-center justify-content-between">
        <div className="col-md-6 text-start">
          <h2 className="text-uppercase fw-bold" style={{ fontSize: "38px" }}>
            Collect Your Best Laptop With{" "}
            <span className="text-danger">AMAR LAPTOP!</span>
          </h2>
          <p>
            MSI taps into the spirit of exploration by designing the greatest
            laptop collection- Prestige Series. To keep more efficient of the
            work, these finely- crafted machines not only show unique taste, but
            also are immensely powerful. Thin and light yet immensely powerful,
            it enhances your style and workflow wherever you go.
          </p>
          <Button variant="danger" size="lg">
            <a
              target={"blank"}
              href="https://www.msi.com/Business-Productivity/Prestige-14-A11X/Specification"
              className="text-decoration-none text-white"
            >
              LIVE DEMO
            </a>
          </Button>
        </div>
        <div className="col-md-6 ps-4">
          <img
            className="w-100"
            src="https://www.techlandbd.com/image/cache/catalog/Laptop/Msi/prestige%2014/%2014%20A11SCX/msi-prestige-15-a11scx-1.jpg-1100x1100.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="review-section my-5">
        <h2 className="fw-bold customer-reviews">Customer Reviews</h2>
        <Row xs={1} md={3} className="g-4">
          {reviews
            .map((review) => <Review key={review.id} review={review} />)
            .slice(0, 3)}
        </Row>
        <Link to={"/review"}>
          <Button className="mt-3">See All Reviews</Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
