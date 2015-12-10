(function(){
	var app = angular.module('nameController',[]);

	app.controller('NameController',
		function($scope, $http){
			/*$scope.names = ['Valdecir', 'Victor', 'Junior'];*/
			var url = 'http://localhost:49902/api/Values';
			$http.get(url)
				.success(function(name){
					$scope.names = name;
				})
				.error(function(data){
					console.log('server error!');
				});
		}
	);
}
)();	
