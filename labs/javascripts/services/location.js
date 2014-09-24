(function (ng, geo) {
	"use strict";
	function location () {
		return {
			get: function(callback) {
				geo.getCurrentLocation(function(pos){console.log(pos)});
			}
		};
	}
	ng.module('comSalesforceExample').factory("Location",location);
}(angular, navigator.geolocation));