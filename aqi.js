let AQIndex = {
     "apiKey" : "364c5f9fb0a20b5dbe2b6cbb6abde94d5a88577f",
     fetchAQ : function(city) {
        fetch("https://api.waqi.info/feed/"+ city +"/?token=364c5f9fb0a20b5dbe2b6cbb6abde94d5a88577f")
        .then((response)=>response.json())
        .then((data)=>this.displayAirQuality(data))
     },
     displayAirQuality: function(data) {
      //   console.log(api);
      const aqi = data.data.aqi;
      const cityName = data.data.city.name;
      const long = data.data.city.geo[0];
      const lat = data.data.city.geo[1];

      document.querySelector(".cityName").innerHTML = cityName;
      document.querySelector(".temp").innerHTML = aqi;
      document.querySelector(".long").innerHTML = long;
      document.querySelector(".lat").innerHTML = lat;
     },
     search: function() {
      this.fetchAQ(document.querySelector(".inputBox").value)
     },
}

const searchEnter = document.querySelector(".inputBox")
searchEnter.addEventListener("keyup", function(e) {
   if(e.key == 13) {
      AQIndex.search();
   }
})
