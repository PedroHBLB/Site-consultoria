export { setConsultancy };

var setConsultancy = (page, chooseConsultory) => {
  var row_1 = page.children[0];
  var row_2 = page.children[1];
  var row_3 = page.children[2];
  var row_4 = page.children[3];
  var row_5 = page.children[4];
  var row_6 = page.children[5];
  var row_7 = page.children[6];
  var row_8 = page.children[7];

  var column_1_1 = row_1.children[0].children[1];
  var column_1_2 = row_1.children[1].children[1];
  var select_1 = row_2.children[0].children[1].children[0];
  var column_2_2 = row_2.children[1].children[1];
  var column_3_1 = row_3.children[0].children[1];
  var column_3_2 = row_3.children[1].children[1];
  var column_4_1 = row_4.children[0].children[1];
  var column_4_2 = row_4.children[1].children[1];
  var column_4_3 = row_4.children[2].children[1];
  var column_5_1 = row_5.children[0].children[1];
  var column_5_2 = row_5.children[1].children[1];
  var column_5_3 = row_5.children[2].children[1];
  var column_6_1 = row_6.children[0].children[1];
  var column_6_2 = row_6.children[1].children[1];
  var column_6_3 = row_6.children[2].children[1];
  var column_7_1 = row_7.children[0].children[1];
  var column_7_2 = row_7.children[1].children[1];
  var column_7_3 = row_7.children[2].children[1];
  var column_8_1 = row_8.children[0].children[1];
  var radio_1 = document.getElementsByName("presentation");
  var radio_2 = document.getElementsByName("status_info");

  column_1_1.value = chooseConsultory.CONSULTORIA;
  column_1_2.value = chooseConsultory.CS_APELIDO;
  column_2_2.value = chooseConsultory.CS_CNPJ;
  column_3_1.value = chooseConsultory.CS_TELCONS;
  column_3_2.value = chooseConsultory.CS_WEBPAGE;
  column_4_1.value = chooseConsultory.CS_NOME;
  column_4_2.value = chooseConsultory.CS_EMAIL;
  column_4_3.value = chooseConsultory.CS_CARGO;
  column_5_1.value = chooseConsultory.CS_TELRESP;
  column_5_2.value = chooseConsultory.CS_END;
  column_5_3.value = chooseConsultory.CS_NUM;
  column_6_1.value = chooseConsultory.CS_CEP;
  column_6_2.value = chooseConsultory.CS_BAIR;
  column_6_3.value = chooseConsultory.CS_CMPL;
  column_7_1.value = chooseConsultory.CS_MUNI;
  column_7_2.value = chooseConsultory.CS_ESTADO;
  column_7_3.value = chooseConsultory.CS_PAIS;
  column_8_1.value = chooseConsultory.ARQUIVOCONS;

  for (var i = 0; i < select_1.options.length; i++) {
    if (select_1.options[i].text === chooseConsultory.CS_IDROB) {
      select_1.selectedIndex = i;
      break;
    }
  }

  if (chooseConsultory.FLGATIVA) {
    radio_1[0].checked = true;
    radio_1[1].checked = false;
  } else {
    radio_1[0].checked = false;
    radio_1[1].checked = true;
  }

  if (chooseConsultory.FLGVIDEO) {
    radio_2[0].checked = true;
    radio_2[1].checked = false;
  } else {
    radio_2[0].checked = false;
    radio_2[1].checked = true;
  }
};
