$(document).ready(function(){
    
$("#show").click(function(){
  $("div:not(:animated)").animate({ width: "50%"},
 { queue: false, duration: 5000 } )
     .animate( { fontSize: '2em' } , 1000 )
     .animate( { borderWidth: 5 }, 1000);
  
});
$("#stop").click(function(){
	$(":animated").stop();
});
  });

