$(document).ready(function() {
  var lat;
  var long;
  var fTemp;
  var weatherType;
  var windSpeed;
  var city;
  
  $.getJSON("http://ip-api.com/json", function(data2) {
    lat = data2.lat;
    long = data2.lon;
    $("#data").html("Latitude: " + lat + "<br>Longitude: " + long);
    
    var api = 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid=20bd65c8414c9ac3692a7c3918ec9b0c';
    console.log(api);
    
    var cTemp;
    var kTemp;
    var tempSwap = false;
    
    $.getJSON(api, function(data){
      weatherType = data.weather[0].description;
      kTemp = data.main.temp;
      windSpeed = data.wind.speed;
      city = data.name;
      
      
      //Temp kelvin to Far & Cels
      fTemp = ((kTemp)*(9/5)-459.67).toFixed(1);
      cTemp = ((kTemp)-273).toFixed(1);
      
      $("#city").html("<u><b>City</b></u><br>" + city);
      $("#weathertype").html("<u><b>Type</b></u><br>" + weatherType.charAt(0).toUpperCase() + weatherType.slice(1));
      
      $("#fTemp").html("<u><b>Temp</b></u><br>" + fTemp + " &#8457;");
      
      $('#fTemp').click(function(){
        if (tempSwap === false) {
          $("#fTemp").html("<u><b>Temp</b></u><br>" + cTemp + " &#8451;");
          tempSwap = true;
        } else {
          $("#fTemp").html("<u><b>Temp</b></u><br>" + fTemp + " &#8457;");
          tempSwap = false;
        }
      });
      
      windSpeed = (2.237 *(windSpeed)).toFixed(1);
      
      $("#windspeed").html("<u><b>Wind Speed</b></u><br>" + windSpeed + " mph");
      
      if(fTemp >= 80) {
        $("body").css("background-color", "#ff0000");
      } else if (fTemp < 80 && fTemp >= 70) {
        $("body").css("background-color", "#ff471a");
      } else if (fTemp < 70 && fTemp >= 60) {
        $("body").css("background-color", "#ffa366");
      } else if (fTemp < 60 && fTemp >= 50) {
        $("body").css("background-color", "#ffff99");
      } else if (fTemp < 50 && fTemp >= 40) {
        $("body").css("background-color", "#ffa366");
      } else {
        $("body").css("background-color", "#0033cc");
      };
  });
    
 });  

});