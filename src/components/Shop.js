import { useState, useEffect } from 'react';

import Card from './Card';

const Shop = () => {
  const [items, setItems] = useState([]);

  const getItems = async () => {
    const data = await fetch(
      'https://www.cheapshark.com/api/1.0/deals?storeID=1&pageSize=10'
    );
    const response = await data.json();
    setItems(response);
    console.log(items);
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <section className='Shop'>
      <h1>Steam games on sale</h1>
      {items &&
        items.map((item) => <Card key={item.internalName} item={item} />)}
    </section>
  );
};

export default Shop;
