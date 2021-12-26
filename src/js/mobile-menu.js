$(document).ready(function () {
  $(".nav-toggler").each(function (_, navToggler) {
    var target = $(navToggler).data("target");
    $(navToggler).on("click", function () {
      $(target).animate({
        height: "toggle",
      });
    });
  });
});

function bgShow() {
  var y = document.getElementById("top-nav-bg").getAttribute("class");
  if (y === "toggle-active") {
    y = "toggle-close";
  } else {
    y = "toggle-active";
  }
  document.getElementById("top-nav-bg").setAttribute("class", y);
}
