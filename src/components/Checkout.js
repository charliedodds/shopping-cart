import '../styles/Checkout.css';

const Checkout = ({ basket }) => {
	let prices;
	const getPrices = (basket) => {
		if (basket) {
			prices = basket.map((item) => item.price);
		}
	};

	getPrices(basket);

	console.log(prices);

	console.log(basket);
	return (
		<section className='Checkout'>
			<h1>Checkout</h1>
			{basket &&
				basket.map((item) => (
					<article key={item.name} className='Checkout-item'>
						<section className='Checkout-info'>
							<h2 className='Checkout-title'>{item.name}</h2>
							<p className='Checkout-price'>£{item.price}</p>
						</section>
						<figure className='Checkout-img-container'>
							<img className='Checkout-img' src={item.img} alt={item.name} />
						</figure>
					</article>
				))}
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
