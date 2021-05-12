import '../styles/Checkout.css';

type BasketItem = {
  price: number;
  id: string;
  name: string;
  img: string;
};

type Props = {
  basket: BasketItem[];
  setBasket: any;
};

const Checkout = ({ basket, setBasket }: Props) => {
  let prices: number[] | undefined;

  const getPrices = (basket: BasketItem[]): void => {
    if (basket) {
      prices = basket.map((item) => item.price);
    }
  };

  getPrices(basket);

  const handleClick = (e: any): void => {
    const id: string = e.target.closest('article').id;
    setBasket(basket.filter((item) => item.id !== id));
  };

  return (
    <section className="Checkout">
      <h1>Checkout</h1>

      {basket.length === 0 && (
        <p className="Checkout-empty">
          Add items to your basket to see them here!
        </p>
      )}
      <section className="Checkout-items">
        {basket &&
          basket.map((item) => (
            <article key={item.id} id={item.id} className="Checkout-item">
              <section className="Checkout-info">
                <h2 className="Checkout-title">{item.name}</h2>
                <section className="Checkout-container">
                  <p className="Checkout-price">£{item.price}</p>
                  <button onClick={handleClick}>
                    <i className="far fa-trash-alt"></i>
                  </button>
                </section>
              </section>
              <figure className="Checkout-img-container">
                <img className="Checkout-img" src={item.img} alt={item.name} />
              </figure>
            </article>
          ))}
      </section>
      <section className="total">
        <p>
          Total: £
          {prices &&
            prices
              .reduce((acc, next) => {
                acc = Number(acc);
                next = Number(next);
                return (acc += next);
              }, 0)
              .toFixed(2)}
        </p>
      </section>
    </section>
  );
};

export default Checkout;
