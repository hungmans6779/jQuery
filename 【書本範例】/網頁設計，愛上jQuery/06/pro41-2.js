$(document).ready(function(){
	var divname='#test';
	var myindex=$("#test img").size();
	var mytop=375;
	var speed;
	var myli=mytop*myindex;
	var mygo=0;
	var mygo1=0;
	doit();

	function doit(){
		mygo=mygo+mytop;
		speed=5000;
		if (mygo>=myli)
		{mygo=1;
		speed=500;
			}	
			mygo1=0-mygo;
$(divname).animate({top:mygo1},speed,function(){
	setTimeout(doit,500);
});
	}
});

