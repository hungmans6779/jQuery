$(document).ready(function() {
var myshow,mywidth,myheight,showpic,mytitle,mynext,myprev,mylength,index,temp,shownext,showprev;
var w=new Array();

mylength=$(".popshow img").size();
$(".popshow img").each(function(e){
temp=$(this).clone();
w[e]=temp;
});

$(".popshow img").click(function(){
myshow=$(".popshow img").index(this);
doimg(myshow);
return false
});

function doimg(index){
$("#this_show").remove();
index=parseInt(index);
 mynext=index+1; 
 myprev=index-1;
 if (mynext>=mylength)
 {
 mynext=0;
 }
 if (myprev<0)
 {
 myprev=mylength-1;
 }
 var kkk=w[index];
 var myImage = new Image();
 myImage.src=$(kkk).attr('rel')
 mytitle=$(kkk).attr('alt')
 mywidth=myImage.width;
 myheight=myImage.height;

 //$('#ok').html('<span >'+mytitle+'</span><br>');
 showpic='<img src='+myImage.src+'>';
 $(showpic).attr("id","this_show").addClass('pop').css({
'left': ($('body').width() - mywidth) / 2,
'top' : 100,
'width':mywidth,
'height':myheight
}).appendTo('body').hide();
$('.popshow').css({'opacity': 0.4});
 $("#dis").css({
'left': ($('body').width()-mywidth) / 2,
'top' : 100,'opacity': 0.7}).html(mytitle);
$("#next").css({
'left': ($('body').width()+mywidth-70) / 2,
'top' : 460,'opacity': 0.7});
$("#prev").css({
'left': ($('body').width()-mywidth) / 2,
'top' : 460,'opacity': 0.7});

shownext='<a href=# rel='+mynext+'>NEXT</a>';
showprev='<a href=# rel='+myprev+'>PREV</a>';
$("#next").html(shownext);
$("#prev").html(showprev);

$('.more').show("fast");
$("#this_show").fadeIn("slow");
return false

}

$("#next").click(function(){
var nindex=$("#next a").attr('rel');
doimg(nindex);
return false
});
$("#prev").click(function(){
var pindex=$("#prev a").attr('rel');
doimg(pindex);
return false
});
$(document).click(function(){
$('.popshow').css({'opacity': 1});
$('.more').hide();
$("#this_show").remove();
});
});