$(document).ready(function(){
	 var station = [ "�x�_", "�x��", "�Ÿq", "�x�n", "����" ];
    var ticketprice = { �x�_:500, �x��:300, �Ÿq:200, �x�n:100, ����:50 };
	$.each(station, function() {
      $("#" + this).text("�e�� " + this + "������");	   
          });
		 $.each(ticketprice, function(i, val) {
      $("#" + i).append(" : " + val);
    });
	

});

