import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import ShoppingCart from './pages/ShoppingCart';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route exact path="/shoppingcart" component={ ShoppingCart } />
      <Route exact path="/product/:id" component={ ProductDetail } />
    </Switch>
  );
}

export default App;
