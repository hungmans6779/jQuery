$(document).ready(function() {

$(document).ready(Mytoostip);

function Mytoostip(){
	   $("a.tip").hover(function(){DoTip(this.href,this.rel)},function(){$('#toolstip').hide('fast').empty();})
           .click(function(){$('#toolstip').slideUp().empty();});	   
}
function DoTip(hh,rr){
	 $(document).mousemove(function(e){
var MyX=e.pageX;
var MyY=e.pageY;
var myx=MyX+15;
$("#toolstip").css({left:myx,top:MyY});

});
	
$("#toolstip").show("fast").html('<img src=open.gif hspace=5>URL:<b>'+hh+'</b>').append('&nbsp;<br><br>'+rr+'');

return true;

	 

}

});