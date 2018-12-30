

jQuery.myPlugin={
   FunctionOne:function(){
	 alert('This is a test.This is only a test.'); 
   },FunctionTwo:function(param){
	 alert('The parameter is '+param+' .');
   },sum:function(array){
	  var total=0;
	  jQuery.each(array,function(index,value){
		total+=value;
	  }); // end  $.each(array,function(index,value){
	  return total;
   }
} // end jQuery.myPlugin=
