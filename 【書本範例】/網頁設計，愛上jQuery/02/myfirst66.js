$(document).ready(function(){
var display=$('div').get();
$('#message').text(display.length);
display=display.concat($(".mydis").get());
$('#message').append(','+display.length);
display = jQuery.unique(display);
$('#message').append(','+display.length);
});

