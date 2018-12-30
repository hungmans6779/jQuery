jQuery.fn.slideFadeOut=function(){
   return this.animate({
	 opacity:'hide',
	 height:'hide'
   }); 
}

jQuery.fn.slideFadeIn=function(){
  return this.animate({
	 opacity:'show',
	 height:'show'
  });
}


jQuery.fn.slideFadeToggle=function(){
  return this.animate({
	opacity:'toggle',
	height:'toggle'
  });
}



jQuery.fn.slideFadeOut=function(speed,callback){
   return this.animate({
	 opacity:'hide',
	 height:'hide'
   },speed,callback); 
}

jQuery.fn.slideFadeIn=function(speed,callback){
  return this.animate({
	 opacity:'show',
	 height:'show'
  },speed,callback); 
}


jQuery.fn.slideFadeToggle=function(speed,callback){
  return this.animate({
	opacity:'toggle',
	height:'toggle'
  },speed,callback); 
}