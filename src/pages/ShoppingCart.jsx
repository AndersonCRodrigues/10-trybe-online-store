import React, { Component } from 'react';
import CartCard from '../components/CartCard';
import { loadCart } from '../services/localStorage';

class ShoppingCart extends Component {
  state = {
    productList: [],
  };

  componentDidMount() {
    const productList = loadCart();
    this.setState({ productList });
  }

  render() {
    const { productList } = this.state;
    return (
      <div>
        {productList.length < 1 && (
          <h2
            data-testid="shopping-cart-empty-message"
          >
            Seu carrinho está vazio
          </h2>)}
        {productList.length > 0 && productList.map((item) => (<CartCard
          key={ item.title }
          title={ item.title }
          price={ item.price }
          quantidade={ item.quantidade }
        />)) }
      </div>
    );
  }
}

export default ShoppingCart;
