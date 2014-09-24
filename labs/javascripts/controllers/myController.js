(function (ng) {
	function myController ($scope, Contacts, Location) {
		$scope.contacts = [];
		$scope.errors = [];
		$scope.latitude = "";
		$scope.longitude = "";
		$scope.addy = {};
		Location.get()
			.then(function (response) {
				//$scope.latitude = response.data.coords.latitude;
				//$scope.longitude = response.data.coords.longitude;
				$scope.addy = response.data.query.results.Result;
				console.log($scope.addy);
			})
			.catch(function (err) {
				console.log(err);
			});
		Contacts.list()
			.then(function (response) {
				$scope.contacts = $scope.contacts
					.concat(response.data);
			})
			.catch(function (err) {
				$scope.errors.push(err.statusText);
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
