// $(document).ready(function(){
//     $("#designImg").click(function(){
//       $("#designContent").show();
//       $("#designImg").hide();
//       $("#designContent").click(function(){
//         $("#designImg").show();
//         $("#designContent").hide();
        
//       });
      
//     });  
//     $("#developmentImg").click(function(){
//         $("#developmentContent").toggle();
//       });  
//       $("#managementImg").click(function(){
//         $("#managementContent").toggle();
//       });  
//   });
$(document).ready(function(){
    $(".design").click(function(){
        $(".img1").toggle();
        $(".design1").toggle();
    });
});