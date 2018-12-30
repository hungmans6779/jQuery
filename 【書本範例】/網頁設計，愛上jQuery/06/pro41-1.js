$(document).ready(function(){
	
	var divname='#show';
	var myindex=divname+' img';
	var mysize=$(myindex).size();
	var myend=mysize-1;
	var myfirst=divname+' img:eq(0)';
	var mylast=divname+' img:eq('+myend+')';
	var temp;
	doshow();


function doshow(){
	temp=$(myfirst).clone();
$(myfirst).animate({ 
    width: "500px",
    height: "0px"   
  }, 5000,function(){
	
	$(myfirst).remove();
	$(divname).append(temp);
	$(mylast).attr({height:"375px"});
	setTimeout(doshow,5000);
	});
}

});

