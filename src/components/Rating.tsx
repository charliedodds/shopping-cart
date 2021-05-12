import '../styles/Rating.css';

type Props = {
  count: number;
  rating: number;
};

const Rating = ({ count, rating }: Props) => {
  const getRatingClass = (count: number, rating: number): string => {
    if (count === 0) {
      return '';
    } else if (rating <= 50) {
      return 'red-text';
    } else if (rating <= 75) {
      return 'orange-text';
    } else {
      return 'green-text';
    }
  };
  return (
    <p className={`rating ${getRatingClass(count, rating)}`}>
      {count === 0 ? 'Unrated' : rating}
    </p>
  );
};

export default Rating;
