const plus_button = document.getElementsByClassName("crud_button")[3];

plus_button.addEventListener("click", (e) => {
    let pai2 = e.target.parentNode.parentNode
    let pai3 = e.target.parentNode.parentNode.parentNode
    var crud_container = pai2;
    var header = pai3.children[0];
    var acr_container = pai3.children[2].children[0].children[0].children[1].children[1]


    header.style.pointerEvents = "none";
    crud_container.style.pointerEvents = "none";
    acr_container.style.display = "flex";

    let content = pai3.children[2].children[0].children[0]
    let title = content.children[0].children[1]
    let annotation = content.children[1].children[0].children[1]
    let scrollbar = pai3.children[2].children[1]

    title.style.pointerEvents = "auto"
    annotation.style.pointerEvents = "auto"
    scrollbar.style.pointerEvents = "none"
  });