import { useState } from 'react';

import { Switch, Route } from 'react-router-dom';

import Navbar from './Navbar';
import Home from './Home';
import Shop from './Shop';
import Item from './Item';

const ShopApp = () => {
  const [basket, setBasket] = useState([]);
  return (
    <main className='ShopApp'>
      <Navbar numItems={basket.length} />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/shop' component={Shop} />
        <Route exact path='/shop/:dealID'>
          <Item basket={basket} setBasket={setBasket} />
        </Route>
      </Switch>
    </main>
  );
};

export default ShopApp;
