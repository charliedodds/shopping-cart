import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Shop from './Shop';
import Navbar from './Navbar';

const ShopApp = () => {
  return (
    <main className='ShopApp'>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/shop' component={Shop} />
      </Switch>
    </main>
  );
};

export default ShopApp;
