$(document).ready(function() {
var mytitle=$("span.newstitle:eq(0)").clone();
$(".chapter").html(mytitle);
var myemail0=$("span.auemail:eq(0)").html();
var myemail1='<br><a href=mailto:'+myemail0+'>連絡作者</a>';
$(".chapter").append(myemail1);
$("span.auemail:eq(0)").hide();
var link1=$("span.homepage:eq(0)").html();
var link2='<br><a href='+link1+'>網頁出處:'+link1+'</a>';
$(".chapter").append(link2);
$("span.homepage:eq(0)").hide();

});
