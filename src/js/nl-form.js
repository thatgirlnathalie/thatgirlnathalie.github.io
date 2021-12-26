// NATURAL LANGUAGE CONTACT FORM

// Auto-width inputs

$(function () {
  var selector = "input-hollow";

  var setSameWidth = function ($target, $source) {
    // the value of the source
    var width = $source.width();

    // apply width of the source to the target
    $target.css("width", width);
  };

  $("input").each(function () {
    var $this = $(this);
    var $span = $this.after('<span class="' + selector + '" style="display: none;">' + $this.attr("placeholder") + "</span>").next("span");

    setSameWidth($this, $span);
  });

  $("input").on("keypress change", function (e) {
    //    if (e.which !== 0 && e.charCode !== 0) { // only characters /// TODO : backspace handling
    if (true) {
      var $this = $(this);
      var c = String.fromCharCode(e.keyCode | e.charCode);

      var $span = $this.next("." + selector);
      $span.text($this.val() + c); // the hidden span takes

      setSameWidth($this, $span);
    }
  });

  // $("select").each(function () {
  //   var $this = $(this);
  //   var $span = $this.after('<span class="' + selector + '" style="display: none;">' + $this.attr("value") + "</span>").next("span");

  //   setSameWidth($this, $span);
  // });

  // $("select").on("keypress change", function (e) {
  //   if (true) {
  //     var $this = $(this);
  //     var c = String.fromCharCode(e.keyCode | e.charCode);

  //     var $span = $this.next("." + selector);
  //     $span.text($this.val() + c);

  //     setSameWidth($this, $span);
  //   }
  // });
});
