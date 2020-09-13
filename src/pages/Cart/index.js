import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { formatPrice } from '../../util/format';

import * as CartActions from '../../store/modules/cart/actions';

import { Container, ProductTable, Total } from './styledCart.js';

export default function Cart() {
  const { cart, total } = useSelector((state) => ({
    cart: state.cart.map((product) => ({
      ...product,
      subtotal: product.price * product.amount,
    })),
    total: state.cart.reduce(
      (total, product) => total + product.price * product.amount,
      0,
    ),
  }));

  const dispatch = useDispatch();

  function increment(product) {
    dispatch(CartActions.updateAmount(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmount(product.id, product.amount - 1));
  }
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th colSpan={2}>Produto</th>
            <th>Quantidade</th>
            <th>Sub Total</th>
            <th>Remover</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => (
            <tr key={product.id}>
              <td>
                <img src={product.image} alt={product.title} />
              </td>
              <td>
                <strong>{product.title}</strong>
                <span>{product.priceFormatted} </span>
              </td>
              <td>
                <div>
                  <button type="button" onClick={() => decrement(product)}>
                    <MdRemoveCircleOutline size={20} color="#4682b4" />
                  </button>
                  <span>{product.amount}</span>
                  <button type="button" onClick={() => increment(product)}>
                    <MdAddCircleOutline size={20} color="#4682b4" />
                  </button>
                </div>
              </td>
              <td>
                <strong>{formatPrice(product.subtotal)}</strong>
              </td>
              <td>
                <button
                  type="button"
                  onClick={() =>
                    dispatch(CartActions.removeFromCart(product.id))
                  }
                >
                  <MdDelete size={20} color="#4682b4" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>{formatPrice(total)}</strong>
        </Total>
      </footer>
    </Container>
  );
}
