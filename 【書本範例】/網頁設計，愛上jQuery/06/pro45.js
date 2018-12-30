$(document).ready(function(){ 
	$('#myform :input.required').after('*');
	$('#myform').submit(function(){
		var a= new Array();
		var b= new Array();
		var c,d;
		var fname;
		$('#myform :input[type=text]').each(function(e){
			fname=this.name;
			a[e]=fname+'='+$(this).val();
		});
$('#myform :input[type=checkbox]').each(function(e){
			fname=this.name;
			if (this.checked)
			{
				b[e]=fname+'='+$(this).val();
			}
					});
$('#myform :input[type=radio]').each(function(){
			fname=this.name;
			if (this.checked)
			{
				c=fname+'='+$(this).val();
			}
					});
$('#myform select').each(function(){
			fname=this.name;			
				d=fname+'='+$(this).val();			
		});

		var myfinal=a+','+b+','+c+','+d;		
		alert(myfinal);
		return false
	});
});

