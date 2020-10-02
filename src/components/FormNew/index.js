import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers';

import schema from './validation'
import Field from "./../Field";
import Form from "./../Form";
import Button from '../Button/index';

const FormNew = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  });


  const newUser = (data) => {
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(newUser)}>
      <Field.Text label="Nome" name="name" type="text" register={register} />
      <p>{errors.name?.message}</p>
      <Field.Text label="Email" name="email" type="email" register={register} />
      <p>{errors.email?.message}</p>
      <Field.Text label="Endereco" name="endereco" type="text" register={register} />
      <p>{errors.endereco?.message}</p>
      <Button>Enviar</Button>
    </Form>
  );
};

export default FormNew;
