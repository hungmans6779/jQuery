$(document).ready(function(){ 
	$('#myform textarea:disabled').val("�Х��n����A�o��");
	setTimeout("hideit()",3000);
	var t=0;	
$('#myform ').submit(function() {	
	if (t==1)
	{
		$('#mserror').empty();
		alert('��Ƽg�J��,�еy��......');
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
		alert('�п�J�z���d��');
		showit();
		t=1;
		return false
			}

if (myids==""||myids.length<=6)
	{
	var ii;
	$('#pwerror').empty();
	if (myids==""){ii='���i�ť�';}
	if (myids.length <=6 && myids.length !=0){ii='Id �ӵu';}

$('#iderror').html(ii);
$('#myform :input[name=myid]').select().focus();
return false
	}
	if (mypws==""||mypws.length<=6)
	{
		var pp;
		$('#iderror').empty();
		if (mypws==""){pp='���i�ť�';}
	if (mypws.length <=6 && mypws.length !=0){pp='�K�X�ӵu';}
$('#pwerror').html(pp);
$('#myform :input[name=mypassword]').select().focus();
return false
	}
if (mymess==""){
	$('#mserror').html('�п�J�z���d��');
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