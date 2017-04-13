$(document).ready(function(){
  //when search is clicked run code
  
 $("#search").click(function(){
    //get search input
    var searchTerm = $("#searchTerm").val();
    //API url with searchTerm
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";
    
   
   
    $.ajax({
      type: "GET",
      url: url,
      async: false,
      dataType: "json",
      success: function(data){
        // Heading: console.log(data[1][0]);
        // Desc: console.log(data[2][0]);
        // Link: console.log(data[3][0]);         
        
        if ($("#searchTerm").val() === '') {
         $("#output").empy();
         
       } else {
        
        
        $("#output").css({
          "background-color" : "white",
          "border" : "2px solid black",
          "border-radius" : "5px",
          "padding" : "10px",
          });
       }
        
       $("#output").html('');
       
        
       for (var i = 0; i < data[1].length; i++) {
        
        $("#output").prepend("<li><a href = "+data[3][i]+" target='_blank'>" + data[1][i] + "</a><p>" +data[2][i]+"</p></li>");
        };
      },
      error: function(errorMessage){
        alert("Error");
      }
      
    });
    
  });
});