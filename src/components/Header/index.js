import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { MdShoppingBasket } from 'react-icons/md';

import { Container, Cart } from './stylesHeader';

import logo from '../../assets/images/logoffff.png';

export default function Header() {
  const cartSize = useSelector((state) => state.cart.length);

  function showCartSize() {
    if (!cartSize) {
      return 'Nenhum item';
    }
    if (cartSize === 1) {
      return `${cartSize} item`;
    }
    return `${cartSize} itens`;
  }

  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Rocketshoes" height="200" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>{showCartSize()}</span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  );
}
