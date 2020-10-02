import React from 'react'
import Label from './Label/index';
import Input from './Input/index';
import Content from './content';

const Text = ({ label, type, name, register }) => (
  <Label>
    <Content>{label}</Content>
    <Input type={type} name={name} ref={register}/>
  </Label>
)

export default {
  Text,
};