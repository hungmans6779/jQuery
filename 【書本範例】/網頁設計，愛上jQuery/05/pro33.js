$(document).ready(function() {
var c=$("tr:not(:has(th))").size();
	var d=$(this).find("td").get(2);
	var myprice=d.innerHTML*c;
	$("#mytotal").empty();
	$("#mytotal").append('總件數='+c +'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;總價='+myprice );
$("tr:not(:has(th))").click(function(){
	$(this).clone(true).insertAfter(this);
	var c=$("tr:not(:has(th))").size();
	var d=$(this).find("td").get(2);
	var myprice=d.innerHTML*c;
	$("#mytotal").empty();
	$("#mytotal").append('總件數='+c +'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;總價='+myprice );
});

});
