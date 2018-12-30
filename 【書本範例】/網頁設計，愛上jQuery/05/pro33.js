$(document).ready(function() {
var c=$("tr:not(:has(th))").size();
	var d=$(this).find("td").get(2);
	var myprice=d.innerHTML*c;
	$("#mytotal").empty();
	$("#mytotal").append('羆ン计='+c +'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;羆基='+myprice );
$("tr:not(:has(th))").click(function(){
	$(this).clone(true).insertAfter(this);
	var c=$("tr:not(:has(th))").size();
	var d=$(this).find("td").get(2);
	var myprice=d.innerHTML*c;
	$("#mytotal").empty();
	$("#mytotal").append('羆ン计='+c +'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;羆基='+myprice );
});

});
