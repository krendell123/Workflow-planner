$(document).ready(function() {

  $("#sign-up").on("click", function(){
    $(".form-signin-heading").html("Sign Up for Free")
    $("#sign-up").addClass("active");
    $("#log-in").removeClass("active");
  });

  $("#log-in").on("click", function(){
    $(".form-signin-heading").html("Welcome Back!")
    $("#log-in").addClass("active");
    $("#sign-up").removeClass("active");
  });

});
