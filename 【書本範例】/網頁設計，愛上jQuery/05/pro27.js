$(document).ready(function(){
   	var mytop='<br>--------------------------<a href=#top>到文件開頭</a>|<a href=mailto:>聯絡我們</a>|<a href=#>編輯</a><br><br>';
    
    $("div[id^='tit']").append(mytop);
   $("span").append('<br>').appendTo("#mymenu");
   $("span").each(function(e){
	   var mynewid=$(this).attr('id');
	   var m=e+1;
	   var myafter='<span><a href=# id='+mynewid +'>[ 閱讀 ]</a></span> ';
	   $(this).before(myafter);
	   $(this).attr({"id":""});
   });
  
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

