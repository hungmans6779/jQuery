$(document).ready(function() {
var c=$("tr:not(:has(th))").size();
	var d=$(this).find("td").get(2);
	var myprice=d.innerHTML*c;
	$("#mytotal").empty();
	$("#mytotal").append('�`���='+c +'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;�`��='+myprice );
$("tr:not(:has(th))").click(function(){
	$(this).clone(true).insertAfter(this);
	var c=$("tr:not(:has(th))").size();
	var d=$(this).find("td").get(2);
	var myprice=d.innerHTML*c;
	$("#mytotal").empty();
	$("#mytotal").append('�`���='+c +'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;�`��='+myprice );
});

});
