$(document).ready(function(){
$(document).keydown(function(e){ 	
				if (e == null) { // ie
					keycode = event.keyCode;
				} else { // mozilla
					keycode = e.which;
				}
				if(keycode == 27){ 

$("#myform").hide("slow");
				}
});
});

