$(document).ready(function(){ 
var mylink = new Array()
var myfirst=$("#imgstore img:eq(0)").clone();
$("#show").append(myfirst);
$("#imgstore img").each(function(e){
var f=e+1;
	var ss=$(this).attr("src");
	 mylink[e]='<a href=# rel='+ss +' title=\"This Is '+ss+'\" >'+f+'</a>';
	 $("#link").html(mylink.join(""));
	 $("a").addClass("ki");	 
});
$("a:eq(0)").addClass("ik");
var mydis=$(mylink[0]).attr("title");
$("#dis").html(mydis);

$("a").click(function(){
var mm=this.rel;
var nn=this.title;
$("a").removeClass("ik");
$(this).addClass("ik");
$("#show img:eq(0)").fadeTo("slow", 0.33,function(){
$("#show img:eq(0)").remove();
$("#show").append('<img src=00039.jpg id=test class=gray>');
$("#show").append('<img src='+mm +'>').attr({"display":"none"});
$("#test").animate({ 
    width: "500px",
    height: "0px"   
  }, 2000,
		function(){
	$("#test").remove();
});
$("#show img").slideDown("slow");
$("#dis").html(nn);
$("#show img").hover(function(){
	$(this).fadeTo("slow",0.6);
},function(){
	$(this).fadeTo("slow",1);
});
});
});
});
