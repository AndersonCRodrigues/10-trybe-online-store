import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import * as api from '../services/api';
import ProductCard from '../components/ProductCard';
import CartButton from '../components/CartButton';
import { saveCart } from '../services/localStorage';

class Home extends Component {
  state = {
    categories: [],
    search: '',
    responseSearch: [],
  };

  async componentDidMount() {
    const categories = await api.getCategories();
    this.setState({ categories });
  }

  handleChange = ({ target }) => {
    const { value } = target;
    this.setState({ search: value });
  };

  handleClick = async () => {
    const { search } = this.state;
    if (search.length > 0) {
      const response = await api.getProductsFromCategoryAndQuery(null, search);
      this.setState({ responseSearch: response.results });
    }
  };

  handleSearchClick = async ({ target }) => {
    const { id } = target;
    const response = await api.getProductsFromCategoryAndQuery(id, null);
    this.setState({ responseSearch: response.results });
  };

  handleAddToCart = ({ target }) => {
    const { id } = target;
    const { responseSearch } = this.state;
    const obj = responseSearch.find((item) => item.title === id);
    saveCart(obj);
  };

  render() {
    const { categories, search, responseSearch } = this.state;
    return (
      <div>
        <label htmlFor="campo-de-busca'">
          <input
            data-testid="query-input"
            type="text"
            id="campo-de-busca"
            name="search"
            value={ search }
            onChange={ this.handleChange }
          />
        </label>
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.handleClick }
        >
          Pesquisar

        </button>
        <CartButton />

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
                onClick={ this.handleSearchClick }
              >
                {category.name}

              </button>

            ))
          }
        </aside>
        <section>
          {responseSearch.length === 0 ? <p>Nenhum produto foi encontrado</p> : (
            responseSearch.map((product) => (<ProductCard
              key={ product.id }
              id={ product.id }
              title={ product.title }
              thumbnail={ product.thumbnail }
              price={ product.price }
              handleAddToCart={ this.handleAddToCart }
            />))
          ) }
        </section>
      </div>
    );
  }
}

export default Home;
