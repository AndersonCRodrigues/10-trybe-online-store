import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductById } from '../services/api';
import CartButton from '../components/CartButton';
import { saveCart } from '../services/localStorage';

class ProductDetail extends Component {
  state = {
    product: {},
    responseSearch: [],
  };

  async componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    const product = await getProductById(id);
    this.setState({ product });
  }

  addToCart = ({ target }) => {
    const { id } = target;
    const { responseSearch } = this.state;
    const obj = responseSearch.find((item) => item.title === id);
    saveCart(obj);
  };

  render() {
    const { product } = this.state;
    // console.log(product);
    const { title } = this.props;
    return (
      <div>
        <CartButton />
        <span data-testid="product-detail-name">{product.title}</span>
        <span data-testid="product-detail-price">{product.price}</span>
        <img
          src={ product.thumbnail }
          alt={ product.title }
          data-testid="product-detail-image"
        />
        {/* <ul>
          {
            product.attributes.map((item) => (
              <li key={ item.id }>
                <p>{`${item.name}:`}</p>
              </li>
            ))
          }
        </ul> */}
        <button
          data-testid="product-detail-add-to-cart"
          type="button"
          onClick={ () => this.addToCart(product) }
          name={ title }
        >
          Adicionar ao Carrinho

        </button>
        <Link
          data-testid="shopping-cart-button"
          to="/shoppingcart"
        >
          Ir para o carrinho
        </Link>
      </div>
    );
  }
}

ProductDetail.propTypes = {
  match: Proptypes.shape({
    params: Proptypes.shape({
      id: Proptypes.string,
    }),
  }),
}.isRequired;

export default ProductDetail;
