import React, { Component } from 'react';
import CartCard from '../components/CartCard';
import { deleteItem, loadCart, removeCart, saveCart } from '../services/localStorage';

class ShoppingCart extends Component {
  state = {
    productList: [],
    // increaseHandleChange: this.increaseHandleChange
  };

  componentDidMount() {
    this.handleLoad();
  }

  handleLoad = () => {
    const productList = loadCart();
    this.setState({ productList });
  };

  increaseHandleChange = ({ target }) => {
    const { productList } = this.state;
    const obj = productList.find((item) => item.title === target.name);
    saveCart(obj);
    this.handleLoad();
  };

  decreaseHandleChange = ({ target }) => {
    const { productList } = this.state;
    const obj = productList.find((item) => item.title === target.name);
    removeCart(obj);
    this.handleLoad();
  };

  removeHandleChange = ({ target }) => {
    const { productList } = this.state;
    const obj = productList.find((item) => item.title === target.name);
    deleteItem(obj);
    this.handleLoad();
  };

  render() {
    const { productList } = this.state;
    return (
      <div>
        {productList.length < 1 && (
          <h2
            data-testid="shopping-cart-empty-message"
          >
            Seu carrinho está vazio
          </h2>)}
        {productList.length > 0 && productList.map((item) => (
          <CartCard
            key={ item.title }
            title={ item.title }
            price={ item.price }
            quantidade={ item.quantidade }
            increaseHandleChange={ this.increaseHandleChange }
            decreaseHandleChange={ this.decreaseHandleChange }
            removeHandleChange={ this.removeHandleChange }
          />
        )) }
      </div>
    );
  }
}

export default ShoppingCart;
