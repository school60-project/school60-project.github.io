$("#account").click(function() {
	 if ($('#account').hasClass('block')) {
          $("#main").removeClass("active");
          $("#project").removeClass("deactive-two");
          $("#account").removeClass("deactive-two");
          $("#account").removeClass("block");
          $("#project").removeClass("block");
  }  else { 
            $("#account").toggleClass("active");
            $("#main").toggleClass("deactive-one");
            $("#project").toggleClass("deactive-one");
  }
})

$("#main").click(function() {
	$("#main").toggleClass("active");
	$("#account").toggleClass('block');
  $("#project").toggleClass('block');
	$("#account").toggleClass("deactive-two");
	$("#project").toggleClass("deactive-two");
})

$("#project").click(function() {
          $("#main").removeClass("active");
          $("#project").removeClass("deactive-two");
          $("#account").removeClass("deactive-two");
          $("#project").removeClass("block");
          $("#account").removeClass("block");
})

$(".main-card").click(function() {
  $(".first").toggleClass("deactive");
})
/*  $("#account.touch").click(function() {
  $("#account").toggleClass("active");
  $("#main").toggleClass("deactive-one");
  $("#project").toggleClass("deactive-one");
  $("#account").removeClass("deactive-two"); 
  $("#main").removeClass("active");
  $("#project").removeClass("deactive-two"); 
})

$("#main.touch").click(function() {
  $("#account").toggleClass("deactive-two");
  $("#main").toggleClass("active");
  $("#project").toggleClass("deactive-two");
}) 

$("#project.touch").click(function() {
  $("#accont").removeClass("active");
  $("#account").removeClass("deactive-two");
  $("#main").removeClass("active");
  $("#main").removeClass("deactive-two");
  $("#project").removeClass("deactive-two");
}) */