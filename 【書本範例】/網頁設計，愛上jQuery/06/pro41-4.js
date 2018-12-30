$(document).ready(function(){
	var myleft=-300;
	var speed=5000;
	var divname='#test';
	var divname1=divname+' img:eq(0)';
	var temp;
		doit();

	function doit(){
$(divname).animate({left:myleft},speed,function(){
 temp=$(divname1).clone();
$(divname1).remove();
$(divname).append(temp);
$(divname).css({left:'0'});
	timer=setTimeout(doit,500);
});
	}	
	$(divname).hover(function(){
		$(divname).stop();
		clearTimeout(timer);
	},function(){
		//doit();
			timer=setTimeout(doit,100);

	});
});

