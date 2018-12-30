$(document).ready(function(){    
    $("#check").click(function () {
		$("img").each(function(){
		$(this).attr("title",function(){
		var isrc=$(this).attr('src');
		var iname=dosplit(isrc);
		var e=$(iname).size();
		return ("πœ¿…¶W∫Ÿ "+iname[e-1]);	
				
		});
		});
	});
	
	function dosplit(isrc){
	var ss;
	ss=isrc.split('/');
	return (ss);

	}
  });

