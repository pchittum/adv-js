(function (ng, geo) {
	"use strict";
	function location ($q) {
		return {
			get: function() {
				var deferred;
				deferred = $q.defer();
				geo.getCurrentLocation(function(pos){
					deferred.resolve({
						data: pos
					});
				}, function(err){
					deferred.reject({
						data : err
					});
				});
				return deferred.promise;
			}
		};
	}
	ng.module('comSalesforceExample').factory("Location",location);
}(angular, navigator.geolocation));