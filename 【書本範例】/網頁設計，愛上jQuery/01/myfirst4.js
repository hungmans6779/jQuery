$(document).ready(function() {
    $("#right").click(function(){
  $(".myshow").animate({left: '+50px'}, "slow");
});

$("#left").click(function(){
  $(".myshow").animate({left: '-50px'}, "slow");
});
  });
