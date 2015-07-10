angular.module('MyApp', [])

	.constant('VERSION', '1.0')

	.run(['VERSION', '$rootScope', function(VERSION, $rootScope) {
		$rootScope.version = VERSION;
		$rootScope.name = 'hellooooo';
		$rootScope.klass = 'red';
	}]);