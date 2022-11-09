import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';
import carrinho from '../image/carrinho.png';

class Home extends Component {
  state = {
    categories: [],
  };

  async componentDidMount() {
    const categories = await api.getCategories();
    this.setState({ categories });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <label htmlFor="campo-de-busca'">
          <input
            type="text"
            id="campo-de-busca"
            name="search"
          />
        </label>
        <Link
          to="/ShoppingCart"
          data-testid="shopping-cart-button"
        >
          <img src={ carrinho } alt="carrinho" id="carrinho" />

        </Link>

        <h3 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h3>
        <aside>
          {
            categories.map((category) => (

              <button
                key={ category.id }
                data-testid="category"
                type="button"
                id={ category.id }
                name={ category.name }
              >
                {category.name}

              </button>

            ))
          }
        </aside>
      </div>
    );
  }
}

export default Home;
