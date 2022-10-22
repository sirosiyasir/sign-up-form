$(window).resize(function() {
  if (window.innerWidth <= 1000){
    $(".desktop-img").attr("src","images/bg-intro-mobile.png");
  } else {
    $(".desktop-img").attr("src","images/bg-intro-desktop.png");
  }
});

$("button").click(function() {
  var firstName = $(".first-name")[0];
  var lastName = $(".last-name")[0];
  var email = $(".email")[0];
  var password = $(".password")[0];

  if (lastName !== null && lastName.value === "") {
    $(".last-name").addClass("last-name-color");
    $("#last-name-h6").css("display", "block");
  } else {
    $(".last-name").removeClass("last-name-color");
    $("#last-name-h6").css("display", "none");
  }

  if (email !== null && email.value === "") {
    $(".email").addClass("email-color");
    $("#email-h6").css("display", "block");
  } else {
    $(".email").removeClass("email-color");
    $("#email-h6").css("display", "none");
  }

  if (password !== null && password.value === "") {
    $(".password").addClass("password-color");
    $("#password-h6").css("display", "block");
  } else {
    $(".password").removeClass("password-color");
    $("#password-h6").css("display", "none");
  }

  if (firstName !== null && firstName.value === "") {
    $(".first-name").addClass("first-name-color");
    $("#first-name-h6").css("display", "block");
  } else {
    $(".first-name").removeClass("first-name-color");
    $("#first-name-h6").css("display", "none");
  }

})
