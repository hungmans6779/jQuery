$(document).ready(function(){
$(document).mousemove(function(e){
var Myx=e.pageX;
var Myy=e.pageY;

  $(':input[name=x]').val(Myx);
  $(':input[name=y]').val(Myy);
  return true
});
  $(':input').mouseover(function(){
alert('MouseOver '+$(this).attr('name'));
});
});

