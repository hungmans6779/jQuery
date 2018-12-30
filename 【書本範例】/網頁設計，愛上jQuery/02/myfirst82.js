$(document).ready(function(){
$(':input').select(function(){
	$(this).addClass('myselect');
});
$(document).click(function(){
$(':input').removeClass('myselect');

});
});

