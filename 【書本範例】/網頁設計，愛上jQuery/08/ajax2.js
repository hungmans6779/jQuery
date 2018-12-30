$(document).ready(function(){ 
	$().ajaxStart(function() {
        $("#loading").show();
    });
	$().ajaxComplete(function() {
        $("#loading").hide();
    });
$.ajax({
	url: "member0.xml",
	type: "GET",
	cache: false,
		error: function() {
              alert("Error !!");
            },
  dataType: "xml",
	success: function(xml){
  var myname=$(xml).find('name').text();
  var myid=$(xml).find('id').text();
  var myemail=$(xml).find('email').text();
  $('#name').html(myname);
$('#id').html(myid);
$('#email').html(myemail);
	}
});

});



