jQuery.fn.shadow=function(){
   return this.each(function(){
	  var $originalElement=jQuery(this);
	  for(var i=0;i<5;i++){
		 $originalElement.clone()
		                 .css({
						    position:'absolute',
							left:$originalElement.offset().left+i,
							top:$originalElement.offset().top+i,
							margin:0,
							zIndex:-1,
							opacity:0.1
						  }).appendTo('body');
	  } // endf or(var i=0;i<5;i++){ 
   }); // end return this.each(function(){
};


jQuery.fn.shadow=function(slices,opacity,zIndex){
  return this.each(function(){
	var $originalElement=jQuery(this);
	for(var i=0;i<slices;i++){
	  $originalElement.clone()
	                  .css({
						    position:'absolute',
							left:$originalElement.offset().left+i,
							top:$originalElement.offset().top+i,
							margin:0,
							opacity:opacity,
							zIndex:zIndex
					  }).appendTo('body');
					  	   
	} // end for(var i=0;i<slices;i++){
  }); // end  return this.each(function(){
}; 




jQuery.fn.shadow=function(opts){
   return this.each(function(){
	  $originalElement=jQuery(this);
	  for(var i=0;i<opts.slices;i++){
		 $originalElement.clone()
		                 .css({
							position:'absolute',
							top:$originalElement.offset().top+i,
							left:$originalElement.offset().left+i,
							margin:0,
							opacity:opts.opacity,
							zIndex:opts.zIndex
						  }).appendTo('body');
	  } // end for(var i=0;i<opts.slices;i++){
   }); // end return this.each(function(){
}; // end jQuery.fn.shadow=function(opts){
	
	
	
	