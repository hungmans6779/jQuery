$(document).ready(function(){
   	var mytop='<br>--------------------------<a href=#top>����}�Y</a>|<a href=mailto:>�p���ڭ�</a>|<a href=#>�s��</a><br><br>';
    $("span").each(function(e){
	   var mynewid=$(this).attr('id');
	   var m=e+1;
	   var myafter='<a href=# id='+mynewid +'>'+m+'</a> | ';
	   $(this).after(myafter);
	   $(this).attr({"id":""});
   });
    $("div[id^='tit']").append(mytop);
   $("span").append('<br>').appendTo("#mymenu");
  
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

