$(document).ready(function(){ 
	var test=$('#news').text();
	$('#myform').submit(function(){
	var mysearch=$('#ss').val();
	mysearch=$.trim(mysearch);
	var myreplace='<span class=hilite> '+mysearch+' </span> ';
	var reg = new RegExp(mysearch,"g"); 
   test1=test.replace(reg,myreplace);
$('#news').html(test1);
mysearch='·j¯Á: '+mysearch;
$('#show1').html(mysearch).wrap('<h1></h1>');
$("#news").hide();
confirmation();
function confirmation() {
	var answer = confirm(mysearch)
	if (answer){
		alert("·j¯Á¤¤......");
$("#news").show('slow');
$("#show1").show();
	}
	else{
$("#news").html(test).show('slow');
$("#show1").hide();
	}
}
return false
	});
});

