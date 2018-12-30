$(document).ready(function(){    
    $("#check").click(function () {
		$("a").each(function(){
		var ti=$(this).attr('href');
    	$(this).attr({title:"Vist The Great Site "+ti});
		});
	});
  });

