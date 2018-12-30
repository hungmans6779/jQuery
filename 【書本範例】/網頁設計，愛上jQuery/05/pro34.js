$(document).ready(function() {
count();
	$("#dd").click(function(){
	$('tr:not(:eq(1)):not(:has(th)):last').remove();
	count();
	});
$("tr:not(:has(th))").click(function(){
	$(this).clone(true).insertAfter(this);
	count();	
});
$(function count(){
	var c=$("tr:not(:has(th))").size();
	var d=$(this).find("td").get(2);
	var myprice=d.innerHTML*c;
	$("#mytotal").empty();
	$("#mytotal").append('總件數='+c +'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;總價='+myprice );
});

});
