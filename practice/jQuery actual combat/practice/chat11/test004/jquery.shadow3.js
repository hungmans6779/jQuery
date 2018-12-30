jQuery.fn.shadow=function(options){

  var defaults={
	slices:10,
	opacity:0.1,
	zIndex:-1,
	sliceOffset:function(i){
	  return {x:i,y:i};	
	}
  }; // end  var defaults={
	
  var opts=jQuery.extend(defaults,options);
  
  return this.each(function(){
	var $originalElements=jQuery(this);
	for(var i=0;i<opts.slices;i++){
		var offset=opts.sliceOffset(i);
		$originalElements.clone()
		                 .css({
							position:'absolute',
							left:$originalElements.offset().left+offset.x,
							top:$originalElements.offset().top+offset.y,
							margin:0,
							opacity:opts.opacity,
							zIndex:opts.zIndex
						 }).appendTo('body');
		
	} // end for(var i=0;i<opts.slices;i++){
			
  }); // end return this.each(function(){
	
	
}; // end jQuery.fn.shadow=function(options){