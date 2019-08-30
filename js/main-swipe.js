var project = document.querySelector('#project');
var manager = new Hammer.Manager(project);
var Swipe = new Hammer.Swipe();
manager.add(Swipe);

manager.on('swipedown', function(e) {
          $("#project").removeClass('active');
          $("#main").removeClass("active");
          $("#main").removeClass("deactive-three");
          $("#account").removeClass("deactive-three");
          $("#project").removeClass("block");
          $("#account").removeClass("block");
});

manager.on('swipeup', function(e) {
       if ($('#project').hasClass('block')) {
          $("#main").removeClass("active");
          $("#project").removeClass("deactive-two");
          $("#account").removeClass("deactive-two");
          $("#project").removeClass("block");
          $("#account").removeClass("block");
  }  else { 
            $("#project").addClass('active');
            $("#main").addClass("deactive-three");
            $("#account").addClass("deactive-three");
  }
});

manager.on('swipedown', function(e) {
        if($('#project').hasClass('touch-swipe')) {
          $("#main").toggleClass("active");
          $("#account").toggleClass('block');
          $("#project").toggleClass('block');
          $("#account").toggleClass("deactive-two");
          $("#project").toggleClass("deactive-two");
        }
});