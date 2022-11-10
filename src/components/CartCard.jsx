import React, { Component } from 'react';
import Props from 'prop-types';

export default class CartCard extends Component {
  render() {
    const { title, price, quantidade, increaseHandleChange,
      decreaseHandleChange, removeHandleChange } = this.props;
    return (
      <div>
        <p data-testid="shopping-cart-product-name">{title}</p>
        <p>{`R$ ${price}`}</p>
        <p data-testid="shopping-cart-product-quantity">{`QTD: ${quantidade}`}</p>
        <button
          name={ title }
          type="button"
          data-testid="product-increase-quantity"
          onClick={ increaseHandleChange }
        >
          +
        </button>
        <button
          name={ title }
          type="button"
          data-testid="product-decrease-quantity"
          onClick={ decreaseHandleChange }
        >
          -
        </button>
        <button
          name={ title }
          type="button"
          data-testid="remove-product"
          onClick={ removeHandleChange }
        >
          X
        </button>
      </div>
    );
  }
}

CartCard.propTypes = {
  title: Props.string,
  price: Props.string,
  quantidade: Props.string,
  removeHandleChange: Props.func,
  decreaseHandleChange: Props.func,
  increaseHandleChange: Props.func,
}.isRequired;
