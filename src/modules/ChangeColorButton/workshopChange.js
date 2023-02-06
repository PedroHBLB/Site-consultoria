var colorView = (padraentrevistasButton) => {
    for (var i = 0; i < padraentrevistasButton.length; i++) {
        padraentrevistasButton[i].onmouseover = function (e) {
          var button = e.target;
          button.style.background = "lightgray";
        };
        padraentrevistasButton[i].onmouseout = function (e) {
            var button = e.target;
            if(button.getAttribute("color") === "white"){
                button.style.background = "white";
            }
        };
    }
};

export { colorView }