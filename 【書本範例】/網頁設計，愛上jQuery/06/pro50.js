$(document).ready(function(){ 
	var myhref,mytitle,mysrc,myindex,timer;
	var myx,y,myshow,mytextshow;
	var myrand = new Array();
	$("#imgstore img").each(function(e){
	myhref=$(this).attr("rel");
	mytitle=$(this).attr("alt");
	mysrc=$(this).attr("src");
	myrand[e]='<a href='+myhref +' title=\"'+mytitle +'\" ><img src='+mysrc+' border=0 id=myimg></a>';
	 	 });
myrindex=$(myrand).size();
$('#banner').hover(function(){
		clearInterval(timer);		
		},
	function(){
			myx = new Date();
//y=Math.floor(Math.random()*myrindex);
	y = myx.getSeconds()% myrindex;
	myshow=myrand[y]
	mytextshow=$(myshow).attr("title");
	$('#banner').animate({width: "0",height: "60"},100,function(){
$('#banner').html(myshow);
$('#banner').animate({width: "400",height: "60"},1000);});
$('#btext').animate({width: "0",height: "0"},100,function(){
$('#btext').html(mytextshow);
$('#btext').animate({width: "400",height: "20"},1000);});
		timer = setInterval(ranit,5000);

		});
ranit();

function ranit(){
myx = new Date();
y=Math.floor(Math.random()*myrindex);
	//y = myx.getSeconds()% myrindex;
myshow=myrand[y]
mytextshow=$(myshow).attr("title");
$('#banner').animate({width: "0",height: "60"},100,function(){
$('#banner').html(myshow);
$('#banner').animate({width: "400",height: "60"},1000);});
$('#btext').animate({width: "0",height: "0"},100,function(){
$('#btext').html(mytextshow);
$('#btext').animate({width: "400",height: "20"},1000);});
	}
timer = setInterval(ranit,5000);
	});



