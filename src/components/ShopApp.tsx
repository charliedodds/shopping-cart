import { useState } from 'react';

import { Switch, Route } from 'react-router-dom';

import Navbar from './Navbar';
import Home from './Home';
import Shop from './Shop';
import Item from './Item';
import Checkout from './Checkout';

const ShopApp = () => {
  const [basket, setBasket] = useState([]);
  return (
    <main className="ShopApp">
      <Navbar numItems={basket.length} />
      <Switch>
        <Route exact path="/shopping-cart/" component={Home} />
        <Route exact path="/shopping-cart/shop" component={Shop} />
        <Route exact path="/shopping-cart/shop/:dealID">
          <Item basket={basket} setBasket={setBasket} />
        </Route>
        <Route exact path="/shopping-cart/checkout">
          <Checkout basket={basket} setBasket={setBasket} />
        </Route>
      </Switch>
    </main>
  );
};

export default ShopApp;
