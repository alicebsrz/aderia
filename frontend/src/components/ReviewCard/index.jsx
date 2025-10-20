import React from 'react';
import { 
  ReviewWrapper, 
  Avatar, 
  ReviewContent, 
  ReviewHeader, 
  AuthorName, 
  RatingStars, 
  ReviewText 
} from './styles';
import { FaStar } from 'react-icons/fa';

const ReviewCard = ({ review }) => {
  return (
    <ReviewWrapper>
      <Avatar src={review.image} alt={review.name} />
      <ReviewContent>
        <ReviewHeader>
          <AuthorName>{review.name}</AuthorName>
          <RatingStars>
            {Array.from({ length: review.rating }).map((_, index) => (
              <FaStar key={index} />
            ))}
          </RatingStars>
        </ReviewHeader>
        <ReviewText>"{review.review}"</ReviewText>
      </ReviewContent>
    </ReviewWrapper>
  );
};

export default ReviewCard;