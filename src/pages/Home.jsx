import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <label htmlFor="campo-de-busca'">
          <input
            type="text"
            id="campo-de-busca"
            name="search"
          />
        </label>
        <h3 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h3>
        <Link
          to="/ShoppingCart"
          data-testid="shopping-cart-button"
        >
          <img src="#" alt="carrinho" id="carrinho" />

        </Link>
      </div>
    );
  }
}

export default Home;
