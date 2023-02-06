export { SendIDcompany }

var SendIDcompany = (leftButton, clientButton, companyButton)=>{
    leftButton.setAttribute("company_left_side", companyButton.getAttribute("company_id"));
    clientButton.setAttribute("company_client", companyButton.getAttribute("company_id"));
}