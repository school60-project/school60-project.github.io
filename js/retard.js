$("#menu-btn").click(function() {
  $("nav").toggleClass("active");
  $(".page").toggleClass("active");
  $("#menu-btn").toggleClass("active");
}) 


$(".page").click(function() {
	 if ($('.page').hasClass('active')) {
          $("#menu-btn").removeClass("active");
          $("#menu-btn").addClass("la-sliders");
  }  else { 
            $("#menu-btn").addClass("la-sliders");
            $("#menu-btn").removeClass("active"); 
  }

  $("nav").removeClass("active");
  $(".page").removeClass("active");
})

$(".tab2").click(function() {
  $(".tab2").addClass("active");
  $(".tab3").removeClass("active");
  $(".tab4").removeClass("active");
})

$(".tab3").click(function() {
  $(".tab3").addClass("active");
  $(".tab2").removeClass("active");
  $(".tab4").removeClass("active");
})

$(".tab4").click(function() {
  $(".tab4").addClass("active");
  $(".tab2").removeClass("active");
  $(".tab3").removeClass("active");
})


!$("#hamburguer").click(function() {
  this.classList.toggle('active');
  $(".tabs-link_right").toggleClass("hide");
  $(".tabs-link_left").toggleClass("hide");
  $(".hamburger").toggleClass("hide");
  $("nav").removeClass("active");
  $(".page").removeClass("active");
  $("#menu-btn").removeClass("active");
})


var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();