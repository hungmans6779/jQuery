$(document).ready(function(){
   $("#tt").click(function(){
	$("tr:hidden").addClass('mytd').fadeIn("slow");
   });
  $("#hh").click(function(){
	$("table:not(:hidden)").hide("slow");
   });
  });

