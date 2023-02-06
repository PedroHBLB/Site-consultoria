const fileButton = document.getElementsByClassName("file_scroll_button");
const fileContainer = document.getElementsByClassName("file_container")[0];
const plusButton = document.getElementsByClassName("crud_button")[0];
const returnButton = document.getElementsByClassName(
  "header_return_interview"
)[0];

for (var i = 0; i < fileButton.length; i++) {
  fileButton[i].addEventListener("click", (e) => {
    plusButton.style.pointerEvents = "none";
    returnButton.style.pointerEvents = "none";
    let resend = e.target.children[1].textContent;

    const div = document.createElement("div");
    const form = document.createElement("form");
    const button = document.createElement("button");
    const del = document.createElement("input");
    const id = document.createElement("input");
    const resendInput = document.createElement("input");
    const hr = document.createElement("hr");

    div.className = "file_anot_div_temp";
    form.className = "file_anot_form_temp";
    button.className = "all_button file_anot_temp_button";
    del.className = "all_button file_temp_delete_button";
    hr.className = "file_anot_hr_temp";

    fileContainer.appendChild(div);
    div.appendChild(form);
    form.appendChild(button);
    form.appendChild(del);
    form.appendChild(id);
    form.appendChild(resendInput);
    div.appendChild(hr);

    form.action = "/forms/DeleteFile";
    form.method = "post";

    button.textContent = "Retornar";
    button.addEventListener("click", (e) => {
      plusButton.style.pointerEvents = "auto";
      returnButton.style.pointerEvents = "auto";
      fileContainer.removeChild(div);
    });

    del.type = "submit";
    del.value = "Deletar";
    id.type = "hidden";
    id.name = "ID";
    id.value = e.target.getAttribute("id");
    resendInput.type = "hidden";
    resendInput.name = "RESEND";
    resendInput.value = resend;

    let src = e.target.getAttribute("FileSrc");
    let tipo = e.target.getAttribute("FileTipo");
    let empresa = e.target.getAttribute("empresa");
    let arquivo = "/Empresas/" + empresa + "/" + src;

    if (tipo === "image") {
      let imagem = document.createElement("img");
      imagem.className = "ImagemFileTemp";
      imagem.src = arquivo;

      imagem.style.width = "95%";
      imagem.style.height = "70vh";

      div.appendChild(imagem);
    } else if (tipo === "video") {
      let video = document.createElement("video");
      let source = document.createElement("source");
      source.type = "video/mp4";
      source.src = arquivo;
      video.className = "VideoFileTemp";
      video.controls = true;

      video.style.width = "95%";
      video.style.height = "70vh";

      div.appendChild(video);
      video.appendChild(source);
    } else if (tipo === "application") {
      let embed = document.createElement("embed");
      embed.src = arquivo;
      embed.type = "application/pdf";

      embed.style.width = "95%";
      embed.style.height = "70vh";

      div.appendChild(embed);
    }
  });
}
