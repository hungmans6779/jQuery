$(document).ready(function(){ 
	$('#myform textarea:disabled').val("請先登錄後再發言");
	setTimeout("hideit()",3000);
	var t=0;	
$('#myform ').submit(function() {	
	if (t==1)
	{
		$('#mserror').empty();
		alert('資料寫入中,請稍待......');
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
		alert('請輸入您的留言');
		showit();
		t=1;
		return false
			}

if (myids==""||myids.length<=6)
	{
	var ii;
	$('#pwerror').empty();
	if (myids==""){ii='不可空白';}
	if (myids.length <=6 && myids.length !=0){ii='Id 太短';}

$('#iderror').html(ii);
$('#myform :input[name=myid]').select().focus();
return false
	}
	if (mypws==""||mypws.length<=6)
	{
		var pp;
		$('#iderror').empty();
		if (mypws==""){pp='不可空白';}
	if (mypws.length <=6 && mypws.length !=0){pp='密碼太短';}
$('#pwerror').html(pp);
$('#myform :input[name=mypassword]').select().focus();
return false
	}
if (mymess==""){
	$('#mserror').html('請輸入您的留言');
	return false
}

});

});

function hideit(){
$('#message').slideUp("slow");
	};
function showit(){
$('#myform :input[name=myid]').attr({disabled:"disabled"});	
$('#myform :input[name=mypassword]').attr({disabled:"disabled"});	
$('#message textarea').removeAttr("disabled").val("");
$('#myform :input[name=ss]').val("Go");
$('#message').slideDown("slow");;
	};