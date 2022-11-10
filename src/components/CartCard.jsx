import React, { Component } from 'react';
import Props from 'prop-types';

export default class CartCard extends Component {
  render() {
    const { title, price, quantidade } = this.props;
    return (
      <div>
        <p data-testid="shopping-cart-product-name">{title}</p>
        <p>{`R$ ${price}`}</p>
        <p data-testid="shopping-cart-product-quantity">{`QTD: ${quantidade}`}</p>
      </div>
    );
  }
}

CartCard.propTypes = {
  title: Props.string,
  price: Props.string,
  quantidade: Props.string,
}.isRequired;
