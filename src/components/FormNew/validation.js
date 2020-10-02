import * as yup from "yup";

const schema = yup.object().shape({
  name: yup
    .string()
    .min(2, "minimo 2 caracteres")
    .required("Nome e obrigatorio"),
  email: yup
    .string()
    .email("Digite um email valido")
    .required("Email e obrigatorio"),
  endereco: yup
    .string()
    .min(2, "minimo 2 caracteres")
    .required("Endereco e obrigatorio"),
});

export default schema;
