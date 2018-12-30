$(document).ready(function(){ 
	$().ajaxStart(function() {
        $("#loading").show();
    });
	$().ajaxComplete(function() {
        $("#loading").hide();
    });

$.ajax({
	url: "member.xml",
	type: "GET",
	cache: false,
		error: function() {
              alert("Error !!");
            },
  dataType: "xml",
	success: function(xml){
var myname=$('member',xml).find('name').text();
	  var myid=$('member',xml).find('id').text();
var myemail=$('member',xml).find('email').text();
  
  $('#name').html(myname);
$('#id').html(myid);
$('#email').html(myemail);
				
	}
});

});
