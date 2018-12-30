$(document).ready(function(){
	var divname='#test';
	var divimg=divname+' img';
	var myindex=$(divimg).size();
	var myleft=300;
	var speed=5000;
	var myli=myleft*myindex;
	var mygo=0;
	var mygo1=0;
	doit();
	function doit(){
		mygo=mygo+myleft;
		speed=5000;
		if (mygo>=myli)
		{mygo=1;
		speed=500;
					}	
			mygo1=0-mygo;
$(divname).animate({left:mygo1},speed,function(){
	setTimeout(doit,500);

});
	}
	
});