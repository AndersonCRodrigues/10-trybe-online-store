import React, { Component } from 'react';
import Props from 'prop-types';

export default class ProductCard extends Component {
  render() {
    const { title, thumbnail, price } = this.props;
    return (
      <div data-testid="product">
        <h3>{title}</h3>
        <img src={ thumbnail } alt={ title } />
        <p>{`R$ ${price}`}</p>
      </div>
    );
  }
}

ProductCard.propTypes = {
  title: Props.string,
  thumbnail: Props.string,
  price: Props.number,
}.isRequired;
