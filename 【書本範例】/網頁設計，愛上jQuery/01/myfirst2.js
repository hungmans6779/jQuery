$(document).ready(function() {
	$("#box").hide();
	$("#myimg").hide();
	$("a").click(function(){ 
		$("#box").toggle("slow"); 
		$("#myimg").toggle("slow");  
		});
	});
