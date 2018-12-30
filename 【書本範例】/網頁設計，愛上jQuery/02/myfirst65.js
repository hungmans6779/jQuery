$(document).ready(function(){
   var arr = [ 'yahoo', 'google', 'youtube', 'abc', 'def' ];
   arr = jQuery.map(arr, function(n, i){
	   i=i+1;
	   return (i+':<a href=http://www.'+n+'.com>'+n.toUpperCase()+'</a>');	
    });
   
    $("div").html(arr.join(" | "));
	
});

