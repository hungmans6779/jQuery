$(document).ready(function(){
   	var mytop='<br>--------------------------<a href=#top>到文件開頭</a>|<a href=mailto:>聯絡我們</a>|<a href=#>編輯</a><br><br>';
   $("span").append('<br>').appendTo("#mymenu");
    $("#title01").click(function(){
		$("#showroom").show("slow").load("a.htm",function(){
			$("#showroom").append(mytop);
		});
			});
		$("#title02").click(function(){
			$("#showroom").show("slow").load("b.htm",function(){
			$("#showroom").append(mytop);
		});
			});
		$("#title03").click(function(){
			$("#showroom").show("slow").load("c.htm",function(){
			$("#showroom").append(mytop);
		});
			});
   
  });

