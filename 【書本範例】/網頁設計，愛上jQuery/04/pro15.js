$(document).ready(function(){    
    $("div").click(function () {
      var myindex = $("div").index(this);
	  var myno=myindex+1;
      $("span").text("�o�ODIV�� " + myno);
    }); 
  });

