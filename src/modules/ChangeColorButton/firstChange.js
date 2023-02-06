var colorView = (first_button) => {
    for (var i = 0; i < first_button.length; i++) {
        first_button[i].onmouseover = function (e) {
          var view_button = e.target;
          view_button.style.color = "white";
          view_button.style.background = "gray";
        };
        first_button[i].onmouseout = function (e) {
          if (e.target.parentNode.parentNode.children[1].style.display !== "flex") {
            let view_button = e.target;
            view_button.style.color = "gray";
            view_button.style.background = "white";
          }
        };
    }
};

export { colorView }
