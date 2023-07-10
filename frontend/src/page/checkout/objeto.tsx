/* import style from "./Checkout.module.css"; */
/* import { Formik, Form, Field } from "formik";
import { useFormik } from 'formik'; */
/* import * as Yup from "yup"; */

/*Personal information*/

/* const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      cpf: "",
      cnpj: "",
      cep: "",
      logradouro: "",
      gia: "",
      complemento: "",
      bairro: "",
      localidade: "",
      uf: "",
      pagamento: {
        boleto: {
          numero: "",
          vencimento: "",
          valor: Yup.number,
        },
        cartaoCredito: {
          numero: "",
          validade: "",
          titular: "",
          cv: "",
        },
      }
    },

    validationSchema: Yup.object().shape({
      firstName: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
      lastName: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      cpf: Yup.string()
        .test("cpf-validation", "Invalid CPF", (value) => {
          const regex = /^[0-9]{11}$/;
          return !value || regex.test(value);
        })
        .required("Required"),
      cnpj: Yup.string().when("cpf", {
        is: (cpf) => !cpf || cpf.length === 0,
        then: Yup.string()
          .length(14, "CNPJ must have exactly 14 characters")
          .matches(/^\d+$/, "CNPJ must contain only digits")
          .required("Required"),
        otherwise: Yup.string().nullable(),
      }),
      cep: Yup.string()
        .matches(/^\d{5}-\d{3}$/, "Invalid CEP")
        .required("Required"),
      logradouro: Yup.string().required("Required"),
      gia: Yup.string().nullable(),
      complemento: Yup.string().nullable(),
      bairro: Yup.string().required("Required"),
      localidade: Yup.string().required("Required"),
      uf: Yup.string()
        .length(2, "UF must have exactly 2 characters")
        .required("Required"), */
      /* pagamento: Yup.object().shape({
        boleto: Yup.object().shape({
          numero: Yup.string()
            .min(10, "Boleto number must have at least 10 characters")
            .max(20, "Boleto number must have at most 20 characters")
            .required("Required"),
          vencimento: Yup.date()
            .min(new Date(), "Invalid due date")
            .required("Required"),
          valor: Yup.number().min(0, "Invalid value").required("Required"),
        }),
        cartaoCredito: Yup.object().shape({
          numero: Yup.string()
            .matches(/^\d{4}$/, "Card number must have exactly 4 digits")
            .required("Required"),
          validade: Yup.string()
            .matches(/^\d{2}\/\d{2}$/, "Invalid expiration date")
            .required("Required"),
          titular: Yup.string().required("Required"),
          cv: Yup.string()
            .matches(/^\d{3}$/, "CVV must have exactly 3 digits")
            .required("Required"),
        }),
      }), */
   /*  }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

} */












/* 
export function Checkout() {
  return (
    <>
      <div className={style.container}>
        <div className="title">
          <h1>Chekout</h1>
        </div>

        <div className={style.confirmation}>
       
          <p>
            <span>Nome:</span> Luke
          </p>
          <p>
            <span></span>Modelo:Dart Vader
          </p>
          <p>Veículo:Prisma</p>
        </div>

        <div className={style.main}>
          <h2> Preencha os dados para prosseguir com a compra</h2>

           <form className={style.form}>
          <form onSubmit={formik.handleSubmit}>
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

            <button type="submit">Submit</button>
          </form>

          </form>
        </div>
      </div>
    </>
  );
}
 */
/* 
<label htmlFor="name">Nome:</label><br />
<input type="text" id="name" name="name" required autoFocus /><br />

<label htmlFor="email">E-mail:</label><br />
<input type="email" id="email" name="email" required autoFocus /><br />

<label htmlFor="phone">Telefone:</label><br />
<input type="tel" id="phone" name="phone" required autoFocus /><br />

<label htmlFor="cpf-cnpj">CPF/CNPJ:</label><br />
<input type="number" id="cpf-cnpj" name="cpf-cnpj" required autoFocus /><br />

<h3>Endereço:</h3>

<label htmlFor='cep'>Cep</label><br />
<input type="number" id="cpf-cnpj" name="cpf-cnpj" required autoFocus /><br />

<label htmlFor='state'>Estado</label><br />
<input type="text" id="bairro" name="bairro" required autoFocus /><br />
<label htmlFor='city'>Cidade</label><br />
<input type="text" id="bairro" name="bairro" required autoFocus /><br />

<label htmlFor='bairro'>Bairro</label><br />
<input type="text" id="bairro" name="bairro" required autoFocus /><br />

<label htmlFor='complement'>Complemento</label><br />
<input type="text" id="complement" name="complement" required autoFocus /><br />

<h3>Informações de Pagamento</h3>
<label htmlFor='city'>Cartão</label><br />
<input type="text" id="bairro" name="bairro" required autoFocus /><br />
<label htmlFor='city'>Numero</label><br />
<input type="number" id="bairro" name="bairro" required autoFocus /><br />
<label htmlFor='city'>Cv</label><br />
<input type="text" id="bairro" name="bairro" required autoFocus /><br /><br />

<input type='submit'></input> */
