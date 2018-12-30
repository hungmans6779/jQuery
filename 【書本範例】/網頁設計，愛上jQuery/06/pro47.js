$(document).ready(function(){ 
	var myl;
var message='弱';
var mygif='dot1.gif';
$('#mypw').keyup(function(){
	myl=$('#mypw').val().length*10;
	$('#bar').empty();
	if (myl >=70){
		message='強';
		mygif='dot.gif';
		}
		if (myl<70){
		message='弱';
		mygif='dot1.gif';
		}
	var pwvalue=$('#mypw').val();
	var idvalue=$('#myid').val();
	var myre = new RegExp(idvalue);
  var chk = myre.exec(pwvalue);
  if (chk !== null) {
    message='這個密碼不好,建議不要把你的ID <b>'+RegExp.lastMatch+'</b> 放入密碼中';
	mygif='dot1.gif';
  }
	var show='<img src='+mygif+' width='+myl+' height=2 hspace=10 align=left>';
	$('#bar').html(show);
	$('#error').html(message);
	if (myl==0)
	{
$('#bar').empty();
$('#error').empty();
	}

});
});

