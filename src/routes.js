import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';
import Products from './pages/Products';
import CreateProducts from './pages/CreateProducts';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cart" component={Cart} />
      <Route path="/products" component={Products} />
      <Route path="/createproducts" component={CreateProducts} />
    </Switch>
  );
}
