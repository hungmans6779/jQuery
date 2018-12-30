$(document).ready(function() {
	$.get("getpage.pl",{ page: "pro54-1"},
		function(data){
$("#link").html(data);
	});
});