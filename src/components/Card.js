import { Link } from 'react-router-dom';

import editImgSrc from '../controllers/editImgSrc';

import Rating from './Rating';

import '../styles/Card.css';

const Card = ({ item }) => {
	const imgSrc = editImgSrc(item.thumb);

	return (
		<Link to={`/shopping-cart/shop/${item.dealID}`} className='Card-link'>
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
					<Rating
						count={item.steamRatingCount}
						rating={item.steamRatingPercent}
					/>
				</section>
			</article>
		</Link>
	);
};

export default Card;
