jQuery.fn.shadow=function(options){
  
  var defaults={
	slices:10,
	opacity:0.1,
	zIndex:-1
  };
  
  // $.extend:琌玡把计 extend 把计 
  var opts=jQuery.extend(defaults,options);
  
  return this.each(function(){
	 var $originalElement=jQuery(this);
	 for(var i=0;i<opts.slices;i++){
	   $originalElement.clone()
	                   .css({
		 				  position:'absolute',
						  top:$originalElement.offset().top+i,
						  left:$originalElement.offset().left+i,
						  margin:0,
						  zIndex:opts.zIndex,
						  opacity:opts.opacity
					   }).appendTo('body');
	} // end for(var i=0;i<opts.slices;i++){
  }); // end  return this.each(function(){
  
} // end jQuery.fn.shadow=function(options){



