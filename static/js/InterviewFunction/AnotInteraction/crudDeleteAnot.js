const deleteButton = document.getElementsByClassName("annotation_crud_delete");
const plusButton = document.getElementsByClassName("crud_button")[3];
const returnButton = document.getElementsByClassName(
  "header_return_interview"
)[1];
const anotContainer = document.getElementsByClassName(
  "annotation_container"
)[0];

for (var i = 0; i < deleteButton.length; i++) {
  deleteButton[i].addEventListener("click", (e) => {
    let pai1 = e.target.parentNode
    plusButton.style.pointerEvents = "none";
    returnButton.style.pointerEvents = "none";

    const div = document.createElement("div");
    const form = document.createElement("form");
    const button = document.createElement("button");
    const editar = document.createElement("input");
    const id = document.createElement("input");
    const text = document.createElement("input");
    const resendInput = document.createElement("input");
    const hr = document.createElement("hr");
    const textarea = document.createElement("textarea");

    div.className = "file_anot_div_temp";
    form.className = "file_anot_form_temp";
    button.className = "all_button file_anot_temp_button";
    editar.className = "all_button anot_temp_edit_button";
    hr.className = "file_anot_hr_temp";
    textarea.className = "anot_textearea_temp";

    anotContainer.appendChild(div);
    div.appendChild(form);
    form.appendChild(button);
    form.appendChild(editar);
    form.appendChild(id);
    form.appendChild(text);
    form.appendChild(resendInput);
    div.appendChild(hr);
    div.appendChild(textarea);

    form.action = "/forms/DeleteAnot";
    form.method = "post";

    button.textContent = "Retornar";
    button.style.pointerEvents = "auto";
    button.addEventListener("click", (e) => {
      plusButton.style.pointerEvents = "auto";
      returnButton.style.pointerEvents = "auto";
      anotContainer.removeChild(div);
    });

    div.style.pointerEvents = "none";
    editar.type = "submit";
    editar.value = "Deletar";
    editar.style.pointerEvents = "auto";
    id.type = "hidden";
    id.name = "ID";
    id.value = e.target.getAttribute("id");
    text.type = "hidden";
    text.name = "TEXTO";
    text.value = pai1.children[3].textContent;
    resendInput.type = "hidden";
    resendInput.name = "RESEND";
    resendInput.value = pai1.children[4].textContent;

    textarea.value = pai1.children[3].textContent;
  });
}
