import React from 'react';
import { MdOutlineStarPurple500, MdOutlineStarHalf, MdOutlineStarOutline } from 'react-icons/md';

const StarRating = ({ rating }) => {
  const stars = [];
    // stars.push(<MdOutlineStarPurple500 key={i} size={20} color="gold" />);
  for (let i = 0; i < 5; i++) {
    if (rating >= i + 1) {
      // Full star (e.g., 1, 2, 3, etc.)
      stars.push(<MdOutlineStarPurple500 key={i} size={20} color="gold" />);
    } else if (rating > i && rating < i + 1) {
      // Half star (e.g., 0.5, 1.5, 2.5, etc.)
      stars.push(<MdOutlineStarHalf key={i} size={20} color="gold" />);
    } else {
      // Empty star (rating is less than i)
      stars.push(<MdOutlineStarOutline key={i} size={20} color="gold" />);
    }
  }

  return <div className="flex">{stars}</div>;
};

export default StarRating;
