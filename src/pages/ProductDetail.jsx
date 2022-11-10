import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { getProductById } from '../services/api';
import CartButton from '../components/CartButton';
import { saveCart } from '../services/localStorage';

class ProductDetail extends Component {
  state = {
    product: {},
  };

  async componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    const product = await getProductById(id);
    this.setState({ product });
  }

  addToCart = () => {
    const { product } = this.state;
    saveCart(product);
  };

  render() {
    const { product } = this.state;
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
          onClick={ this.addToCart }
          name={ product.title }
        >
          Adicionar ao Carrinho

        </button>
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
