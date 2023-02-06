import { telephone } from "/modules/Masks/telephone.js";
import { number } from "/modules/Masks/number.js";
import { cep } from "/modules/Masks/cep.js";
import { cnpj } from "/modules/Masks/cnpj.js";

const tel_lista = document.getElementsByClassName("tel");
const CNPJ = document.getElementsByClassName("cnpj");
const CEP = document.getElementsByClassName("cep");
const num =document.getElementsByClassName("num");

telephone(tel_lista)
cnpj(CNPJ)
cep(CEP)
number(num)