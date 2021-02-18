import '../styles/Rating.css';

const Rating = ({ count, rating }) => {
  const getRatingClass = (count, rating) => {
    if (count === '0') {
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
      {count === '0' ? 'Unrated' : rating}
    </p>
  );
};

export default Rating;
