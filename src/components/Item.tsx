import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import IItem from '../interfaces/IItem';

import editImgSrc from '../services/editImgSrc';

import Rating from './Rating';

import '../styles/Item.css';

type Props = {
  basket: object[];
  setBasket: any;
};

const Item = ({ basket, setBasket }: Props) => {
  // item will match IItem interface or be undefined
  const [item, setItem] = useState<IItem | undefined>(undefined);
  const [qty, setQty] = useState<number>(1);
  // <{prop?: type}> => tell TS what param I want and what it will be
  const { dealID } = useParams<{ dealID?: string }>();

  const getItem = async () => {
    const response: Response = await fetch(
      `https://www.cheapshark.com/api/1.0/deals?id=${dealID}`
    );
    const data: IItem = await response.json();
    setItem(data);
  };

  useEffect(() => {
    getItem();
  }, []);

  const handleChange = (e: { target: HTMLInputElement }): void => {
    if (typeof e.target.value === 'string') {
      setQty(parseInt(e.target.value));
    } else {
      setQty(e.target.value);
    }
  };

  const handleSubmit = (e: any): void => {
    e.preventDefault();
    let itemsToAdd = [];
    for (let i = qty; i > 0; i--) {
      itemsToAdd.push({
        name: item?.gameInfo.name,
        img: item?.gameInfo.thumb ? editImgSrc(item?.gameInfo.thumb) : '',
        price: item?.gameInfo.salePrice,
        id: uuidv4(),
      });
    }
    setBasket([...basket, ...itemsToAdd]);
    setQty(1);
  };

  const handleIncrement = (): void => {
    setQty(qty + 1);
  };

  const handleDecrement = (): void => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };

  return (
    <article className="Item">
      {item?.gameInfo && (
        <>
          <h1 className="Item-title">{item?.gameInfo.name}</h1>
          <img
            className="Item-img"
            src={editImgSrc(item?.gameInfo.thumb)}
            alt={`${item?.gameInfo.name} thumbnail`}
          />
          <section className="Item-info">
            <section className="Item-prices">
              <p className="Item-sale">£{item?.gameInfo.salePrice}</p>
              <p className="Item-retail">£{item?.gameInfo.retailPrice}</p>
            </section>
            <section className="Item-rating">
              <Rating
                count={Number(item?.gameInfo.steamRatingCount)}
                rating={Number(item?.gameInfo.steamRatingPercent)}
              />
              {item?.gameInfo.steamRatingText && (
                <p className="Item-review-info">
                  {item?.gameInfo.steamRatingText}
                </p>
              )}
              {Number(item?.gameInfo.steamRatingCount) > 0 && (
                <p className="Item-review-info">
                  {item?.gameInfo.steamRatingCount} reviews
                </p>
              )}
            </section>
          </section>
        </>
      )}
      <form onSubmit={handleSubmit}>
        <p>Add to cart</p>
        <section className="Item-input-container">
          <label htmlFor="qty">Quantity:</label>
          <section className="Item-inputs">
            <button
              type="button"
              className="Item-button"
              onClick={handleIncrement}
            >
              <i className="fas fa-caret-up"></i>
            </button>
            <input
              className="Item-input"
              id="qty"
              onChange={handleChange}
              type="number"
              min="1"
              value={qty}
            />
            <button
              type="button"
              className="Item-button"
              onClick={handleDecrement}
            >
              <i className="fas fa-caret-down"></i>
            </button>
          </section>
        </section>
        <button type="submit" className="Item-add-to-cart">
          <i className="fas fa-cart-plus"></i>
        </button>
      </form>
    </article>
  );
};

export default Item;
