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
	$("#showtable").hide();
	$("tr:has(th)").css({"background-color":"#666666",color:"white","font-size":" 0.9em"});
	$("tr:even").addClass('myeven');
	$("tr:odd").addClass('myodd');
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

$("#hidetable").click(function(){
	$("th:gt(0)").hide();
	$("#table2 tr").each(function(){
	$(this).find("td:gt(0)").hide();
	
		});
		$("tr:gt(1)").hide();
	$("#table2").addClass('myshorttable');
	$("#hidetable").toggle();
	$("#showtable").toggle();

});
$("#showtable").click(function(){
	$("tr:gt(1)").fadeIn();
	$("th:gt(0)").fadeIn();
	$("#table2 tr").each(function(){

$(this).find("td:gt(0)").fadeIn();
	});
	$("table#table2").removeClass('myshorttable');
	$("#showtable").toggle();
	$("#hidetable").toggle();
});


  });

