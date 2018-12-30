
jQuery.fn.replaceWith = function(replacement) {
return this.each(function(){    
element = $(this);    
$(this).after(replacement).next().attr('class', element.attr('class')).attr('id',element.attr('id')).html(element.html()).prev().remove();
});
}; 

/* usage example $('a#fooid').replaceWith('<span></span>'); 
before:<a id="fooid" class="whatever">some text</a> 
after:<span id="fooid" class="whatever">some text</span> */
