import axios from "axios";
import { makeAutoObservable } from "mobx";

class ViaCepStore {
    logradouro = "";
    gia = "";
    complemento = "";
    bairro = "";
    localidade = "";
    uf = "";

    constructor(){
        makeAutoObservable(this) ; 
    }

    onBlurCep = (value:string) => {
        axios
        .get(`https://viacep.com.br/ws/${value}/json/`)
        .then((res) => {
            console.log(res);
            const {logradouro, gia, complemento, bairro, localidade, uf} = res.data
            this.logradouro = logradouro;
            this.gia = gia;
            this.complemento = complemento;
            this.bairro = bairro;
            this.localidade = localidade;
            this.uf = uf;
          })
          .catch((error) => {
            console.error(error);
          });
    }

}
  

export const viaCepStore = new ViaCepStore();