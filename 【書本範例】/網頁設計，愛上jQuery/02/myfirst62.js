$(document).ready(function(){
	 var station = [ "台北", "台中", "嘉義", "台南", "高雄" ];
    var ticketprice = { 台北:500, 台中:300, 嘉義:200, 台南:100, 高雄:50 };
	$.each(station, function() {
      $("#" + this).text("前往 " + this + "的票價");	   
          });
		 $.each(ticketprice, function(i, val) {
      $("#" + i).append(" : " + val);
    });
	

});

