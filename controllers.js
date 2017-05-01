// controllers
weatherApp.controller('homeController',['$scope','cityService','$log',function($scope,cityService,$log){
	$scope.city = cityService.city;
	$scope.$watch('city',function(){
		cityService.city = $scope.city;
	});
}]);

weatherApp.controller('forecastController',['$scope','cityService','$resource','$log','$routeParams',
	function($scope,cityService,$resource,$log,$routeParams){
	

	$scope.city = cityService.city;
	$scope.days = $routeParams.days || '2';
	$scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily",{get:{method:"JSONP"}});
	$scope.weatherResult = $scope.weatherAPI.get({q:$scope.city,cnt:$scope.days,APPID:"3b58f211784eb02e52d9c93a76e18f90"});
	$scope.tempConvertor = function(degK){
		return Math.round(degK - 273);
	}
	$scope.dateConvertor = function(dt){
		return new Date(dt*1000);
	}
}]);