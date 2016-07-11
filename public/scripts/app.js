angular.module('tardyTrackerApp', [])
.controller('mainCtrl', function($scope) {

	$scope.learningNgChange= function() {
		console.log("The input changed");
	};

});