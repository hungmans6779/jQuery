$(document).ready(function(){
   	$("#firstul li:eq(2)").addClass('active');
	$(":not(#news)").removeClass('active');
	$("#join").hide("slow");
	$("#login").hide("slow");
	$("#addtowatch").show("slow");
	$("#checkwatch").show("slow");
	$("#logout").show("slow");	
	$("span[id]").addClass('mynews');
	//table js
	//$("#table2").tablesorter({ sortList: [[0,0],[2,0]],headers: { 1: { sorter: false},3: {sorter: false} } });

	$("#showtable").hide();
	$("tr:even").addClass('myhide');
	$("tr:odd").addClass('myodd');
	$("tr:has(th)").css({"background-color":"#666666",color:"white","font-size":" 0.9em"}).removeClass('myhide');


$("tr:not(:has(th))").hover(
  function () {
    $(this).addClass("mytr");
  },
  function () {
    $(this).removeClass("mytr");
  }
);
	$("td").hover(
  function () {
    $(this).addClass("mytd");
  },
  function () {
    $(this).removeClass("mytd");
  }
);

$("tr").click(function(){
	var a=$("tr").index(this);
	var b=a+1;
	//$("tr:eq(b)").removeClass('myhide');
	$("#test").html(b);
	$("tr:even:not(:has(th))").addClass('myhide');
	$('tr:eq('+b+')').removeClass('myhide').addClass('myeven');
	
		

});
  });

