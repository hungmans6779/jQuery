$(document).ready(function(){ 
		var accept='<img src=accept.png hspace=2 align="absmiddle">';
		var cancel='<img src=cancel.png hspace=2 align="absmiddle">';
		var errorimg='<img src=error.gif hspace=5 align="absmiddle">';
		var chk='<img src=chk.gif hspace=2 align="absmiddle">';
		var myblock='<div class=myblock id=block><h1>wait.......</h1></div>';
		var myblock1='<div class=myblock id=block1></div>';
		var myblock2='<div class=myblock id=block2></div>';

			$('#myform :input.required').after('<span>*</span>');
			$('#myform :input[name=id]').next().after('<span><a href=# id=check>'+chk+'</a></span>');
			$('#myform :input:eq(0)').focus();	
	
///////////////////////////////////id check function//////id focus//////////block remove//////////////////////////////////////	
	$('#check').click(function(){
		$('.error').hide();
		$('#id').hide();
		$(myblock).appendTo('body');
		$('#block').animate({width: '100%',opacity: 0.6}, 500);
		
		$.getScript('check.js',function(){	
			if (message!==undefined){message=cancel+message;}
			if (message==undefined){message=accept+'恭喜你這個ID可以使用';}
			
			$(':input[name=id]').next().next().after('<div id="id" align=center>'+message+'</div>');
			$('#block').html('<h1>'+message+'[close]</h1>');
				});

		$(':input[name=id]').focus(function(){
		$('#id').remove();
		});
			$('#block').click(function(){
				$(this).remove();
						});
			});

//////////////////////////////////////////form input change function/////////////////////////////////////////////////////////////////
	
       $('#myform :input').bind('change',function(){
		var inputname=$(this).attr('name');	
		var chkrequired=$(this).attr('class');//check is empty check or not
		

		switch (inputname)//use switch case
		{

case ''+inputname+'':

			var v=$(':input[name='+inputname+']').attr('rel');//check is size check or not
			v=parseInt(v);
			var myv=$(':input[name='+inputname+']').val().length;//get this input length
			$(this).focus(function(){
				$('#'+inputname).remove();//message remove **all message is #inputname
				});
//////////////////////////////////////////////empty check///////////////////////////////////////////////////////////////////////////
			
			if (chkrequired=='required')
			{			
					if (myv == 0)
						{	
							if (inputname=='id')
								{
					$(this).next().next().after('<div align=center class=error id='+inputname+'>'+cancel+'這個欄位不可空白 !!</div>');
							}
				else{
			$(this).next().after('<div align=center class=error id='+inputname+'>'+cancel+'這個欄位不可空白 !!</div>');
				}
				
			}

		}
//////////////////////////////////////////too short check///////////////////////////////////////////////////////////////////////////

//if (v > 0 && myv >0 && inputname!=='email')
if (v > 0 && myv >0 )

		{
			if (myv < v)
		{
				if (inputname=='id')
				{
					$(this).next().next().after('<div align=center class=error id='+inputname+'>'+cancel+'輸入的長度不足</div>');
				}
				
				else{
					$(this).next().after('<div align=center class=error id='+inputname+'>'+cancel+'輸入的長度不足</div>');
				
						}
				}
			}
/////////////////////////////////////////email check////////////////////////////////////////////////////////////////////////////
		if (inputname=='email' && myv >0)
			{
			var myevalue=$(':input[name=email]').val();
				if(myevalue.indexOf('@',0)==-1 || myevalue.indexOf('.',0)==-1){
					$(this).next().after('<div align=center class=error id=email>'+cancel+'錯誤的Email</div>');
					}
					}
		
////////////////////////////////////////chek password confirm/////////////////////////////////////////////////////////////////////////////////
if (inputname=='chkpassword' && myv >=v){
			var mypassword=$(':input[name=password]').val();
			var mychkvalue=$(this).val();
			if (mypassword!== mychkvalue)
			{
				$(this).next().after('<div align=center class=error id='+inputname+'>'+cancel+'輸入的密碼與確認的密碼不符</div>');
			}
		}


//////////////////end of case inputname	
			break
		}
//////////////////end of switch	


});// end of change function

//////////////////////////////////////form submit function/////////////////////////////////////////////////////////////////////////////
			$('#myform').submit(function(){
				$('.error').remove();			
		$(myblock1).appendTo('body');
		$('#block1').animate({width: '100%',opacity: 0.6}, 500);
			var a= new Array(); //for input type=text
			var aa= new Array();//for input type=text display alias
			var b= new Array();//for input type=checkbox
			var bb= new Array();//for input type=checkbox display alias
			var w= new Array();//for input type=password
			var ww= new Array();//for input type=password display alias
			
			var myerror="";
			var myblank="";
			var errorchk=0;
			var blankchk=0;
			var c,cc,d,dd;//c for input type=radio d for select 
			var fname;
/////////////////////////////////////input type=text check //////////////////////////////////////////////////////////////////////////
	$('#myform :input[type=text]').each(function(e){
			fname=this.name;
			var alias=$(this).attr('alias');
						
			a[e]=fname+':"'+$(this).val()+'"';
			aa[e]=alias+':"'+$(this).val()+'"<br>';
			
			var uu=$(this).attr('class');
			if (uu=='required' && !$(this).val())
			{			
			blankchk=1;
			myblank=myblank+'<br>'+errorimg+alias+'<br>';
			}
			if ($(this).attr('rel')!==undefined && $(this).val().length<$(this).attr('rel'))
			{
			errorchk=1;
			myerror=myerror+'<br>'+cancel+alias+'--[欄位輸入長度不足]';
			}
				
			
			if (fname=='email')
			{				
			var myevalue=$(':input[name=email]').val();
				if(myevalue.indexOf('@',0)==-1 || myevalue.indexOf('.',0)==-1){
					errorchk=1;
			myerror=myerror+'<br>'+cancel+alias+'--[錯誤]';
					}
					}			
		});
/////////////////////////////input type=password check//////////////////////////////////////////////////////////////////////////////
		$('#myform :input[type=password]').each(function(e){
			fname=this.name;
			var alias=$(this).attr('alias');
			w[e]=fname+':"'+$(this).val()+'"';
			ww[e]=alias+':"'+$(this).val()+'"';
			var uu=$(this).attr('class');
			
			if (uu=='required' && !$(this).val())
			{			
			blankchk=1;
			myblank=myblank+'<br>'+errorimg+alias+'<br>';
			}
			if ($(this).attr('rel')!==undefined && $(this).val().length<$(this).attr('rel'))
			{
			errorchk=1;
			myerror=myerror+'<br>'+cancel+alias+'--[欄位輸入長度不足]';
			}
			if (fname=='chkpassword')
				{
			var smypassword=$(':input[name=password]').val();
			var smychkvalue=$(':input[name=chkpassword]').val();
			if (smypassword!== smychkvalue)
			{
				errorchk=1;
			myerror=myerror+'<br>'+cancel+alias+'--[與密碼不符]';
			}
			}
		});
/////////////////////////////input type=checkbox check//////////////////////////////////////////////////////////////////////////
		$('#myform :input[type=checkbox]').each(function(e){
			fname=this.name;
			var alias=$(this).attr('alias');
					if (this.checked)
			{
				b[e]=fname+':"'+$(this).val()+'"';
				bb[e]=alias+':"'+$(this).val()+'"<br>';
			}
		});
/////////////////////////////input type=radio check//////////////////////////////////////////////////////////////////////
		$('#myform :input[type=radio]').each(function(){
			
			if (this.checked)
			{
				fname=this.name;
			var alias=$(this).attr('alias');
				c=fname+':"'+$(this).val()+'"';
				cc=alias+':"'+$(this).val()+'"<br>';
			}
		});
////////////////////////////select check//////////////////////////////////////////////////////////////////////////////////
		$('#myform select').each(function(){
			fname=this.name;
			var alias=$(this).attr('alias');
				d=fname+':"'+$(this).val()+'"';
				dd=alias+':"'+$(this).val()+'"<br>';
		});
/////////////////////////////////block message/////////////////////////////////////////////////////////////////////////////
		var myfinal='<h1>您發送的是</h1>';//for display
		
		$(aa).each(function(aaindex){myfinal=myfinal+aa[aaindex];})
		$(bb).each(function(bbindex){myfinal=myfinal+bb[bbindex];})
		
			myfinal=myfinal+cc+dd;
			
		//$(dd).each(function(ddindex){myfinal=myfinal+dd[ddindex];})		
		var mysubvalue=a+','+w+','+b+','+c+','+d;//for submit

////////////////////////////blank message///////////////////////////////////////////////////////////////////////////////
		if (blankchk==1)
				{
				$('#block1').html('<table bgcolor=black width=30%><tr><td align=left><br><b>以下的欄位不可空白<br>'+myblank+'</b><br><br></td></tr></table>');
				
				return false
				}
////////////////////////////success message/////////////////////////////////////////////////////////////////////////////
		if (errorchk==0 && blankchk==0)
		{
			$('#block1').remove();
			$(myblock2).appendTo('body');
			$('#block2').animate({width: '100%',opacity: 0.6}, 500);
			$('#block2').html('<table bgcolor=black width=30%><tr><td align=left>'+myfinal+'<br><h1>發送中!!</h1><br><br></td></tr></table>');
			$('#myform').hide();
		}

//////////////////////////error message///////////////////////////////////////////////////////////////////////////////

		if (errorchk==1)
				{
				$('#block1').append('<table bgcolor=black width=30%><tr><td align=left><br><br><b>以下的欄位所輸入的值欄位輸入長度不足或有錯誤<br><br>'+myerror+'</b><br><br></td></tr></table>');
				
				return false
				}
/////////////////////////////////////////////////////////////////////////////////////////////////////				
			return false
	
			});
///////////////////////////////////////end of submit function ///////////////////////////////////////

		$(document).click(function(){
				$('#block1').remove();
			});	
		
		
	
});

