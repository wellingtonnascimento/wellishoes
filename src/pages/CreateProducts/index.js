import React from 'react';
import { Container, Form } from './styledCreateProducts';

export default function CreateProducts() {
  return (
    <Container>
      <Form>
        <label for="img">Imagem Produto</label>
        <input id="img"></input>

        <label for="title">Titulo</label>
        <input type="text" id="title" name="title" placeholder="Titulo.." />

        <label for="value">Valor</label>
        <input type="text" id="value" name="value" placeholder="Valor" />

        <label for="quantity">Quantidade</label>
        <input
          type="text"
          id="quantity"
          name="quantity"
          placeholder="Quantidade"
        />

        <input type="submit" value="Submit" />
      </Form>
    </Container>
  );
}
