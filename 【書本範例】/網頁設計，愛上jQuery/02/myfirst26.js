$(document).ready(function(){
$("div:empty").addClass('mydiv');
$("td:empty").addClass('mytd');
$("td:not(:empty)").addClass('mytdmore');
$("td:empty").html("N/A");

  });

