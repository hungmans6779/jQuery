jQuery.fn.grandparent=function(){
  var grandparents=[];
  this.each(function(){
	grandparents.push(this.parentNode.parentNode);
  }); // end this.each(this,fucntion(index,value){
  grandparents=jQuery.unique(grandparents);
  return this.pushStack(grandparents);		 
}; // end jQuery.fn.grandparent=function(){