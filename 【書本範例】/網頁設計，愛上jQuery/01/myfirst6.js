$(document).ready(function(){
    
$("#show").click(function(){
  $("#myshow").animate({ width: "50%"},
 { queue: false, duration: 5000 } )
     .animate( { fontSize: '2em' } , 1000 )
     .animate( { borderWidth: 5 }, 1000);

});

  });

