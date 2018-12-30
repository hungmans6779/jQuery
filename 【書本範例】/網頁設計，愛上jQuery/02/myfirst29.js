$(document).ready(function(){
$("#my1 tr:has(th)").addClass('myth');
$("#my1 tr:not(:has(th))").addClass('mytd');
$("#my2 tr:has(th)").addClass('myth1');
$("#my2 tr:not(:has(th))").addClass('mytd1');
$("#tt").click(function(){
  $("#my1").animate({left: '+500px'}, 10000);
});
  });

