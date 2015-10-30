app.controller('MainController', ['$scope', function($scope){
	$scope.title = 'Like & Love Buttons';

	$scope.likes= 0;
	$scope.loves = 0;

	$scope.likesOne = function(){
	$scope.likes++;
	};

	$scope.lovesOne = function(){
	$scope.loves++;
	};

	function tester(x){
		console.log(x);
	}

}]);