import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import carrinho from '../image/carrinho.png';

class CartButton extends Component {
  render() {
    return (
      <Link
        to="/ShoppingCart"
        data-testid="shopping-cart-button"
      >
        <img src={ carrinho } alt="carrinho" id="carrinho" />

      </Link>
    );
  }
}

export default CartButton;
