var rows = document.querySelectorAll(".tilt-box-wrap, .nn-hover");
for (var i = 0; i < rows.length; i++) {
  rows[i].onmouseenter = function (event) {
    for (var j = 0; j < rows.length; j++) {
      if (rows[j] === this) continue;
      rows[j].className += " other";
    }
  };

  rows[i].onmouseleave = function (event) {
    var hovers = document.getElementsByClassName("other");
    var len = hovers.length;
    for (var j = 0; j < len; j++) {
      hovers[0].className = hovers[0].className.replace(/\sother(\s|$)/, "");
    }
  };
}
