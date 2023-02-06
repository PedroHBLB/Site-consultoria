const company = document.getElementsByClassName("company")[0].textContent;
const page = document.getElementById("client_details");
const id = document.getElementsByName("ID")[0];
const posAnt = document.getElementsByName("PosAnt")[0]

let temp_company = JSON.parse(company);

let row_1 = page.children[0];
let row_2 = page.children[1];
let row_3 = page.children[2];
let row_4 = page.children[3];
let row_5 = page.children[4];

let column_1_1 = row_1.children[0].children[1];
let column_1_2 = row_1.children[1].children[1];
let column_1_3 = row_1.children[2].children[1];
let column_2_1 = row_2.children[0].children[1];
let column_2_2 = row_2.children[1].children[1];
let column_2_3 = row_2.children[2].children[1];
let column_3_1 = row_3.children[0].children[1];
let column_3_2 = row_3.children[1].children[1];
let column_3_3 = row_3.children[2].children[1];
let column_5_3 = row_5.children[2].children[1];
let select_1 = row_4.children[0].children[1].children[0];
let select_2 = row_4.children[1].children[1].children[0];
let select_3 = row_5.children[0].children[1].children[0];
let radio_1 = document.getElementsByName("YesNo");

column_1_1.value = temp_company.EM_NOME;
column_1_2.value = temp_company.EM_CNPJ;
column_1_3.value = temp_company.PF_APELIDO;
column_2_1.value = temp_company.EM_WEBPAGE;
column_2_2.value = temp_company.EM_TELEMP;
column_2_3.value = temp_company.PF_NOME;
column_3_1.value = temp_company.PF_CARGO;
column_3_2.value = temp_company.PF_EMAIL;
column_3_3.value = temp_company.PF_TEL;
column_5_3.value = temp_company.POSICAO;
posAnt.value = temp_company.POSICAO
id.value = temp_company.ID;

select_1.value = temp_company.EM_IDROB
select_2.value = temp_company.EM_IDSETOR
select_3.value = temp_company.EM_IDCONS

if (temp_company.FLGATIVA) {
  radio_1[0].checked = true;
  radio_1[1].checked = false;
} else {
  radio_1[0].checked = false;
  radio_1[1].checked = true;
}
