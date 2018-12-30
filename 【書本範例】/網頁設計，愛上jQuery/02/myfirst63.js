$(document).ready(function(){
var obj1={a:1,b:25,c:"someone"};
var obj2={a:2,b:30,c:"no_one"};
var result=$.extend(obj1,obj2);
var dis1='obj1 is a='+obj1.a+' b='+obj1.b+' c='+obj1.c+'<br>';
var dis2='obj2 is a='+obj2.a+' b='+obj2.b+' c='+obj2.c+'<br>';
var dis3='new result is a='+result.a+' b='+result.b+' c='+result.c;
$('#dis').append(dis1).append(dis2).append(dis3);
});

