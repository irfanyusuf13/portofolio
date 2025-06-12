import { FaStar, FaRegStar } from 'react-icons/fa';

interface StarRatingProps {
  level: number; 
}

const StarRating = ({ level }: StarRatingProps) => {
  const totalStars = 5;
  
  return (
    <div className="flex">
      {[...Array(totalStars)].map((_, index) => {
        const starNumber = index + 1;
        return starNumber <= level 
          ? <FaStar key={index} className="text-yellow-400" /> 
          : <FaRegStar key={index} className="text-gray-600" />;
      })}
    </div>
  );
};

export default StarRating;