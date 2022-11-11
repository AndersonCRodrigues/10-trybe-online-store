import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { getProductById } from '../services/api';
import CartButton from '../components/CartButton';
import { addComents, loadComents, saveCart } from '../services/localStorage';

const NUMBER = 5;

class ProductDetail extends Component {
  state = {
    product: {},
    coments: [],
    raido: Array(NUMBER).fill(1),
    email: '',
    rate: '',
    evaluation: '',
    productId: '',
    isValid: true,
  };

  async componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    const product = await getProductById(id);
    this.handleLoadComents(id);
    this.setState({ product, productId: id });
  }

  handleLoadComents = (id) => {
    const coments = loadComents(id);
    this.setState({ coments });
  };

  addToCart = () => {
    const { product } = this.state;
    saveCart(product);
  };

  handleChange = ({ target }) => {
    const { value, name } = target;
    target.checked = true;
    this.setState({ [name]: value });
  };

  handlevalidation = () => {
    const { email, rate } = this.state;
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.([a-z]+)?$/i;
    const emailValid = emailRegex.test(email);
    const isValid = emailValid && rate.length > 0;
    this.setState({ isValid });
    return isValid;
  };

  handleClick = (e) => {
    e.preventDefault();
    const valid = this.handlevalidation();
    if (valid) {
      const { email, rate, evaluation, productId } = this.state;
      const obj = {
        email,
        rate,
        evaluation,
      };
      this.setState({ email: '', rate: '', evaluation: '' });
      addComents(productId, obj);
      this.handleLoadComents(productId);
    }
  };

  render() {
    const { product, coments, raido, rate, email, evaluation, isValid } = this.state;
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
        <section>
          <form>
            <label htmlFor="email">
              E-mail:
              <input
                type="email"
                name="email"
                id="email"
                value={ email }
                data-testid="product-detail-email"
                placeholder="digite seu email"
                onChange={ this.handleChange }
              />
            </label>
            {raido.map((num, index) => (
              <label key={ rate + index } htmlFor={ index + 1 }>
                {index + num}
                <input
                  data-testid={ `${index + 1}-rating` }
                  type="radio"
                  name="rate"
                  id={ index + num }
                  value={ index + num }
                  onChange={ this.handleChange }
                />
              </label>
            ))}
            <label htmlFor="evaluation">
              <textarea
                data-testid="product-detail-evaluation"
                name="evaluation"
                id="evaluation"
                value={ evaluation }
                cols="30"
                rows="10"
                placeholder="adicione um comentário"
                onChange={ this.handleChange }
              />
            </label>
            {isValid || (<p data-testid="error-msg">Campos inválidos</p>)}
            <button
              type="submit"
              data-testid="submit-review-btn"
              onClick={ this.handleClick }
            >
              Adicionar Comentáro

            </button>
          </form>

        </section>
        <section>
          {coments.length > 0 && coments.map((coment, index) => (
            <div key={ coment.email + index }>
              <span data-testid="review-card-email">{coment.email}</span>
              <span data-testid="review-card-rating">
                {' '}
                {coment.rate}
              </span>
              <p data-testid="review-card-evaluation">{coment.evaluation}</p>
            </div>
          ))}
        </section>
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
