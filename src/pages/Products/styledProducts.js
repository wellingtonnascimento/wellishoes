import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  padding: 30px;
  background: #fff;
  border-radius: 4px;
`;

export const ProductTable = styled.table`
  width: 100%;
  thead th {
    color: #999;
    text-align: center;
    padding: 12px;
  }
  tbody td {
    padding: 12px;
    text-align: center;
    border-bottom: 1px solid #eee;
  }
  img {
    height: 100px;
  }
  strong {
    color: #333;
  }
  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }
  div {
    display: flex;
    align-items: center;
    span {
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #666;
      text-align: center;
      flex: 1;
      padding: 6px;
      width: 30px;
    }
  }
  button {
    background: none;
    border: 0;
    padding: 6px;
  }
`;
