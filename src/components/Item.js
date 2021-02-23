import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import editImgSrc from '../controllers/editImgSrc';

import Rating from './Rating';

import '../styles/Item.css';

const Item = ({ basket, setBasket }) => {
	const [item, setItem] = useState({});
	const [qty, setQty] = useState(1);
	const { dealID } = useParams();

	const getItem = async () => {
		const response = await fetch(
			`https://www.cheapshark.com/api/1.0/deals?id=${dealID}`
		);
		const data = await response.json();
		setItem(data);
		console.log(data);
	};

	useEffect(() => {
		getItem();
	}, []);

	const handleChange = (e) => {
		if (typeof e.target.value === 'string') {
			setQty(parseInt(e.target.value));
		} else {
			setQty(e.target.value);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		let itemsToAdd = [];
		for (let i = qty; i > 0; i--) {
			itemsToAdd.push({
				name: item.gameInfo.name,
				img: editImgSrc(item.gameInfo.thumb),
				price: item.gameInfo.salePrice,
				id: uuidv4(),
			});
		}
		setBasket([...basket, ...itemsToAdd]);
		console.log(basket);
		setQty(1);
	};

	const handleIncrement = () => {
		setQty(qty + 1);
	};

	const handleDecrement = () => {
		setQty(qty - 1);
	};

	return (
		<article className='Item'>
			{item.gameInfo && (
				<>
					<h1 className='Item-title'>{item.gameInfo.name}</h1>
					<img
						className='Item-img'
						src={editImgSrc(item.gameInfo.thumb)}
						alt={`${item.gameInfo.name} thumbnail`}
					/>
					<section className='Item-info'>
						<section className='Item-prices'>
							<p className='Item-sale'>£{item.gameInfo.salePrice}</p>
							<p className='Item-retail'>£{item.gameInfo.retailPrice}</p>
						</section>
						<section className='Item-rating'>
							<Rating
								count={item.gameInfo.steamRatingCount}
								rating={item.gameInfo.steamRatingPercent}
							/>
							{item.gameInfo.steamRatingText && (
								<p className='Item-review-info'>
									{item.gameInfo.steamRatingText}
								</p>
							)}
							{item.gameInfo.steamRatingCount > 0 && (
								<p className='Item-review-info'>
									{item.gameInfo.steamRatingCount} reviews
								</p>
							)}
						</section>
					</section>
				</>
			)}
			<form onSubmit={handleSubmit}>
				<p>Add to cart</p>
				<section className='Item-input-container'>
					<label htmlFor='qty'>Quantity:</label>
					<section className='Item-inputs'>
						<button
							type='button'
							className='Item-button'
							onClick={handleIncrement}
						>
							<i className='fas fa-caret-up'></i>
						</button>
						<input
							className='Item-input'
							id='qty'
							onChange={handleChange}
							type='number'
							min='1'
							value={qty}
						/>
						<button
							type='button'
							className='Item-button'
							onClick={handleDecrement}
						>
							<i className='fas fa-caret-down'></i>
						</button>
					</section>
				</section>
				<button type='submit' className='Item-add-to-cart'>
					<i className='fas fa-cart-plus'></i>
				</button>
			</form>
		</article>
	);
};

export default Item;
