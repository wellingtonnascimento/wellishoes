import React, { useState, useEffect } from 'react';
import { MdDelete } from 'react-icons/md';

import { Container, ProductTable } from './styledProducts';
import api from '../../services/api';

import { formatPrice } from '../../util/format';

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const { data } = await api.get('products');
      setProducts(data);
    }

    loadProducts();
  }, [setProducts]);

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th>Imagem</th>
            <th>Title</th>
            <th>Quantidade</th>
            <th>Valor</th>
            <th>Remover</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <img src={product.image} alt={product.title} />
              </td>
              <td>
                <strong>{product.title}</strong>
              </td>
              <td>
                <span>{product.quantity} </span>
              </td>
              <td>
                <span>{formatPrice(product.price)}</span>
              </td>
              <td>
                <button>
                  <MdDelete size={20} color="#7159c1" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>
    </Container>
  );
}
