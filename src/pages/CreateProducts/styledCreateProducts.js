import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  padding: 30px;
  background: #fff;
  border-radius: 4px;
  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
      background: #4682b4;
      color: #fff;
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      font-weight: bold;
      text-transform: uppercase;
      transition: background 0.2s;
      &:hover {
        background: ${darken(0.03, '#4682b4')};
      }
    }
  }
`;

export const Form = styled.form`
  width: 100%;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;

  .imageBlock {
    display: flex;
    justify-content: center;
  }
  .imageBlock img {
    width: 150px;
    height: 150px;
    border-radius: 4px;
  }

  input {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  button {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: flex;
    justify-content: center;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  button[type='submit'] {
    cursor: pointer;
    background: #4682b4;
    color: #fff;
  }

  button[type='submit']:hover {
    background: ${darken(0.03, '#4682b4')};
  }
`;
