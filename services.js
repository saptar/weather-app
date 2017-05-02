// service
weatherApp.service('cityService',function(){
	this.city = 'Mysore';
})
weatherApp.service('weatherService',['$resource',function($resource){
	this.getWeatherResult = function(city,days){
		var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily",{get:{method:"JSONP"}});
		return weatherAPI.get({q:city,cnt:days,APPID:"3b58f211784eb02e52d9c93a76e18f90"});
	}
}]);