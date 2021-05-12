import { Link } from 'react-router-dom';

import editImgSrc from '../services/editImgSrc';

import Rating from './Rating';

import '../styles/Card.css';

type Props = {
  item: {
    title: string;
    dealID: string;
    salePrice: string;
    steamRatingCount: string;
    steamRatingPercent: string;
    thumb: string;
  };
};

const Card = ({ item }: Props) => {
  const imgSrc: string = editImgSrc(item.thumb);

  return (
    <Link to={`/shopping-cart/shop/${item.dealID}`} className="Card-link">
      <article className="Card">
        <figure className="Card-img-container">
          <img
            className="Card-img"
            src={imgSrc}
            alt={`${item.title} thumbnail`}
          />
        </figure>
        <h2 className="Card-title">{item.title}</h2>
        <section className="Card-info">
          <p className="Card-price">£{item.salePrice}</p>
          <Rating
            count={Number(item.steamRatingCount)}
            rating={Number(item.steamRatingPercent)}
          />
        </section>
      </article>
    </Link>
  );
};

export default Card;
