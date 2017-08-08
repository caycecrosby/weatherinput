var weather = require('weather-js');


 
// Options: 
// search:     location name or zipcode 
// degreeType: F or C 
function findWeather ( user,location){
this.user = user;
this.location = location;
this.getWeather = function(){

  weather.find({search: this.location , degreeType: 'F'}, function(err, result) {
  if(err) console.log(err);
 
  console.log(result);
});

}

}

var KC = new findWeather('KC', 'Charlotte,NC')
KC.getWeather()

// findWeather ('Charlotte, NC')

module.exports = findWeather;