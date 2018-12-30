$(document).ready(function() {

$("table.myodd tr:not(:has(th))").click(function(){
	var mynewn = new Date().getTime();
	var tt=mynewn;	
	myidname='myid'+tt;
	var temp=$(this).clone().attr({id:myidname});	
		$(temp).insertAfter("table.myeven  tr:last").append('<td><a href=# onClick=myde('+tt+');>刪除</a></td>');
	//
	$('#'+myidname+'').show("slow");
	count();	
});


});

function myde(e){
$('#myid'+e+'').remove();
count();
};

function count(){
	var d,myprice;
	var total=0;
	var c=$("table.myeven tr:not(:has(th))").size();
	$("table.myeven tr:not(:has(th))").each(function(){
	 d=$(this).find("td").get(2);
	 myprice=d.innerHTML;
	 myprice=parseInt(myprice);
	 total=total+myprice;	
	});

	$("#mytotal").empty();
	$("#mytotal").append('總件數='+c +'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;總價='+total );
};







