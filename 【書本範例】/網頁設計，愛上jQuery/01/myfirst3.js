$(document).ready(function() {
	$("#box").hide();
	$("#myimg").hide();
	$("#hello").click(function(){ 
		$("#box").show("slow"); 
		$("#myimg").hide("slow");  
		});

		$("#jquery").click(function(){ 
		$("#box").hide("slow"); 
		$("#myimg").show("slow");  
		});

	});
