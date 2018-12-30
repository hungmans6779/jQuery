$(document).ready(function(){ 
	$('#myform textarea:disabled').val("請先登入");
	$('#myform :input.required').after('*');
	setTimeout("hideit()",3000);
	var t=0;
	//var myid,mypw;
$('#myform ').submit(function() {
	
	if (t==1)
	{
		$('#mserror').empty();
		alert('輸入成功,.....發送中......');
	return false
	}
});
$('#myform :input[name=ss]').click(function() {
var myids=$('#myform :input[name=myid]').val();
var mypws=$('#myform :input[name=mypassword]').val();
var mymess=$('#myform textarea').val();

//var mymess=$('#myform textarea').val();
if(myids!=="" && myids.length>6 && mypws!=="" && mypws.length>6 && mymess!=""&&t==0){
	$('#iderror').empty();
	$('#pwerror').empty();
		alert('登入完成,請輸入您的意見');
		showit();
		t=1;
		return false
			}

if (myids==""||myids.length<=6)
	{
	var ii;
	$('#pwerror').empty();
	if (myids==""){ii='請勿空白';}
	if (myids.length <=6 && myids.length !=0){ii='ID太短,至少要有7位';}

$('#iderror').html(ii);
$('#myform :input[name=myid]').select().focus();
return false
	}
	if (mypws==""||mypws.length<=6)
	{
		var pp;
		$('#iderror').empty();
		if (mypws==""){pp='請勿空白';}
	if (mypws.length <=6 && mypws.length !=0){pp='密碼太短,至少要有7位';}
$('#pwerror').html(pp);
$('#myform :input[name=mypassword]').select().focus();
return false
	}
if (mymess==""){
	$('#mserror').html('請輸入您的意見');
	return false
}

});

var IE = document.all?true:false
if (!IE) document.captureEvents(Event.MOUSEMOVE)
document.onmousemove = getMouseXY;
var MyX = 0
var MyY = 0
function getMouseXY(e) {
  if (IE) { // For IE
    MyX = event.clientX + document.body.scrollLeft
    MyY = event.clientY + document.body.scrollTop
  } else {  // For None IE
    MyX = e.pageX
    MyY = e.pageY
  }  
  if (MyX < 0){MyX = 0}
  if (MyY < 0){MyY = 0}  
  return true
}

$(document).ready(Mytoostip);
function Mytoostip(){
	   $("#myform :input:not([type=submit])").hover(function(){
		   var tt=$(this).val();
		   DoTip(this.rel,this.name,tt)},function(){$('#toolstip').hide('fast').empty();})
           .click(function(){$('#toolstip').hide('fast').empty();});	   
}
function DoTip(rr,nn,tt){
	var mm;
var myx=MyX+15;

$("#toolstip").css({left:myx,top:MyY});
if (nn=="myid"&&tt=="")
{
mm='請輸入您的ID，至少7位';
}
if (nn=="myid"&&tt!=="")
{
if (tt.length>=7)
	{
	mm=tt+'符合ID長度的要求';
	}
if (tt.length<7)
	{
	mm=tt+'不符合ID長度的要求,只有'+tt.length+'位';
	}
}
if (nn=="mypassword"&&tt=="")
{
	mm='請輸入您的密碼，至少7位';
}

if (nn=="mypassword"&&tt!=="")
{
if (tt.length>=7)
	{
	mm='您輸入的符合密碼長度的要求';
	}
if (tt.length<7)
	{
	mm='您輸入的不符合密碼長度的要求,只有'+tt.length+'位';
	}
}
if (nn=="message"&&tt=="")
{
mm='請輸入您的意見';
}
if (nn=="message"&&tt!=="")
{
mm='您輸入的意見是<br>'+tt;
}


$("#toolstip").show("fast").html(mm);

}
});

function hideit(){
$('#message').slideUp("slow");
	};
function showit(){
$('#myform :input[name=myid]').attr({disabled:"disabled"});	
$('#myform :input[name=mypassword]').attr({disabled:"disabled"});	
$('#message textarea').removeAttr("disabled").val("");	
$('#message').slideDown("slow");;
	};