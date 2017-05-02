// controllers
weatherApp.controller('homeController',['$scope','cityService','$log',function($scope,cityService,$log){
	$scope.city = cityService.city;
	$scope.$watch('city',function(){
		cityService.city = $scope.city;
	});
}]);

weatherApp.controller('forecastController',['$scope','cityService','weatherService','$resource','$log','$routeParams',
	function($scope,cityService,weatherService,$resource,$log,$routeParams){
	

	$scope.city = cityService.city;
	$scope.days = $routeParams.days || '2';
	$scope.weatherResult = weatherService.getWeatherResult($scope.city,$scope.days);
	$scope.tempConvertor = function(degK){
		return Math.round(degK - 273);
	}
	$scope.dateConvertor = function(dt){
		return new Date(dt*1000);
	}
}]);