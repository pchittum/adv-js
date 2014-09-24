(function (ng) {
	function myController ($scope, Contacts, Location) {
		$scope.contacts = [];
		Location.get()
			.then(function(response){
				$scope.longitude = response.data.coords.longitude;
				$scope.latitude = response.data.coords.latitude;
			})
		Contacts.list()
			.then(function (response) {
				console.log(arguments);
			})
			.error(function () {
				console.log("error");
			});
		$scope.removeContact = function (i) {
			$scope.contacts.splice(i, 1);
		};
		$scope.saveContact = function () {
			$scope.contacts.push({
				firstName: $scope.firstName,
				lastName: $scope.lastName,
				email: $scope.email
			});
			$scope.firstName = "";
			$scope.lastName = "";
			$scope.email = "";
		};
	}
	ng.module("comSalesforceExample")
		.controller("MyController", myController);	
}(angular));
