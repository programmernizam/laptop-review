import React from 'react';
import { Row } from 'react-bootstrap';
import useReview from '../../Hooks/useReview';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {
    const [reviews] = useReview();
  return (
    <div className="container">
      <h2 className='customer-reviews'>Customer Reviews</h2>
      <Row xs={1} md={3} className="g-4">
          {
              reviews.map(review => <Review key={review.id} review={review}/>)
          }
      </Row>
    </div>
  );
};

export default Reviews;