$(document).ready(function(){
   $("#tt").click(function(){
	$(".mytable :not(:visible)").addClass('mytd').fadeIn("slow");
   });
  $("#hh").click(function(){
	$(".mytable :visible").hide("slow");
   });
  });

