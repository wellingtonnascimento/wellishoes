import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector, connect } from 'react-redux';

import { MdAddShoppingCart } from 'react-icons/md';
import { formatPrice } from '../../util/format';
import api from '../../services/api';

import * as CartActions from '../../store/modules/cart/actions';
import { ProductList } from './styledHome';

export default function Home() {
  const [products, setProducts] = useState([]);

  const amount = useSelector((state) =>
    state.cart.reduce(
      (currentAmount, product) => ({
        ...currentAmount,
        [product.id]: product.amount,
      }),
      {},
    ),
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      const { data } = await api.get('products');

      setProducts(data);
    }

    loadProducts();
  }, [setProducts]);

  const handleAddProduct = (product) => {
    dispatch(CartActions.addToCart(product));
  };

  return (
    <ProductList>
      {products.map((product) => (
        <li key={product.id}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>{formatPrice(product.price)}</span>
          <button type="button" onClick={() => handleAddProduct(product)}>
            <div>
              <MdAddShoppingCart size={16} color="#FFF" />{' '}
              {amount[product.id] || 0}
            </div>

            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
}
