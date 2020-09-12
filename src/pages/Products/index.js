import React from 'react';
import { MdDelete } from 'react-icons/md';

import { Container, ProductTable } from './styledProducts';

export default function Products() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>Produto</th>
            <th>Title</th>
            <th>Quantidade</th>
            <th>Valor</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/26/HZM-1731-026/HZM-1731-026_zoom2.jpg?ts=1571078789&ims=326x"
                alt="Tenis"
              />
            </td>
            <td>
              <strong>Tenis muito massa</strong>
            </td>
            <td>
              <span> 10 UN </span>
            </td>
            <td>
              <strong>R$ 458</strong>
            </td>
            <td>
              <button>
                <MdDelete size={20} color="#7159c1" />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>
    </Container>
  );
}
