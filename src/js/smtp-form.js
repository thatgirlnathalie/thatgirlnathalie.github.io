function contactForm() {
  var name = $("#name").val();
  var email = $("#email").val();
  var message = $("#message").val();

  // var body = $('#body').val();

  var Body = "<b>Name:</b> <br> " + name + "<br><br><b>Email:</b> <br>" + email + "<br><br><b>Message:</b> <br>" + message;
  //console.log(name, phone, email, message);

  Email.send({
    Host: "smtp.gmail.com",
    Username: "nameisnathalie@gmail.com",
    Password: "sqamzvubjdkcetxv",
    To: "nameisnathalie@gmail.com",
    From: "nameisnathalie@gmail.com",
    Subject: "New Message From " + name + " 😆",
    Body: Body,
  }).then((message) => {
    if (message == "OK") {
      // alert("Your email has been sent.");
      // setTimeout("location.href = 'nameisnathalie.github.io/thank-you/';", 5000);
      $("#form-control").fadeOut("slow", function () {
        $(this).val("");
        $(this).fadeIn("slow");
      });
      $("#form-control")[0].reset(), 5000;
    } else {
      console.error(message);
      alert("Ooops! Sorry, please try sending your email again.");
    }
    (message) => alert(message);
  });
}

function requestQuote() {
  var name = $("#name").val();
  var email = $("#email").val();
  var service = $("#service").val();
  var budget = $("#budget").val();
  var message = $("#message").val();

  var Body = "<b>Name:</b> <br> " + name + "<br><br><b>Email:</b> <br>" + email + "<br><br><b>Services:</b> <br>" + service + "<br><br><b>Budget:</b> <br>" + budget + "<br><br><b>Message:</b> <br>" + message;

  Email.send({
    Host: "smtp.gmail.com",
    Username: "nameisnathalie@gmail.com",
    Password: "sqamzvubjdkcetxv",
    To: "nameisnathalie@gmail.com",
    From: "nameisnathalie@gmail.com",
    Subject: "New Quote Request From " + name + " 🥳",
    Body: Body,
  }).then((message) => {
    if (message == "OK") {
      $("#form-control").fadeOut("slow", function () {
        $(this).val("");
        $(this).fadeIn("slow");
      });
      $("#form-control")[0].reset(), 5000;
    } else {
      console.error(message);
      alert("Ooops! Sorry, please try sending your email again.");
    }
    (message) => alert(message);
  });
}
