import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { MdShoppingBasket, MdViewList, MdCreate } from 'react-icons/md';

import { formatPrice } from '../../util/format';
import {
  Container,
  Cart,
  Dropdown,
  Products,
  CreateProducts,
} from './stylesHeader';

import logo from '../../assets/images/logoffff.png';

export default function Header() {
  const location = useLocation();

  const { cart, total, cartSize } = useSelector((state) => ({
    cartSize: state.cart.length,
    cart: state.cart.slice(0, 3).map((product) => ({
      ...product,
      price: formatPrice(product.price),
    })),
    total: formatPrice(
      state.cart.reduce((total, product) => {
        return total + product.price * product.amount;
      }, 0),
    ),
  }));

  function showCartSize() {
    if (!cartSize) {
      return '';
    }
    if (cartSize === 1) {
      return `${cartSize} item`;
    }
    return `${cartSize} itens`;
  }

  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="WelliShoes" height="200" />
      </Link>

      <CreateProducts to="/createproducts">
        <strong>Cria Produto</strong>
        <div>
          <MdCreate size={30} color="#FFF" />
        </div>
      </CreateProducts>

      <Products to="/products">
        <strong>Meus Produtos</strong>
        <div>
          <MdViewList size={30} color="#FFF" />
        </div>
      </Products>

      <Cart to="/cart">
        <strong>Meu carrinho</strong>
        <div>
          <MdShoppingBasket size={36} color="#FFF" />
          <span>{showCartSize()}</span>
        </div>

        {!!cart.length && location.pathname !== '/cart' && (
          <Dropdown id="ca">
            {cart.map((product) => (
              <div>
                <img src={product.image} alt={product.title} />
                <div className="title">
                  {product.title}
                  <p>
                    {product.amount} x <span>{product.price}</span>
                  </p>
                </div>
              </div>
            ))}
            {cartSize > 3 && <div className="more">...</div>}
            <h2>
              <span>TOTAL:</span>
              <span>{total}</span>
            </h2>
          </Dropdown>
        )}
      </Cart>
    </Container>
  );
}
