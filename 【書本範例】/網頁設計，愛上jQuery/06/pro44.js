$(document).ready(function(){ 
	$('#myform textarea:disabled').val("�Х��n�J");
	$('#myform :input.required').after('*');
	setTimeout("hideit()",3000);
	var t=0;
	//var myid,mypw;
$('#myform ').submit(function() {
	
	if (t==1)
	{
		$('#mserror').empty();
		alert('��J���\,.....�o�e��......');
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
		alert('�n�J����,�п�J�z���N��');
		showit();
		t=1;
		return false
			}

if (myids==""||myids.length<=6)
	{
	var ii;
	$('#pwerror').empty();
	if (myids==""){ii='�ФŪť�';}
	if (myids.length <=6 && myids.length !=0){ii='ID�ӵu,�ܤ֭n��7��';}

$('#iderror').html(ii);
$('#myform :input[name=myid]').select().focus();
return false
	}
	if (mypws==""||mypws.length<=6)
	{
		var pp;
		$('#iderror').empty();
		if (mypws==""){pp='�ФŪť�';}
	if (mypws.length <=6 && mypws.length !=0){pp='�K�X�ӵu,�ܤ֭n��7��';}
$('#pwerror').html(pp);
$('#myform :input[name=mypassword]').select().focus();
return false
	}
if (mymess==""){
	$('#mserror').html('�п�J�z���N��');
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
mm='�п�J�z��ID�A�ܤ�7��';
}
if (nn=="myid"&&tt!=="")
{
if (tt.length>=7)
	{
	mm=tt+'�ŦXID���ת��n�D';
	}
if (tt.length<7)
	{
	mm=tt+'���ŦXID���ת��n�D,�u��'+tt.length+'��';
	}
}
if (nn=="mypassword"&&tt=="")
{
	mm='�п�J�z���K�X�A�ܤ�7��';
}

if (nn=="mypassword"&&tt!=="")
{
if (tt.length>=7)
	{
	mm='�z��J���ŦX�K�X���ת��n�D';
	}
if (tt.length<7)
	{
	mm='�z��J�����ŦX�K�X���ת��n�D,�u��'+tt.length+'��';
	}
}
if (nn=="message"&&tt=="")
{
mm='�п�J�z���N��';
}
if (nn=="message"&&tt!=="")
{
mm='�z��J���N���O<br>'+tt;
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