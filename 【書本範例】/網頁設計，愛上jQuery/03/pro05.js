$(document).ready(function(){
   	$("#firstul li:eq(2)").addClass('active');
	$(":not(#news)").removeClass('active');
	$("#join").hide("slow");
	$("#login").hide("slow");
	$("#addtowatch").show("slow");
	$("#checkwatch").show("slow");
	$("#logout").show("slow");	
	$("span[id]").addClass('mynews');
	$("#title01").click(function(){
	$("#title01_content").addClass('mynewscontent').toggle("slow");
	$("div[id^='title']:not(#title01_content)").hide("slow");
			});
		$("#title02").click(function(){
	$("#title02_content").addClass('mynewscontent').toggle("slow");
	$("div[id^='title']:not(#title02_content)").hide("slow");

			});
		$("#title03").click(function(){
	$("#title03_content").addClass('mynewscontent').toggle("slow");
	$("div[id^='title']:not(#title03_content)").hide("slow");
			});
  });

