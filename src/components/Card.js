import { Link } from 'react-router-dom';

import '../styles/Card.css';

const Card = ({ item }) => {
  const editImgSrc = (imgURL) => {
    // convert small img received from API to larger size
    const newImgSrc = imgURL.replace('capsule_sm_120', 'header');
    return newImgSrc;
  };

  const imgSrc = editImgSrc(item.thumb);

  const getRatingClass = (rating) => {
    if (rating <= 50) {
      return 'red-text';
    } else if (rating <= 75) {
      return 'orange-text';
    } else {
      return 'green-text';
    }
  };

  return (
    <article className='Card'>
      <figure className='Card-img-container'>
        <img
          className='Card-img'
          src={imgSrc}
          alt={`${item.title} thumbnail`}
        />
      </figure>
      <h2 className='Card-title'>{item.title}</h2>
      <section className='Card-info'>
        <p className='Card-price'>£{item.salePrice}</p>
        <p
          className={`Card-deal-rating ${getRatingClass(
            item.steamRatingPercent
          )}`}
        >
          {item.steamRatingCount === '0'
            ? 'Unrated on Steam'
            : item.steamRatingPercent}
        </p>
      </section>
      <Link to='/' className='Card-link'>
        Game Page
      </Link>
    </article>
  );
};

export default Card;
