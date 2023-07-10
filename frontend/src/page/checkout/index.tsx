import { useLocation } from 'react-router-dom';
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import style from './Checkout.module.css'
interface FormValues {
  firstName: string;
  lastName: string;
  telephone: string;
  email: string;
  document: string;
  cpf: string;
  cnpj: string;
  cep: string;
  logradouro: string;
  gia: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string,
  paymentMethod: 'boleto' | 'cartao';
  cardNumber: string;
  cardExpiration: string;
  cardHolderName: string;
  cardCvv: string;
}

export const Checkout: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const vehicleName = searchParams.get('vehicleName');
  const vehicleModel = searchParams.get('vehicleModel');
  const vehicleClass = searchParams.get('vehicleClass');









  const formik = useFormik<FormValues>({
    initialValues: {
      firstName: "",
      lastName: "",
      telephone: "",
      email: "",
      document: '',
      cpf: "",
      cnpj: "",
      cep: "",
      logradouro: "",
      gia: "",
      complemento: "",
      bairro: "",
      localidade: "",
      uf: "",
      paymentMethod: 'boleto',
      cardNumber: '',
      cardExpiration: '',
      cardHolderName: '',
      cardCvv: '',

    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
      lastName: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      document: Yup.string().test('document-validation', 'Invalid document', (value) => {
        const cpfRegex = /^\d{11}$/;
        const cnpjRegex = /^\d{14}$/;
        return value !== undefined && (cpfRegex.test(value) || cnpjRegex.test(value));
      }).required('Required'),
      cpf: Yup.string().test("cpf-validation", "Invalid CPF", function (value) {
        const { document } = this.parent;
        if (document === "cpf") {
          const regex = /^\d{11}$/;
          return regex.test(value || "");
        }
        return true;
      }),
      cnpj: Yup.string().test("cnpj-validation", "Invalid CNPJ", function (value) {
        const { document } = this.parent;
        if (document === "cnpj") {
          const regex = /^\d{14}$/;
          return regex.test(value || "");
        }
        return true;
      })
    }),
    onSubmit: (values) => {
      console.log(values)
      alert(JSON.stringify(values, null, 2));
    },
  });

  const onBlurCep = (event: React.FocusEvent<HTMLInputElement>) => {
    const { value } = event.target;
    axios.get(`https://viacep.com.br/ws/${value}/json/`)
      .then((res) => {
        console.log(res);
        const { logradouro, gia, complemento, bairro, localidade, uf } = res.data;
        formik.setValues({
          ...formik.values,
          logradouro,
          gia,
          complemento,
          bairro,
          localidade,
          uf,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (

    <div className={style.container}>
      <div className="title">
      </div>

      <div className={style.confirmation}>

        <p>
          <span>Nome:</span>{vehicleName}
        </p>
        <p>
          <span>Modelo:</span>{vehicleModel}
        </p>
        <p><span>Veículo:</span>{vehicleClass}</p>
      </div>
      <h4> Preencha os dados para prosseguir com a compra</h4>
      <div className={style.main}>
        <form className={style.form} onSubmit={formik.handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div>{formik.errors.firstName}</div>
          ) : null}

          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div>{formik.errors.lastName}</div>
          ) : null}

          <label htmlFor="telephone">Last Name</label>
          <input
            id="telephone"
            name="telephone"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.telephone}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div>{formik.errors.lastName}</div>
          ) : null}

          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}

          <label htmlFor="document">Document (CPF or CNPJ)</label>
          <input
            id="document"
            name="document"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.document}
          />
          {formik.touched.document && formik.errors.document ? (
            <div>{formik.errors.document}</div>
          ) : null}

          <label htmlFor="cep">Cep</label>
          <input
            id="cep"
            name="cep"
            type="text"
            onChange={formik.handleChange}
            onBlur={onBlurCep}
            value={formik.values.cep}
          />
          {formik.touched.cep && formik.errors.cep ? (
            <div>{formik.errors.cep}</div>
          ) : null}

          <label htmlFor="logradouro">logradouro</label>
          <input
            id="logradouro"
            name="logradouro"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.logradouro}
          />
          {formik.touched.logradouro && formik.errors.logradouro ? (
            <div>{formik.errors.logradouro}</div>
          ) : null}

          <label htmlFor="gia">gia</label>
          <input
            id="gia"
            name="gia"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.gia}
          />
          {formik.touched.gia && formik.errors.gia ? (
            <div>{formik.errors.gia}</div>
          ) : null}

          <label htmlFor="complemento">complemento</label>
          <input
            id="complemento"
            name="complemento"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.complemento}
          />
          {formik.touched.complemento && formik.errors.complemento ? (
            <div>{formik.errors.complemento}</div>
          ) : null}

          <label htmlFor="bairro">bairro</label>
          <input
            id="bairro"
            name="bairro"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.bairro}
          />
          {formik.touched.bairro && formik.errors.bairro ? (
            <div>{formik.errors.bairro}</div>
          ) : null}

          <label htmlFor="localidade">localidade</label>
          <input
            id="localidade"
            name="localidade"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.localidade}
          />
          {formik.touched.localidade && formik.errors.localidade ? (
            <div>{formik.errors.localidade}</div>
          ) : null}

          <label htmlFor="uf">uf</label>
          <input
            id="uf"
            name="uf"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.uf}
          />
          {formik.touched.uf && formik.errors.uf ? (
            <div>{formik.errors.uf}</div>
          ) : null}

          <label htmlFor="paymentMethod">Payment Method</label>
          <select
            id="paymentMethod"
            name="paymentMethod"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.paymentMethod}
          >
            <option value="boleto">Boleto</option>
            <option value="cartao">Cartão</option>
          </select>
          {formik.touched.paymentMethod && formik.errors.paymentMethod ? (
            <div>{formik.errors.paymentMethod}</div>
          ) : null}

          {formik.values.paymentMethod === 'cartao' && (
            <>
              <label htmlFor="cardNumber">Card Number</label>
              <input
                id="cardNumber"
                name="cardNumber"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.cardNumber}
              />
              {formik.touched.cardNumber && formik.errors.cardNumber ? (
                <div>{formik.errors.cardNumber}</div>
              ) : null}

              <label htmlFor="cardExpiration">Card Expiration (MM/YY)</label>
              <input
                id="cardExpiration"
                name="cardExpiration"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.cardExpiration}
              />
              {formik.touched.cardExpiration && formik.errors.cardExpiration ? (
                <div>{formik.errors.cardExpiration}</div>
              ) : null}

              <label htmlFor="cardHolderName">Card Holder Name</label>
              <input
                id="cardHolderName"
                name="cardHolderName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.cardHolderName}
              />
              {formik.touched.cardHolderName && formik.errors.cardHolderName ? (
                <div>{formik.errors.cardHolderName}</div>
              ) : null}

              <label htmlFor="cardCvv">CVV</label>
              <input
                id="cardCvv"
                name="cardCvv"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.cardCvv}
              />
              {formik.touched.cardCvv && formik.errors.cardCvv ? (
                <div>{formik.errors.cardCvv}</div>
              ) : null}
            </>
          )}



          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};


