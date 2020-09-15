import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Container, Form } from './styledCreateProducts';
import api from '../../services/api';

import Loading from '../../components/Loading';

export default function CreateProducts() {
  const imageInputRef = useRef(null);
  const [imageBase64, setImageBase64] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    function onImageChange(event) {
      const reader = new FileReader();

      const file = event.target.files[0];

      reader.onload = function () {
        setImageBase64(reader.result);
      };

      if (file) {
        reader.readAsDataURL(file);
      }
    }

    imageInputRef.current.addEventListener &&
      imageInputRef.current.addEventListener('change', onImageChange);
  }, [setImageBase64]);

  const handleSubmit = useCallback(async (e) => {
    if (isLoading) return;
    e.persist();
    e.preventDefault();
    setIsLoading(true);
    const fields = [...e.target.elements].reduce((fields, input) => {
      if (input.type === 'submit') {
        return fields;
      }

      return { ...fields, [input.name]: input.value };
    }, {});

    const { data } = await api.post('products', {
      ...fields,
      image: imageBase64,
    });
    setIsLoading(false);
    debugger;
    e.target.reset();
  });

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <div className="imageBlock">
          <img src={imageBase64} />
        </div>
        <label htmlFor="img">Imagem Produto</label>
        <input type="file" id="image" name="image" ref={imageInputRef} />

        <label htmlFor="title">Titulo</label>
        <input type="text" placeholder="Titulo.." name="title" />

        <label htmlFor="value">Valor</label>
        <input type="text" placeholder="Valor" name="price" />

        <label htmlFor="quantity">Quantidade</label>
        <input type="text" placeholder="Quantidade" name="quantity" />

        <button type="submit" value="Submit">
          {isLoading ? <Loading /> : 'Salvar'}
        </button>
      </Form>
    </Container>
  );
}
