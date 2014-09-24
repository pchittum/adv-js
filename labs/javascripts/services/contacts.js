(function (ng) {
	"use strict";
	function contacts ($http) {
		return {
			list: function () {
				return $http({
					method: "get",
					url: "contacts.json"
				});
			}
		};
	}
	ng.module("comSalesforceExample")
		.factory("Contacts", contacts);
}(angular));
