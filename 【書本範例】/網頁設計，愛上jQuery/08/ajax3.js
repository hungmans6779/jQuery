$(document).ready(function(){ 
	
$.ajax({
	url: "note.xml",
	type: "GET",  
  dataType: "xml",
	success: function(xml){
  $(xml).find('note').each(function(){
	  var myto=$(this).text();
	  $('#to').html(myto);
   
  });
  
	}
});

});


