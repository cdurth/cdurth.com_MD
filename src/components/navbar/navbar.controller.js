(function(){

	angular
		.module('navbar')
		.controller('navbarController',['$scope','$location',
		    function($scope,$location){
		        $scope.isActive = function (viewLocation) {
		        return viewLocation === $location.path();
		    };
		    
		}]);
})();
