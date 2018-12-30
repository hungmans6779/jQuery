$(document).ready(function(){
   $("#tt").click(function(){
	$("tr:not(:visible)").addClass('mytd').fadeIn("slow");
   });
  $("#hh").click(function(){
	$("table:visible").hide("slow");
   });
  });

