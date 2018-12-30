$(document).ready(function(){ 
var test=$('#test').text();
var kk=/([A-Za-z0-9_\-.]+)\@([A-Za-z0-9_\-.]+)\.([A-Za-z][A-Za-z\-.]{2,5})/g;
var reg=new RegExp(kk);
var myreplace='<span class=hilite><a href=mailto:$1@$2.$3>$1@$2.$3</a></span>';
var test1=test.replace(kk,myreplace);
$('#test').html(test1);
});

