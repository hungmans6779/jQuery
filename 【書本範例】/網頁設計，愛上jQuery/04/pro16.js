$(document).ready(function(){    
    $("#check").click(function () {
    var mylink= $("a:eq(1)").attr('href');
	$("span").html('<a href=http://'+mylink+'>Vist My Site</a>');
	});
  });

