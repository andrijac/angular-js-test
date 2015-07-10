angular.module('MyApp', ['ngRoute'])

	.constant('VERSION', '1.1')
	
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when ('/', {
			controller: 'HomeCtrl',
			templateUrl: './home.html'
		});
		$routeProvider.when ('/info', {
			controller: 'InfoCtrl',
			templateUrl: './info.html'
		});
	}])
	
	.controller('HomeCtrl', ['$scope', function($scope) {
		$scope.title = {
			title: 'title title'
		};
		
		$scope.description = function() {
			return "function call";
		}
	}])
	
	.controller('InfoCtrl', ['$scope', function($scope) {
		$scope.title = 'Info page';		
	}]);
	
	// .config(['$routeProvider', function($routeProvider) {
		
	// }]);
	
	// .controller('InfoCtrl', ['$scope', function($scope) {
		
	// }]);