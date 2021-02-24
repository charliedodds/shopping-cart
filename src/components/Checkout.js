import '../styles/Checkout.css';

const Checkout = ({ basket, setBasket }) => {
	let prices;
	const getPrices = (basket) => {
		if (basket) {
			prices = basket.map((item) => item.price);
		}
	};

	getPrices(basket);

	const handleClick = (e) => {
		const id = e.target.closest('article').id;
		setBasket(basket.filter((item) => item.id !== id));
	};

	return (
		<section className='Checkout'>
			<h1>Checkout</h1>

			{basket.length === 0 && (
				<p className='Checkout-empty'>
					Add items to your basket to see them here!
				</p>
			)}
			<section className='Checkout-items'>
				{basket &&
					basket.map((item) => (
						<article key={item.id} id={item.id} className='Checkout-item'>
							<section className='Checkout-info'>
								<h2 className='Checkout-title'>{item.name}</h2>
								<section className='Checkout-container'>
									<p className='Checkout-price'>£{item.price}</p>
									<button onClick={handleClick}>
										<i className='far fa-trash-alt'></i>
									</button>
								</section>
							</section>
							<figure className='Checkout-img-container'>
								<img className='Checkout-img' src={item.img} alt={item.name} />
							</figure>
						</article>
					))}
			</section>
			<section className='total'>
				<p>
					Total: £
					{prices &&
						prices
							.reduce((acc, next) => {
								acc = parseFloat(acc);
								next = parseFloat(next);
								return (acc += next);
							}, 0)
							.toFixed(2)}
				</p>
			</section>
		</section>
	);
};

export default Checkout;
