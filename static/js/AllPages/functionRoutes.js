const main_side_button_industry = document.getElementsByClassName("normal_side")[0];
const main_side_button_company_1 = document.getElementsByClassName("normal_side")[1];
const main_side_button_company_2 = document.getElementsByClassName("only_side")[0];
const main_side_button_return = document.getElementsByClassName("return_side")[0];

const header_return = document.getElementsByClassName("header_return_button")[0];
const consultancy_button = document.getElementsByClassName("nav_route")[0];
const client_button = document.getElementsByClassName("nav_route")[1];
const config_object_button = document.getElementsByClassName("nav_route")[2];
const workshop_button = document.getElementsByClassName("nav_route")[3];

const error_button = document.getElementsByClassName("login_response_button")[0];

const interview_return = document.getElementsByClassName("interview_side_only_button")[0]

const form_button = document.getElementsByClassName("forms_button")[0]

if (error_button !== undefined) {
  error_button.addEventListener("click", (e) => {
    window.location.href = "/";
  });
}

if (header_return !== undefined) {
  header_return.addEventListener("click", (e) => {
    window.location.href = "main";
  });
}

if (form_button !== undefined) {
  form_button.addEventListener("click", (e) => {
    window.location.href = "/main";
  });
}


if (main_side_button_industry !== undefined) {
  main_side_button_industry.addEventListener("click", (e) => {
    window.location.href = "industry";
  });
}

if (main_side_button_company_1 !== undefined) {
  main_side_button_company_1.addEventListener("click", (e) => {
    window.location.href =
      "company?company=" +
      main_side_button_company_1.getAttribute("company_left_side");
  });
}

if (main_side_button_company_2 !== undefined) {
  main_side_button_company_2.addEventListener("click", (e) => {
    window.location.href =
      "company?company=" +
      main_side_button_company_2.getAttribute("company_left_side");
  });
}

if (main_side_button_return !== undefined) {
  main_side_button_return.addEventListener("click", (e) => {
    window.location.href = "main";
  });
}

if (consultancy_button !== undefined) {
  consultancy_button.addEventListener("click", (e) => {
    window.location.href = "consultancy";
  });
}

if (client_button !== undefined) {
  client_button.addEventListener("click", (e) => {
    window.location.href =
      "client?client_id=" + client_button.getAttribute("company_client");
  });
}

if (config_object_button !== undefined) {
  config_object_button.addEventListener("click", (e) => {
    window.location.href = "configuration";
  });
}

if (workshop_button !== undefined) {
  workshop_button.addEventListener("click", (e) => {
    window.location.href = "workshop";
  });
}

if (interview_return !== undefined) {
  interview_return.addEventListener("click", (e) => {
    window.location.href = "/main";
  });
}
