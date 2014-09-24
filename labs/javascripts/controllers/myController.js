(function (ng) {
	function myController ($scope, Contacts) {
		$scope.contacts = [];
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
