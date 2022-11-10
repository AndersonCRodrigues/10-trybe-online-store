import React, { Component } from 'react';
import Props from 'prop-types';
import { Link } from 'react-router-dom';

export default class ProductCard extends Component {
  render() {
    const { title, thumbnail, price, id, handleAddToCart } = this.props;
    return (
      <div data-testid="product">
        <Link to={ `/product/${id}` } data-testid="product-detail-link">
          <h3>{title}</h3>
          <img src={ thumbnail } alt={ title } />
          <p>{`R$ ${price}`}</p>
        </Link>
        <button
          data-testid="product-add-to-cart"
          type="button"
          id={ title }
          onClick={ handleAddToCart }
        >
          Adicionar ao Carrinho

        </button>
      </div>
    );
  }
}

ProductCard.propTypes = {
  title: Props.string,
  thumbnail: Props.string,
  price: Props.number,
  id: Props.string,
  handleAddToCart: Props.func,
}.isRequired;
