$(document).ready(function(){    
    $("*", document.body).click(function (e) {
      e.stopPropagation();
      var mydomel = $(this).get(0);
      $("span:first").html(mydomel.tagName);
	  
    });

  });

