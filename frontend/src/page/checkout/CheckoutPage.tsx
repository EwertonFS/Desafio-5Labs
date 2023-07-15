import {Navigate,useLocation, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import style from './Checkout.module.css'
import send from '../../components/button/ButtonSend.module.css'


interface FormValues {
  firstName: string;
  lastName: string;
  telephone: string;
  email: string;
  document: string;
  /* cpf: string;
  cnpj: string; */
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
  const vehicleImage = searchParams.get('vehicleImg');
  const vehicleValueNav = searchParams.get('vehicleValueNav');


  const navigate = useNavigate()
  
  interface Props {
    style :{
     check :"string"

   }
 }
 
 const [check ,setCheck] =useState(false)
   
 const handleCheck =(event: React.ChangeEvent<HTMLInputElement>)=>{
   setCheck(event.target.checked)
 }

   console.log(check)
  
  const formik = useFormik<FormValues>({
    initialValues: {
      firstName: "",
      lastName: "",
      telephone: "",
      email: "",
      document: '',
      /* cpf: "",
      cnpj: "", */
      cep: "",
      logradouro: "",
      gia: "",
      complemento: "",
      bairro: "",
      localidade: "",
      uf: "",
      paymentMethod: 'cartao',
      cardNumber: '',
      cardExpiration: '',
      cardHolderName: '',
      cardCvv: '',

    },
    validationSchema: Yup.object({
      firstName:
        Yup.string()
          .min(2, "Too Short!")
          .max(50, "Too Long!")
          .matches(/^[A-Z][a-z]*$/, "Incie com letra maiúsculas")
          .required("Preencha o Nome."),
      lastName:
        Yup.string()
          .min(2, "Too Short!")
          .max(50, "Too Long!")
          .matches(/^[A-Z][a-zA-Z]*(\s[A-Z][a-zA-Z]*)*$/, "Incie com letra maiúsculas")
          .required("Preencha Sobrenome"),
      telephone:
        Yup.string()
          .matches(/^\+?\d{1,3}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
            "Número Invalido")
          .required("Preencha Telefone"),
      email:
        Yup.string()
          .email("Invalid email")
          .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
          .required("Preencha Email"),
      document:
        Yup.string()
          .test("document-validation", "Invalid document", (value) => {
            const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
            const cnpjRegex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/;
            return value !== undefined && (cpfRegex.test(value) || cnpjRegex.test(value));
          })
          .required('Required'),
      paymentMethod:
        Yup.string()
          .test(
            "payment-validation", "boleto",
            function () {
              const { paymentMethod } = this.parent
              if (paymentMethod === "cartao" || "boleto") {
                return true
              }


            }


          ),
      cep:
        Yup.string()
          .matches(/^[0-9]{8}$/, "Invalid CEP")
          .required("CEP is required"),
      cardNumber:
        Yup.string()
          .matches(/^\d{16}$/, 'Número do cartão inválido')
      /* .required('Número do cartão é obrigatório') */,
      cardHolderName: Yup.string()
        .matches(/^[A-Za-z\s]+$/, 'Digite um nome válido')
      /* .required('Preencha o nome do titular') */,
      cardExpiration:
        Yup.string()
          .matches(/^(0[1-9]|1[0-2])\/\d{2}$/)
      /* .required("Digite Data Vencimento") */,
      cardCvv:
        Yup.string()
          .matches(/^\d{3,4}$/, "CVV inválido. Insira um CVV válido com 3 ou 4 dígitos.")
      /* .required("CVV é obrigatório.") */,


    }),
    onSubmit: (values) => {
      console.log(values)
      if(check === false){
        alert("É necessário confimar politica de envio no Cabeçario")
        navigate('/Checkout')
      }
        
      if(check === true){
        navigate('/Checkout/Sucess')
        alert(JSON.stringify(values, null, 2));
      }
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


      <div className={style.confirmation}>
        <div className={style.image}>
          {/* operador de coalescência nula */}
          <img src={vehicleImage ?? undefined} />
        </div>
        <div className={style.description}>
          <p>
            <span className={style.highlight}>Nome :</span> {vehicleName}
          </p>
          <p>
            <span className={style.highlight}>Modelo :</span> {vehicleModel}
          </p>
          <p><span className={style.highlight}>Veículo :</span> {vehicleClass}</p>
          <h3>
            <span className={style.highlight}>Valor :</span> {vehicleValueNav}
          </h3>
        </div>

        <div className={style.check}>
          
          <label htmlFor="check">
          <form>
              <input 
              type="checkbox" 
              id="check" 
              name="check" 
              value="check" 
              onChange={handleCheck}
              style={{cursor:'pointer'}}
              />
          </form>
          </label>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est incidunt ut
          </p>
        </div>
            
             
      </div>
      <div className={style.title}>
        <h1> Preencha os dados para prosseguir com a compra</h1>
      </div>

      <div className={style.main}>
        <form className={style.form} onSubmit={formik.handleSubmit}>
          <label htmlFor="firstName">Nome</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
            placeholder='Digite seu nome'
            required
          />
          {formik.touched.firstName && formik.errors.firstName ? ( 
            <div style={{ color: 'red' }}>{formik.errors.firstName}</div>
          ) : null}

          <label htmlFor="lastName">Sobrenome</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
            placeholder='Digite seu Sobrenome'
            required
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div style={{ color: 'red' }}>{formik.errors.lastName}</div>
          ) : null}

          <label htmlFor="telephone">Telefone</label>
          <input
            id="telephone"
            name="telephone"
            type="tel"
            inputMode="numeric"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.telephone}
            placeholder='Numero Telefone'
            required
          />
          {formik.touched.telephone && formik.errors.telephone ? (
            <div style={{ color: 'red' }}>{formik.errors.telephone}</div>
          ) : null}

          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            placeholder='Digite seu Email'
            required
          />
          {formik.touched.email && formik.errors.email ? (
            <div style={{ color: 'red' }}>{formik.errors.email}</div>
          ) : null}

          <label htmlFor="document">Documento (CPF ou CNPJ)</label>
          <input
            id="document"
            name="document"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.document}
            placeholder='CPF:000.000.000-00 CNPJ:00.000.000/0000-00'
            title='formato CPF:000.000.000-00 ou CNPJ:00.000.000/0000-00:'
            required
          />
          {formik.touched.document && formik.errors.document ? (
            <div style={{ color: 'red' }}>{formik.errors.document}</div>
          ) : null}


          <label htmlFor="cep">Cep</label>
          <input
            id="cep"
            name="cep"
            type="text"
            onChange={formik.handleChange}
            onBlur={onBlurCep}
            value={formik.values.cep}
            placeholder='Digite seu cep'
            required
          />
          {formik.touched.cep && formik.errors.cep ? (
            <div style={{ color: 'red' }}>{formik.errors.cep}</div>
          ) : null}

          <label htmlFor="logradouro">Bairro</label>
          <input
            id="logradouro"
            name="logradouro"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.logradouro}
            placeholder='Identificação do Bairro'

          />
          {formik.touched.logradouro && formik.errors.logradouro ? (
            <div style={{ color: 'red' }}>{formik.errors.logradouro}</div>
          ) : null}

          <label htmlFor="gia">Número Residencia</label>
          <input
            id="gia"
            name="gia"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.gia}
            placeholder='Digite número da residência'
            required
          />
          {formik.touched.gia && formik.errors.gia ? (
            <div style={{ color: 'red' }}>{formik.errors.gia}</div>
          ) : null}

          <label htmlFor="complemento">Complemento</label>
          <input
            id="complemento"
            name="complemento"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.complemento}
            placeholder="Digite Complemento"

          />
          {formik.touched.complemento && formik.errors.complemento ? (
            <div style={{ color: 'red' }}>{formik.errors.complemento}</div>
          ) : null}

          <label htmlFor="bairro">Bairro</label>
          <input
            id="bairro"
            name="bairro"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.bairro}
            readOnly
            placeholder="Identificação do Bairro"
          />
          {formik.touched.bairro && formik.errors.bairro ? (
            <div style={{ color: 'red' }}>{formik.errors.bairro}</div>
          ) : null}

          <label htmlFor="localidade">Cidade</label>
          <input
            id="localidade"
            name="localidade"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.localidade}
            readOnly
            placeholder="Identificação do Cidade"
          />
          {formik.touched.localidade && formik.errors.localidade ? (
            <div style={{ color: 'red' }}>{formik.errors.localidade}</div>
          ) : null}

          <label htmlFor="uf">Estado</label>
          <input
            id="uf"
            name="uf"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.uf}
            readOnly
            placeholder="Identificação do Estado"
          />
          {formik.touched.uf && formik.errors.uf ? (
            <div style={{ color: 'red' }}>{formik.errors.uf}</div>
          ) : null}

          <label htmlFor="paymentMethod">Forma Pagamento</label>
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
            <div style={{ color: 'red' }}>{formik.errors.paymentMethod}</div>
          ) : null}

          {formik.values.paymentMethod === 'cartao' && (
            <>
              <label htmlFor="cardNumber">Número do Cartão</label>
              <input
                id="cardNumber"
                name="cardNumber"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.cardNumber}
                placeholder="São 16 Dígitos Numericos"
                required
              />
              {formik.touched.cardNumber && formik.errors.cardNumber ? (
                <div style={{ color: 'red' }}>{formik.errors.cardNumber}</div>
              ) : null}

              <label htmlFor="cardExpiration">Vencimento(MM/YY)</label>
              <input
                id="cardExpiration"
                name="cardExpiration"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.cardExpiration}
                placeholder="Vencimento 00/00"
                required
              />
              {formik.touched.cardExpiration && formik.errors.cardExpiration ? (
                <div style={{ color: 'red' }}>{formik.errors.cardExpiration}</div>
              ) : null}

              <label htmlFor="cardHolderName">Nome do Titular</label>
              <input
                id="cardHolderName"
                name="cardHolderName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.cardHolderName}
                placeholder="Digite o nome do titular"
                style={{ textTransform: 'uppercase' }}
              /* required */
              />
              {formik.touched.cardHolderName && formik.errors.cardHolderName ? (
                <div style={{ color: 'red' }}>{formik.errors.cardHolderName}</div>
              ) : null}

              <label htmlFor="cardCvv">Código Segurança</label>
              <input
                id="cardCvv"
                name="cardCvv"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.cardCvv}
                placeholder="Cvv 3 ou 4 digitos verso cartão"
                required
              />
              {formik.touched.cardCvv && formik.errors.cardCvv ? (
                <div style={{ color: 'red' }}>{formik.errors.cardCvv}</div>
              ) : null}
            </>
          )}



          <button className={send.button} type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};


