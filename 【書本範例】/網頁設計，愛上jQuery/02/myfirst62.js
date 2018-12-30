$(document).ready(function(){
	 var station = [ "", "い", "古竡", "玭", "蔼动" ];
    var ticketprice = { :500, い:300, 古竡:200, 玭:100, 蔼动:50 };
	$.each(station, function() {
      $("#" + this).text("玡┕ " + this + "布基");	   
          });
		 $.each(ticketprice, function(i, val) {
      $("#" + i).append(" : " + val);
    });
	

});

