$(document).ready(function(){ 
	var myl;
var message='�z';
var mygif='dot1.gif';
$('#mypw').keyup(function(){
	myl=$('#mypw').val().length*10;
	$('#bar').empty();
	if (myl >=70){
		message='�j';
		mygif='dot.gif';
		}
		if (myl<70){
		message='�z';
		mygif='dot1.gif';
		}
	var pwvalue=$('#mypw').val();
	var idvalue=$('#myid').val();
	var myre = new RegExp(idvalue);
  var chk = myre.exec(pwvalue);
  if (chk !== null) {
    message='�o�ӱK�X���n,��ĳ���n��A��ID <b>'+RegExp.lastMatch+'</b> ��J�K�X��';
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

