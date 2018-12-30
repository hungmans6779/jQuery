$(document).ready(function(){
	  $.each($.browser, function(i, val) {
      $("<div>" + i + " : <span>" + val + "</span>").appendTo('#dis');
    });
});

